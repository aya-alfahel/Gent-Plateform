"use client";

import { GitBranch, Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/slices/theme-slice";
import { RootState } from "@/store";
import { AUTH_PATH } from "@/routes/path";
import Link from "next/link";
import { useState } from "react";

export default function SharedNavigation() {
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/faq", label: "FAQ" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 transition-colors duration-300 z-50 backdrop-blur-xl border-b ${
        isDark
          ? "bg-[#1a1f2e]/40 border-white/10 shadow-lg shadow-black/20"
          : "bg-white/40 border-white/30 shadow-lg shadow-black/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/home" className="flex items-center gap-2">
            <GitBranch className={`w-6 h-6 ${isDark ? "text-[#7dd3fc]" : "text-[#5A7863]"}`} />
            <span className={`text-xl font-bold ${isDark ? "text-white" : "text-[#5A7863]"}`}>Gent</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <motion.div className="flex items-center gap-6" whileHover={{ scale: 1.05 }}>
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`text-sm font-medium transition-colors ${isDark ? "text-white/80 hover:text-white" : "text-[#2d3e2d]/80 hover:text-[#2d3e2d]"}`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
          <motion.button
            onClick={() => dispatch(toggleTheme())}
            className={`p-2 rounded-lg transition-all ${
              isDark
                ? "bg-white/10 hover:bg-white/20 text-yellow-400"
                : "bg-black/10 hover:bg-black/20 text-gray-700"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
          <motion.a
            href={AUTH_PATH.LOGIN}
            className={`px-6 py-2 rounded-lg transition-all font-medium ${
              isDark
                ? "bg-gradient-to-r from-[#7dd3fc] to-[#06b6d4] text-[#0f1419] hover:shadow-lg hover:shadow-cyan-500/50"
                : "bg-gradient-to-r from-[#5A7863] to-[#4a6853] text-white hover:shadow-lg"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <motion.button
            onClick={() => dispatch(toggleTheme())}
            className={`p-2 rounded-lg transition-all ${
              isDark
                ? "bg-white/10 hover:bg-white/20 text-yellow-400"
                : "bg-black/10 hover:bg-black/20 text-gray-700"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg transition-all ${
              isDark
                ? "bg-white/10 hover:bg-white/20 text-white"
                : "bg-black/10 hover:bg-black/20 text-gray-700"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden overflow-hidden border-t ${
          isDark ? "border-white/10" : "border-white/30"
        }`}
      >
        <div className={`px-4 py-4 space-y-3 ${
          isDark ? "bg-[#1a1f2e]/60" : "bg-white/60"
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isDark
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-[#2d3e2d]/80 hover:text-[#2d3e2d] hover:bg-black/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <motion.a
            href={AUTH_PATH.LOGIN}
            className={`block px-4 py-2 rounded-lg transition-all font-medium text-center ${
              isDark
                ? "bg-gradient-to-r from-[#7dd3fc] to-[#06b6d4] text-[#0f1419]"
                : "bg-gradient-to-r from-[#5A7863] to-[#4a6853] text-white"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
