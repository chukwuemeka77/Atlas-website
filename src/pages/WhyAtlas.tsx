// src/pages/WhyAtlas.tsx
import React from "react";
import SharePdfButton from "../components/SharePdfButton";

const WhyAtlas: React.FC = () => {
  const pdfPath = "/atlas_features_whitepaper_styled.pdf";

  return (
    <main className="min-h-screen py-16 bg-gradient-to-b from-blue-50 to-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">Why Atlas?</h1>
            <p className="text-gray-600 max-w-xl">
              Built for projects and users: fast swaps, no-code launches, on-chain staking, and a robust treasury model.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <SharePdfButton pdfPath={pdfPath} label="Download Features PDF" />
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">For Builders</h3>
            <p className="text-gray-700">No-code launch tools, SDKs, and APIs to integrate with your dApp quickly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">For Liquidity Providers</h3>
            <p className="text-gray-700">Earn ATLAS rewards across multiple pairs, with flexible staking and instant withdrawals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">For Traders</h3>
            <p className="text-gray-700">Low slippage routing, MEV-aware execution, and deep liquidity.</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WhyAtlas;
