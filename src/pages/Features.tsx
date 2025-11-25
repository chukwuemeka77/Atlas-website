import React from "react";
import { CheckCircle, Rocket, Layers, Coins, Cpu, Shield, Zap, Globe, Wallet, Wrench, LineChart, Boxes } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      title: "Multi-Token AMM DEX",
      description: "Swap any ERC-20 asset with deep liquidity and MEV-resistant execution.",
      icon: <Coins className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Launchpad",
      description: "Token creators can deploy new tokens and run presales directly with no-code tools.",
      icon: <Rocket className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Launchpool",
      description: "Stake new project tokens or existing pairs to earn Atlas rewards.",
      icon: <Layers className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "LP Farming & Rewards",
      description: "Provide liquidity and earn Atlas rewards automatically through LP emissions.",
      icon: <LineChart className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Atlas Staking Engine",
      description: "Stake any supported ERC-20 token to earn Atlas—unified reward system.",
      icon: <Cpu className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "NFT Integration",
      description: "NFT-based access, premium tiers, governance boosts, and staking multipliers.",
      icon: <Boxes className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Treasury Vault",
      description: "Secure on-chain vault for protocol revenue, fees, and reward emissions.",
      icon: <Shield className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Decentralized Governance",
      description: "Atlas token holders vote on upgrades, emissions, fees, and community proposals.",
      icon: <Globe className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Fiat On-Ramp & Off-Ramp",
      description: "Buy and sell tokens directly with fiat—no KYC required, fast settlement.",
      icon: <Wallet className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Zero-Code Builder",
      description: "Create tokens, run presales, deploy pools, and configure launchpads without coding.",
      icon: <Wrench className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Ultra-Fast Execution",
      description: "Optimized swaps through our custom router for near-zero latency transactions.",
      icon: <Zap className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Modular Ecosystem",
      description: "Easily integrate launchpad, DEX, staking, or NFTs through the developer SDK.",
      icon: <CheckCircle className="w-10 h-10 text-blue-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold">Atlas Protocol Features</h1>
        <p className="mt-4 text-gray-300">
          A next-generation modular DEX ecosystem designed for builders, traders, and users.
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all"
          >
            <div className="flex justify-center mb-6">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
