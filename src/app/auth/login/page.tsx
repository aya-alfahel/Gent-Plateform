"use client";

import LoginForm from "@/app/components/LoginForm";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AUTH_PATH } from "@/routes/path";
import AuthSteps from "@/app/components/AuthSteps";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import SharedNavigation from "@/app/components/SharedNavigation";

export default function LoginPage() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDark 
        ? "bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#151b28]" 
        : "bg-gradient-to-br from-[#bed19e] via-[#a8c88a] to-[#9bc07a]"
    }`}>
      {/* Navigation Bar */}
      <SharedNavigation />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 py-8 px-4 mt-20">
        <div className="w-full max-w-sm hidden lg:block">
          <AuthSteps />
        </div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md lg:max-w-lg"
        >
          <div className={`rounded-2xl shadow-2xl p-6 sm:p-8 w-full border transition-all ${
            isDark
              ? "border-white/20 bg-[#0f1419]/95 backdrop-blur-md"
              : "border-[#5A7863]/30 bg-white/95 backdrop-blur-md"
          }`}>
            <h1 className={`text-2xl sm:text-3xl font-bold text-center mb-2 ${
              isDark ? "text-white" : "text-[#2d3e2d]"
            }`}>
              Sign In to Gent
            </h1>
            <p className={`text-center text-sm mb-8 ${
              isDark ? "text-white/60" : "text-[#2d3e2d]/60"
            }`}>
              Welcome back! Sign in to your account
            </p>

            <LoginForm />

            <div className={`mt-6 text-center text-sm sm:text-base ${
              isDark ? "text-white/70" : "text-[#2d3e2d]/70"
            }`}>
              Don&apos;t have an account?{' '}
              <a 
                href={AUTH_PATH.SIGNIN} 
                className={`font-medium hover:underline transition-colors ${
                  isDark ? "text-[#7dd3fc] hover:text-white" : "text-[#5A7863] hover:text-[#2d3e2d]"
                }`}
              >
                Register
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Links */}
      <footer className={`w-full py-4 border-t transition-colors duration-300 ${
        isDark
          ? "border-white/10 bg-[#0f1419]/50"
          : "border-[#5A7863]/20 bg-white/50"
      }`}>
        <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm">
          <a
            href="/privacy"
            className={`transition-colors ${
              isDark
                ? "text-white/60 hover:text-white"
                : "text-[#2d3e2d]/60 hover:text-[#2d3e2d]"
            }`}
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className={`transition-colors ${
              isDark
                ? "text-white/60 hover:text-white"
                : "text-[#2d3e2d]/60 hover:text-[#2d3e2d]"
            }`}
          >
            Terms of Service
          </a>
          <span className={isDark ? "text-white/30" : "text-[#2d3e2d]/30"}>•</span>
          <span className={`text-xs ${isDark ? "text-white/50" : "text-[#2d3e2d]/50"}`}>
            © 2026 Gent. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
