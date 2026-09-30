import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { CartItem } from "@/types/cart";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const items: CartItem[] = body.items;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Your shopping bag is empty. Please add items before checking out." },
        { status: 400 }
      );
    }

    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "http://localhost:3000";

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

    if (stripeSecretKey) {
      const stripe = new Stripe(stripeSecretKey);

      const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
        (item) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: `${item.product.name} (${item.selectedVariant.name})`,
              description:
                item.product.tagline ||
                item.product.description?.substring(0, 150) ||
                undefined,
              images:
                item.product.images && item.product.images.length > 0
                  ? [item.product.images[0]]
                  : undefined,
              metadata: {
                productId: item.product.id,
                variantId: item.selectedVariant.id,
                isMadeToOrder: item.product.isMadeToOrder ? "true" : "false",
              },
            },
            unit_amount: Math.round(item.selectedVariant.price * 100),
          },
          quantity: item.quantity,
        })
      );

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/shop`,
      });

      return NextResponse.json({ url: session.url });
    } else {
      // Fallback for development / demo mode when Stripe Secret Key is not set
      const mockSessionId = `demo_session_${Date.now()}`;
      const successUrl = `${origin}/order-success?session_id=${mockSessionId}`;
      return NextResponse.json({ url: successUrl });
    }
  } catch (error: any) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: error?.message || "An unexpected error occurred while initiating checkout." },
      { status: 500 }
    );
  }
}
