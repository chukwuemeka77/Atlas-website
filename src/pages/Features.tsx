import React from "react";
import FeatureCard from "../components/FeatureCard";
import {
  Rocket,
  Layers,
  Coins,
  DollarSign,
  Lock,
  Star,
  Wallet,
  ShieldCheck,
  Globe,
  Wrench,
  Zap,
  Boxes,
} from "lucide-react";

const featuresData = [
  {
    title: "Multi-Token AMM DEX",
    description:
      "Swap any ERC-20 pair with deep liquidity and an optimized router for minimal slippage.",
    icon: Rocket,
    // no imageSrc -> shows gradient placeholder inside the card
  },
  {
    title: "No-Code Launchpad",
    description:
      "Create token sales, vesting, and auto-liquidity with a guided wizard — no coding required.",
    icon: Layers,
  },
  {
    title: "Launchpool",
    description:
      "Flexible staking pools for projects: stake tokens or LPs, distribute rewards in ATLAS.",
    icon: Coins,
  },
  {
    title: "LP Farming & Rewards",
    description:
      "Automatically earn ATLAS for providing liquidity across any supported pools.",
    icon: DollarSign,
  },
  {
    title: "Flexible Staking Engine",
    description:
      "Stake ATLAS (or other supported tokens) — supports instant unstake and reward claiming.",
    icon: Lock,
  },
  {
    title: "NFT Launch & Staking",
    description:
      "Launch NFT collections, run whitelist sales and enable NFT staking for token rewards.",
    icon: Star,
  },
  {
    title: "Vault & Treasury Automation",
    description:
      "Protocol fees and bridge fees route to the on-chain vault admin for transparent governance.",
    icon: Wallet,
  },
  {
    title: "DAO Governance",
    description:
      "Token-based governance: vote on parameters, treasury spends, and feature roadmaps.",
    icon: ShieldCheck,
  },
  {
    title: "Fiat On-Ramp / Off-Ramp",
    description:
      "Buy ATLAS (or presale tokens) with fiat. Users can also withdraw to fiat via liquidity rails.",
    icon: Globe,
  },
  {
    title: "Zero-Code Token Builder",
    description:
      "Deploy ERC-20 tokens, presales and pools using the no-code interface (wizard + templates).",
    icon: Wrench,
  },
  {
    title: "Ultra-Fast Execution",
    description:
      "Optimized gas paths and routing minimize latency and exposure to common MEV vectors.",
    icon: Zap,
  },
  {
    title: "Modular & Extensible",
    description:
      "Add or remove modules (DEX, Launchpad, Pools, NFT) or integrate via SDK and APIs.",
    icon: Boxes,
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
            ATLAS Protocol — Features
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A modular, production-ready ecosystem: DEX, Launchpad, Launchpool, staking, NFTs, fiat rails and governance —
            everything connected by ATLAS.
          </p>
        </header>

        <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((f, idx) => (
            <div
              key={idx}
              className="animate-feature-entrance"
              style={{ animationDelay: `${idx * 70}ms` }}
            >
              <FeatureCard
                title={f.title}
                description={f.description}
                icon={f.icon}
                // imageSrc omitted intentionally (no images)
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default FeaturesPage;
