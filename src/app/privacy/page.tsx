"use client";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import SharedNavigation from "@/app/components/SharedNavigation";
import SharedFooter from "@/app/components/SharedFooter";
import NotificationCard from "@/app/components/NotificationCard";
import { Shield } from "lucide-react";
import { useState, useEffect } from "react";

export default function Privacy() {
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
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This includes your name, email address, password, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, and usage data."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send transactional and promotional communications, and comply with legal obligations. We may also use your information to personalize your experience, analyze usage patterns, and develop new features and services."
    },
    {
      title: "3. Information Sharing",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights and safety."
    },
    {
      title: "4. Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security of your information."
    },
    {
      title: "5. Cookies and Tracking",
      content: "We use cookies and similar tracking technologies to enhance your experience on our platform. These technologies help us remember your preferences, understand how you use our services, and deliver personalized content. You can control cookie settings through your browser, though some features may not function properly if cookies are disabled."
    },
    {
      title: "6. Your Rights and Choices",
      content: "You have the right to access, update, or delete your personal information at any time by logging into your account or contacting us. You can also opt-out of promotional communications by following the unsubscribe instructions in our emails. Depending on your location, you may have additional rights regarding your personal data."
    },
    {
      title: "7. Data Retention",
      content: "We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy. You can request deletion of your account and associated data at any time, subject to legal and operational requirements."
    },
    {
      title: "8. Third-Party Links",
      content: "Our website may contain links to third-party websites and services that are not operated by Gent. This privacy policy does not apply to third-party websites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services before providing your information."
    },
    {
      title: "9. Children's Privacy",
      content: "Gent is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information and terminate the child's account."
    },
    {
      title: "10. Changes to This Policy",
      content: "We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the 'Last Updated' date. Your continued use of our services constitutes your acceptance of the updated policy."
    },
    {
      title: "11. Contact Us",
      content: "If you have questions about this privacy policy or our privacy practices, please contact us at privacy@gent.com. We will respond to your inquiry within 30 days. You can also reach out to our Data Protection Officer for privacy-related concerns."
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
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center space-y-6 mb-16" variants={itemVariants}>
          <div className="flex justify-center mb-4">
            <Shield className={`w-16 h-16 ${isDark ? "text-[#7dd3fc]" : "text-[#5A7863]"}`} />
          </div>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg ${
            isDark ? "text-white" : "text-[#1a2e1a]"
          }`}>
            Privacy
            <span className={isDark ? "text-[#7dd3fc]" : "text-[#5A7863]"}> Policy</span>
          </h1>
          <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-[#2d3e2d]"
          }`}>
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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

      {/* Data Protection Section */}
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
            Your Data Protection Rights
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-[#4a5f4a]"
          }`}>
            We are committed to protecting your privacy and giving you control over your data
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Access Your Data",
              description: "You have the right to request and access all personal information we hold about you at any time.",
              badge: "Access"
            },
            {
              title: "Update Information",
              description: "Keep your information accurate and up-to-date. You can modify your profile details whenever needed.",
              badge: "Update"
            },
            {
              title: "Delete Your Data",
              description: "Request deletion of your account and associated data. We'll process your request within 30 days.",
              badge: "Delete"
            },
            {
              title: "Data Portability",
              description: "Export your data in a standard format. Take your information with you if you decide to leave.",
              badge: "Export"
            },
            {
              title: "Opt-Out Options",
              description: "Control your communication preferences. Unsubscribe from marketing emails anytime.",
              badge: "Control"
            },
            {
              title: "Security Measures",
              description: "We use encryption and security protocols to protect your data from unauthorized access.",
              badge: "Secure"
            },
          ].map((right, idx) => (
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
                  {right.badge}
                </span>
                <p className={`text-xs font-medium ${isDark ? "text-white/50" : "text-[#2d3e2d]/50"}`}>
                  active
                </p>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-[#2d3e2d]"}`}>
                {right.title}
              </h3>
              <p className={`text-sm ${isDark ? "text-white/70" : "text-[#2d3e2d]/70"}`}>
                {right.description}
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
            Privacy Questions?
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            isDark ? "text-white/80" : "text-[#2d3e2d]"
          }`}>
            We take your privacy seriously. If you have any questions or concerns about how we handle your data, reach out to our privacy team.
          </p>
          <motion.a
            href="mailto:privacy@gent.com"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-all font-bold ${
              isDark
                ? "bg-white text-[#0f1419] hover:shadow-xl hover:shadow-white/50"
                : "bg-[#2d3e2d] text-white hover:shadow-xl"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Privacy Team
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
