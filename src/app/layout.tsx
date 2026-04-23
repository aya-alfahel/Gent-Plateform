import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "./providers";
import ReduxProvider from "./redux-provider";
import ThemeProvider from "./theme-provider";
import CookieConsent from "./components/CookieConsent";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gent – Lightweight Version Control & Code Hosting Platform",
  description:
    "Gent is a lightweight version control system with a Git-like CLI and a GitHub-inspired web interface for managing repositories, commits, and collaboration.",
    icons: {
    icon: "/logo.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate a simple CSRF token (in production, this should come from the server)
  const csrfToken = typeof window !== 'undefined' 
    ? localStorage.getItem('csrfToken') || 
      Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    : '';

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="csrf-token" content={csrfToken} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ThemeProvider>
            <QueryProvider>
              <Toaster position="top-center" richColors />
              <CookieConsent />
              {children}
            </QueryProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
