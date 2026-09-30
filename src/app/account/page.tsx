"use client";

import { useState } from "react";
import Link from "next/link";

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      isLogin
        ? `Welcome back to The Studio Mayfair, ${email}`
        : `Thank you for registering your Mayfair client account, ${fullName}!`
    );
  };

  return (
    <div className="bg-[#FCFCFC] py-20 text-[#313131] min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="text-center space-y-3 mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#7C856E] font-medium">
            CLIENT PORTAL
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl uppercase tracking-wider text-[#313131]">
            {isLogin ? "Sign In to Mayfair" : "Create Client Account"}
          </h1>
          <p className="text-xs text-gray-500 font-light">
            {isLogin
              ? "Access your bespoke order history, fitting appointments, and private wishlist."
              : "Register for seamless trunk show bookings and exclusive preview access."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-[#E8E8E8] p-8 space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-[11px] uppercase tracking-widest font-medium text-[#313131] mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Lord / Lady / Mr / Ms"
                className="w-full bg-[#FBFBFB] border border-[#D9D9D9] px-3.5 py-2.5 text-xs text-[#313131] focus:outline-none focus:border-[#484D40]"
              />
            </div>
          )}

          <div>
            <label className="block text-[11px] uppercase tracking-widest font-medium text-[#313131] mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="client@mayfair.com"
              className="w-full bg-[#FBFBFB] border border-[#D9D9D9] px-3.5 py-2.5 text-xs text-[#313131] focus:outline-none focus:border-[#484D40]"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-widest font-medium text-[#313131] mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#FBFBFB] border border-[#D9D9D9] px-3.5 py-2.5 text-xs text-[#313131] focus:outline-none focus:border-[#484D40]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#484D40] text-[#FCFCFC] py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#3B3F34] transition-colors mt-4"
          >
            {isLogin ? "SIGN IN" : "REGISTER ACCOUNT"}
          </button>
        </form>

        <div className="text-center mt-6 space-y-2">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs text-[#7C856E] underline hover:text-[#313131] transition-colors tracking-wide"
          >
            {isLogin
              ? "Don't have an account? Create one here"
              : "Already have an account? Sign in"}
          </button>
          <div className="pt-2">
            <Link
              href="/bespoke"
              className="text-[11px] text-gray-500 uppercase tracking-widest hover:underline"
            >
              Need assistance with an appointment? Contact Atelier
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
