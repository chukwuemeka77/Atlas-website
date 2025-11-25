// src/pages/Whitepaper.tsx
import React from "react";
import SharePdfButton from "../components/SharePdfButton";

const Whitepaper: React.FC = () => {
  const pdfPath = "/atlas_features_whitepaper_styled.pdf";

  return (
    <main className="min-h-screen py-16 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-3">Atlas Protocol — Whitepaper</h1>
          <p className="text-gray-600">
            Read our full whitepaper to learn about tokenomics, architecture, and governance.
          </p>
        </header>

        <section className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-semibold mb-2">Download the Whitepaper (PDF)</h2>
          <p className="text-gray-700 mb-4">Get a printer-friendly PDF version of our features and technical overview.</p>
          <div className="flex gap-3 items-center">
            <a
              href={pdfPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md"
            >
              View / Download PDF
            </a>
            <SharePdfButton pdfPath={pdfPath} label="Share PDF" />
          </div>
        </section>

        <section className="prose max-w-none">
          <h2>Executive Summary</h2>
          <p>
            Atlas Protocol is a modular DEX and launch ecosystem combining a multi-token AMM, no-code launchpad,
            launchpool staking, and treasury-driven tokenomics. This whitepaper summarizes the protocol architecture,
            tokenomics, and roadmap.
          </p>

          <h3>Tokenomics</h3>
          <p>... (you can paste the tokenomics content here) ...</p>

          <h3>Launchpad</h3>
          <p>... (details about launchpad, vesting, mandatory liquidity lock, fees) ...</p>

          <h3>Security & Audits</h3>
          <p>... (audit plans, timelocks, multisig) ...</p>
        </section>
      </div>
    </main>
  );
};

export default Whitepaper;
