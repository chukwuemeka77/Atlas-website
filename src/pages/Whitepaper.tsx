import React from "react";
import { Download, FileText } from "lucide-react";

const Whitepaper = () => {
  const downloadPDF = () => {
    window.open("/whitepaper/atlas-whitepaper.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6">
          Atlas Protocol Whitepaper
        </h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          The next-generation decentralized liquidity engine powering 
          launchpads, launchpools, multi-token DEX architecture, and 
          fiat on/off-ramping. Explore the full vision below.
        </p>

        {/* Download CTA */}
        <div className="flex justify-center mb-10">
          <button
            onClick={downloadPDF}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Whitepaper
          </button>
        </div>

        {/* Document Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Atlas Protocol is an all-in-one decentralized liquidity ecosystem
              designed to merge multi-chain token issuance, automated liquidity,
              zero-KYC fiat on/off ramping, and creator-driven market tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Core Architecture</h2>
            <p className="text-gray-700">
              • Multi-token AMM + Router  
              • Launchpad + Launchpool smart-contract suite  
              • Non-custodial fiat gateway integration  
              • Modular liquidity providers and oracle feeds  
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Token Utility (ATLAS)</h2>
            <p className="text-gray-700">
              • Revenue share  
              • Governance mechanism  
              • Liquidity mining  
              • Cross-chain settlement asset  
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Protocol Features</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Multi-DEX architecture</li>
              <li>Creator launchpad engine</li>
              <li>Liquidity automation</li>
              <li>Zero-KYC fiat on/off ramp</li>
              <li>Smart order routing</li>
              <li>USD/USDC/Atlas pegged equivalent pools</li>
            </ul>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={downloadPDF}
            className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-xl shadow-lg"
          >
            <FileText className="w-5 h-5" />
            Download PDF Version
          </button>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
