// src/pages/QandA.tsx
import React from "react";

const qna = [
  {
    q: "What is Atlas Protocol?",
    a: "Atlas Protocol is a modular DEX and launch ecosystem including a multi-token AMM, Launchpad, Launchpool, NFT support, and fiat rails."
  },
  {
    q: "How do I participate in presale?",
    a: "Join the whitelist, connect your wallet, and use the Launchpad to purchase tokens with USDT or via our fiat on-ramp during the presale."
  },
  {
    q: "Is KYC required to buy tokens?",
    a: "No — the platform supports KYC-optional flows. On-ramps may have their own KYC rules."
  },
  {
    q: "Which tokens can I stake?",
    a: "Any ERC-20 token supported by the LaunchPool or Atlas LP pairs can be staked to earn ATLAS rewards."
  }
];

const QandA: React.FC = () => {
  return (
    <main className="min-h-screen py-16 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Q & A — Know More About Atlas</h1>

        <div className="space-y-6">
          {qna.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-semibold">{item.q}</h3>
              <p className="text-gray-700 mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default QandA;
