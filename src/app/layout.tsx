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
      </body>
    </html>
  );
}
