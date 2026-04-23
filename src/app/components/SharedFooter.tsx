"use client";

import { GitBranch, Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Link from "next/link";

export default function SharedFooter() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer 
      className={`bottom-0 left-0 right-0 border-t transition-colors duration-300  ${
        isDark
          ? "border-white/20 bg-[#0f1419]/95 backdrop-blur-xl"
          : "border-[#2d3e2d]/20 bg-[#bed19e]/95 backdrop-blur-xl"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid md:grid-cols-4 gap-6 mb-4">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-3">
              <GitBranch className={`w-5 h-5 ${isDark ? "text-[#7dd3fc]" : "text-[#5A7863]"}`} />
              <span className={`font-bold text-sm ${isDark ? "text-white" : "text-[#5A7863]"}`}>Gent</span>
            </div>
            <p className={`text-xs ${isDark ? "text-white/60" : "text-[#2d3e2d]/60"}`}>
              Lightweight version control for modern developers.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className={`font-semibold mb-2 text-xs ${isDark ? "text-white" : "text-[#2d3e2d]"}`}>Product</h4>
            <ul className={`space-y-1 text-xs ${isDark ? "text-white/60" : "text-[#2d3e2d]/60"}`}>
              <li><Link href="/services" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-[#2d3e2d]"}`}>Services</Link></li>
              <li><Link href="/faq" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-[#2d3e2d]"}`}>FAQ</Link></li>
              <li><Link href="/terms" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-[#2d3e2d]"}`}>Terms</Link></li>
              <li><Link href="/privacy" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-[#2d3e2d]"}`}>Privacy</Link></li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className={`font-semibold mb-2 text-xs ${isDark ? "text-white" : "text-[#2d3e2d]"}`}>Contact</h4>
            <ul className={`space-y-1 text-xs ${isDark ? "text-white/60" : "text-[#2d3e2d]/60"}`}>
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3" />
                <a href="mailto:info@Gent.com" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-[#2d3e2d]"}`}>info@Gent.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3 h-3" />
                <a href="tel:+96346789032" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-[#2d3e2d]"}`}>+963 46789032</a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className={`font-semibold mb-2 text-xs ${isDark ? "text-white" : "text-[#2d3e2d]"}`}>Follow Us</h4>
            <div className="flex gap-3">
              <motion.a
                href="#"
                className={`transition-colors ${isDark ? "text-white/60 hover:text-white" : "text-[#2d3e2d]/60 hover:text-[#2d3e2d]"}`}
                whileHover={{ scale: 1.2 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#"
                className={`transition-colors ${isDark ? "text-white/60 hover:text-white" : "text-[#2d3e2d]/60 hover:text-[#2d3e2d]"}`}
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#"
                className={`transition-colors ${isDark ? "text-white/60 hover:text-white" : "text-[#2d3e2d]/60 hover:text-[#2d3e2d]"}`}
                whileHover={{ scale: 1.2 }}
              >
                <Twitter className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className={`border-t pt-3 transition-colors ${
            isDark
              ? "border-white/20"
              : "border-[#2d3e2d]/20"
          }`}
          variants={itemVariants}
        >
          <p className={`text-center text-xs mb-2 ${isDark ? "text-white/70" : "text-[#2d3e2d]/70"}`}>
            Gent is a lightweight, modern version control system designed to simplify code management and collaboration for developers worldwide.
          </p>
          <p className={`text-center text-xs ${isDark ? "text-white/50" : "text-[#2d3e2d]/50"}`}>
            &copy; 2026 Gent. All rights reserved. Built with passion for developers.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
