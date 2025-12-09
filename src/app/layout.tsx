import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { gratoGrotesk } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "MRNet",
  description:
    "Беспроводной интернет для бизнеса",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${gratoGrotesk.variable} antialiased`}>
        <div className="flex min-h-screen flex-col bg-ink text-paper">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
