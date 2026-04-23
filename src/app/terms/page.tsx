"use client";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import SharedNavigation from "@/app/components/SharedNavigation";
import SharedFooter from "@/app/components/SharedFooter";
import NotificationCard from "@/app/components/NotificationCard";
import { FileText } from "lucide-react";
import { useState, useEffect } from "react";

export default function Terms() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using Gent, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. We reserve the right to make changes to these terms at any time without notice."
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on Gent for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on Gent; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server."
    },
    {
      title: "3. Disclaimer",
      content: "The materials on Gent are provided on an 'as is' basis. Gent makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
      title: "4. Limitations",
      content: "In no event shall Gent or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Gent, even if Gent or an authorized representative has been notified orally or in writing of the possibility of such damage."
    },
    {
      title: "5. Accuracy of Materials",
      content: "The materials appearing on Gent could include technical, typographical, or photographic errors. Gent does not warrant that any of the materials on its website are accurate, complete, or current. Gent may make changes to the materials contained on its website at any time without notice."
    },
    {
      title: "6. Materials and Content",
      content: "Gent has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Gent of the site. Use of any such linked website is at the user's own risk. If you believe that your work has been copied in a way that constitutes copyright infringement, please provide written notice to our copyright agent."
    },
    {
      title: "7. Modifications",
      content: "Gent may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service. We reserve the right to modify or discontinue, temporarily or permanently, the website (or any part thereof) with or without notice."
    },
    {
      title: "8. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Gent operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location. If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect."
    },
    {
      title: "9. User Accounts",
      content: "If you create an account on Gent, you are responsible for maintaining the confidentiality of your account information and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password. You must notify us immediately of any unauthorized use of your account."
    },
    {
      title: "10. Prohibited Activities",
      content: "You agree not to use Gent for any unlawful purpose or in any way that could damage, disable, or impair the service. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, disrupting the normal flow of dialogue within our website, or attempting to gain unauthorized access to our systems."
    },
    {
      title: "11. Intellectual Property Rights",
      content: "All content included on Gent, such as text, graphics, logos, images, and software, is the property of Gent or its content suppliers and is protected by international copyright laws. The compilation of all content on Gent is the exclusive property of Gent and is protected by international copyright laws."
    },
    {
      title: "12. Limitation of Liability",
      content: "In no event shall Gent, its directors, employees, or agents be liable to you or any third party for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the website or these terms of service, even if Gent has been advised of the possibility of such damages."
    },
    {
      title: "13. Contact Information",
      content: "If you have any questions about these Terms of Service, please contact us at legal@gent.com. We will respond to your inquiry within 30 days. You can also reach out to our legal team for any concerns or disputes regarding these terms."
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? "bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#151b28]" 
        : "bg-gradient-to-br from-[#bed19e] via-[#a8c88a] to-[#9bc07a]"
    } text-foreground overflow-hidden`}>
      {!isHydrated ? null : (
        <>
          <SharedNavigation />

      {/* Hero Section */}
      <motion.section 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-26 mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center space-y-6 mb-16" variants={itemVariants}>
          <div className="flex justify-center mb-4">
            <FileText className={`w-16 h-16 ${isDark ? "text-[#7dd3fc]" : "text-[#5A7863]"}`} />
          </div>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg ${
            isDark ? "text-white" : "text-[#1a2e1a]"
          }`}>
            Terms of
            <span className={isDark ? "text-[#7dd3fc]" : "text-[#5A7863]"}> Service</span>
          </h1>
          <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-[#2d3e2d]"
          }`}>
            Please read these terms carefully before using Gent. By accessing our services, you agree to be bound by these terms.
          </p>
          <p className={`text-sm ${isDark ? "text-white/60" : "text-[#2d3e2d]/60"}`}>
            Last Updated: April 18, 2026
          </p>
        </motion.div>
      </motion.section>

      {/* Content Section */}
      <motion.section 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              className={`rounded-xl border p-8 transition-all ${
                isDark
                  ? "border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  : "border-[#5A7863]/30 bg-white/40 backdrop-blur-sm hover:bg-white/60"
              }`}
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-[#2d3e2d]"}`}>
                {section.title}
              </h2>
              <p className={`leading-relaxed ${isDark ? "text-white/80" : "text-[#2d3e2d]"}`}>
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Key Points Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg ${
            isDark ? "text-white" : "text-[#2d3e2d]"
          }`}>
            Key Points to Remember
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-[#4a5f4a]"
          }`}>
            Important highlights from our terms of service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Your Responsibility",
              description: "You are responsible for maintaining the confidentiality of your account and password. Keep your login credentials secure at all times.",
              badge: "Security"
            },
            {
              title: "Prohibited Activities",
              description: "Do not engage in unlawful activities, harassment, or attempts to disrupt our services. Respect other users and our platform.",
              badge: "Rules"
            },
            {
              title: "Intellectual Property",
              description: "All content on Gent is protected by copyright. Do not reproduce, modify, or distribute our materials without permission.",
              badge: "Copyright"
            },
            {
              title: "Limitation of Liability",
              description: "Gent is provided 'as is'. We are not liable for indirect damages or losses arising from your use of our services.",
              badge: "Legal"
            },
            {
              title: "Changes to Terms",
              description: "We may modify these terms at any time. Continued use of our services means you accept the updated terms.",
              badge: "Updates"
            },
            {
              title: "Dispute Resolution",
              description: "Any disputes will be governed by applicable law. Contact our legal team for concerns or disputes.",
              badge: "Support"
            },
          ].map((point, idx) => (
            <motion.div
              key={idx}
              className={`rounded-xl border p-6 transition-all ${
                isDark
                  ? "border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  : "border-[#5A7863]/30 bg-white/40 backdrop-blur-sm hover:bg-white/60"
              }`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${
                  isDark
                    ? "bg-[#7dd3fc]/20 text-[#7dd3fc]"
                    : "bg-[#5A7863]/20 text-[#5A7863]"
                }`}>
                  {point.badge}
                </span>
                <p className={`text-xs font-medium ${isDark ? "text-white/50" : "text-[#2d3e2d]/50"}`}>
                  active
                </p>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-[#2d3e2d]"}`}>
                {point.title}
              </h3>
              <p className={`text-sm ${isDark ? "text-white/70" : "text-[#2d3e2d]/70"}`}>
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className={`rounded-2xl p-12 border text-center ${
            isDark
              ? "bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md border-white/30"
              : "bg-gradient-to-r from-[#2d3e2d]/20 to-[#2d3e2d]/10 backdrop-blur-md border-[#2d3e2d]/30"
          }`}
          variants={itemVariants}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg ${
            isDark ? "text-white" : "text-[#2d3e2d]"
          }`}>
            Questions About Our Terms?
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            isDark ? "text-white/80" : "text-[#2d3e2d]"
          }`}>
            If you have any questions or concerns about these terms of service, our legal team is here to help. Contact us anytime.
          </p>
          <motion.a
            href="mailto:legal@gent.com"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-all font-bold ${
              isDark
                ? "bg-white text-[#0f1419] hover:shadow-xl hover:shadow-white/50"
                : "bg-[#2d3e2d] text-white hover:shadow-xl"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Legal Team
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Notification Card */}
      <NotificationCard />

      {/* Footer */}
      <SharedFooter />
        </>
      )}
    </div>
  );
}
