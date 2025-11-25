import React from "react";
import { HelpCircle } from "lucide-react";

const QA = () => {
  const faqs = [
    {
      q: "Is KYC required?",
      a: "No. Atlas provides zero-KYC fiat on/off ramping depending on your local region."
    },
    {
      q: "Is the presale non-custodial?",
      a: "Yes, all user funds are fully non-custodial via smart contracts."
    },
    {
      q: "What is the ATLAS token used for?",
      a: "Governance, revenue sharing, liquidity mining, and cross-chain settlement."
    },
    {
      q: "Which networks are supported?",
      a: "EVM chains such as Ethereum, Base, BSC, Polygon, Avalanche, and more."
    },
    {
      q: "When can creators launch tokens?",
      a: "Immediately after public launch of the Atlas Launchpad suite."
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">Q&A</h1>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 border rounded-2xl shadow-sm">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">{f.q}</h3>
                  <p className="text-gray-700 mt-2">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default QA;
