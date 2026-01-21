import { ExitIntentProvider } from "@/components/modal/ExitIntentProvider";
import "./globals.css";
import react from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viral Ad Media — Grow Your Revenue",
  description: "Convert visitors into leads with a proven marketing funnel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ExitIntentProvider>{children}</ExitIntentProvider>
        <Script id="vivian-config" strategy="afterInteractive">
          {`
            window.VIVIAN_CHAT_CONFIG = {
              baseUrl: "https://vivian-chat.netlify.app",
              position: "right",
              bottom: "18px",
              side: "18px"
            };
          `}
        </Script>

        <Script
          src="https://vivian-chat.netlify.app/vivian-widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
