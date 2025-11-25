import React from "react";
import FeatureCard from "../components/FeatureCard";
import {
  Rocket,
  Layers,
  DollarSign,
  Lock,
  Zap,
  Star,
  Wallet,
  Coins,
  Blocks,
  ShieldCheck,
  Wrench,
  Globe,
} from "lucide-react";

const featuresData = [
  {
    title: "Multi-Token DEX",
    description:
      "Swap any ERC-20 token pair instantly with Atlas’ high-speed, low-slippage multi-pair router.",
    icon: Rocket,
    imageSrc: "/feature-placeholder.png",
  },
  {
    title: "Launchpad (Code & No-Code)",
    description:
      "Deploy tokens, presales, LP-locks, vesting, KYC-optional modules — all without writing a single line of code.",
    icon: Layers,
    imageSrc: "/feature-placeholder.png",
  },
  {
    title: "Launchpool",
    description:
      "Projects can create staking pools and distribute rewards while investors earn APY in ATLAS.",
    icon: Coins,
    imageSrc: "/feature-placeholder.png",
  },
  {
    title: "LP Farming Rewards",
    description:
      "Liquidity providers earn ATLAS rewards automatically through MultiTokenPair + AtlasLPRewards.",
    icon: DollarSign,
    imageSrc: "/feature-placeholder.png",
  },
  {
    title: "Staking Engine",
    description:
      "Stake any ERC-20 asset to earn native ATLAS tokens. Fully flexible with no-lock staking support.",
    icon: Lock,
    imageSrc: "/feature-placeholder.png",
  },
  {
    title: "NFT Module",
    description:
      "Supports NFT launchpads, claim systems, mint rewards, and collection utilities.",
    icon: Star,
    imageSrc: "/feature-placeholder.png",
  },
  {
    title: "Vault / Treasury Automation",
    description:
      "All protocol fees automatically route to the ATLAS vaultAdmin treasury contract.",
    icon: Wallet,
    imageSrc: "/feature-placeholder.png",
  },
  {
    title: "Governance (DAO Ready)",
    description:
      "ATLAS token holders vote on upgrades, pool parameters, listings, rewards, and treasury usage.",
    icon: ShieldCheck,
    imageSrc: "/feature-placeholder.png",
  },
  {
    title: "On-Ramp / Off-Ramp",
    description:
      "Users can buy ATLAS or presale tokens directly using fiat through our connected liquidity rails.",
    icon: Globe,
    imageSrc: "/feature-placeholder.png",
  },
  {
    title: "Zero-Code Builder",
    description:
      "Token creators instantly deploy ERC-20 tokens, presales, and pools using a guided no-code wizard.",
    icon: Wrench,
    imageSrc: "/feature-placeholder.png",
  },
  {
    title: "Ultra-Fast Execution",
    description:
      "Optimized smart contracts ensure gas-efficient swaps and zero MEV exposure in relayer-assisted routes.",
    icon: Zap,
    imageSrc: "/feature-placeholder.png",
  },
  {
    title: "Modular Ecosystem",
    description:
      "Launchpad, DEX, Staking, NFT, LP-rewards, vesting, and relayer systems — all connected smoothly.",
    icon: Blocks,
    imageSrc: "/feature-placeholder.png",
  },
];

const Features: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
        ATLAS Protocol Features
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
        Discover what makes ATLAS the most powerful decentralized protocol for token creation, swaps, pools, and liquidity.
      </p>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {featuresData.map((feature, idx) => (
          <FeatureCard
            key={idx}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            imageSrc={feature.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
