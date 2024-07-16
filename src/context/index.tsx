"use client";
import { UnifiedWalletProvider } from "@jup-ag/wallet-adapter";

export default function WalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UnifiedWalletProvider
      wallets={[]}
      config={{
        autoConnect: false,
        env: "devnet",
        metadata: {
          name: "justblink",
          description: "Making NFT collection blinks fun with no-code tools",
          url: "https://www.justblink.fun",
          iconUrls: ["/justblink.png"],
        },
        theme: "dark",
        lang: "en",
      }}
    >
      {children}
    </UnifiedWalletProvider>
  );
}
