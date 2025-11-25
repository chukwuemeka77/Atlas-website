import { FC } from "react";

const benefits = [
  "Staking rewards in Atlas even when using other ERC20 tokens.",
  "No-code Launchpad for third-party token launches.",
  "Multi-token liquidity pools and AMM with Atlas rewards.",
  "Optional buyer vesting with mandatory team/founder vesting.",
  "NFT Launchpad & Staking support for ERC721A collections."
];

export const WhyAtlas: FC = () => {
  return (
    <section id="why" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">Why Use Atlas Dex?</h2>
      <ul className="max-w-2xl mx-auto space-y-4 text-gray-700 list-disc list-inside">
        {benefits.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </section>
  );
};
