import React from "react";
import { Rocket, Shield, Coins, Globe, Zap } from "lucide-react";

const WhyAtlas = () => {
  const features = [
    {
      icon: Rocket,
      title: "Lightning-fast Deployment",
      desc: "Launchpads, liquidity pools, and tokens deploy instantly."
    },
    {
      icon: Shield,
      title: "Secure Smart Contracts",
      desc: "Audited architecture with multi-layer protocol safeguards."
    },
    {
      icon: Coins,
      title: "Multi-Token DEX Engine",
      desc: "Trade any token with automated liquidity routing."
    },
    {
      icon: Globe,
      title: "Global Fiat Access",
      desc: "Zero-KYC fiat on/off ramp expands accessibility worldwide."
    },
    {
      icon: Zap,
      title: "Creator-Powered Ecosystem",
      desc: "Creators launch, scale, and monetize digital economies."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">Why Atlas?</h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Atlas is a next-generation liquidity protocol engineered for speed,
          security, and global access. It combines a creator-first launchpad,
          multi-token DEX suite, and seamless fiat rails into one ecosystem.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
            >
              <f.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/whitepaper"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700"
          >
            Read the Full Whitepaper
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyAtlas;
