import React from "react";
import { Download } from "lucide-react";

const Whitepaper = () => {
  const downloadPDF = () => {
    window.open("/whitepaper/atlas-whitepaper.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6">Atlas DEX Whitepaper</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Atlas DEX is a next-generation decentralized exchange offering liquidity provision, cross-chain swaps, and rewards. Users earn $Atlas tokens through the XP system.
        </p>

        <div className="flex justify-center mb-10">
          <button
            onClick={downloadPDF}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Whitepaper
          </button>
        </div>

        <div className="space-y-12 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>Atlas DEX is designed to offer a decentralized exchange with a focus on liquidity, cross-chain interoperability, and a reward-driven ecosystem.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Core Features</h2>
            <ul className="list-disc pl-6">
              <li><strong>$Atlas Token:</strong> ERC-20 initially, migrates to ATLASCHAIN native token at 1:1 conversion.</li>
              <li><strong>Liquidity Pools:</strong> Users provide liquidity and earn $Atlas rewards.</li>
              <li><strong>XP System:</strong> Rewards users for platform engagement, convertible to $Atlas tokens.</li>
              <li><strong>Cross-Chain Swaps:</strong> Trade assets across supported chains seamlessly.</li>
              <li><strong>Swap Fees:</strong> Initially 0.3% per transaction, used for development and liquidity rewards.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Tokenomics</h2>
            <ul className="list-disc pl-6">
              <li>40% Community (Testnet & Airdrop)</li>
              <li>20% Team</li>
              <li>20% Marketing</li>
              <li>20% Liquidity & Staking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Roadmap</h2>
            <ul className="list-disc pl-6">
              <li>Dec 2025: Atlas DEX Launch on Base Network.</li>
              <li>2026: XP system and higher liquidity tiers.</li>
              <li>2027: Migration to ATLASCHAIN native token.</li>
              <li>2028+: Cross-chain expansion and governance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Security & Audits</h2>
            <p>Atlas DEX smart contracts undergo thorough audits. The platform is fully decentralized and governance-driven.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Conclusion</h2>
            <p>Atlas DEX redefines decentralized exchanges with XP rewards, cross-chain interoperability, and the native $Atlas token, preparing for a scalable migration to ATLASCHAIN.</p>
          </section>
        </div>

      </div>
    </div>
  );
};

export default Whitepaper;
