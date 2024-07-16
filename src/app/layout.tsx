import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components";
import WalletProvider from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "justblink",
  description: "Making NFT collection blinks fun with no-code tools",
  icons: "/justblink.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#e6ecff]`}>
        <WalletProvider>
          <Navbar />
          {children}
          <Toaster />
        </WalletProvider>
      </body>
    </html>
  );
}
