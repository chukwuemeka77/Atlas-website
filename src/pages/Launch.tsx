import { FC } from "react";

export const Launch: FC = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">Launch Atlas App</h2>
      <p className="text-lg text-gray-700 mb-8">
        Connect your wallet to access the full Atlas ecosystem: DEX, Launchpad, Launchpool, and NFT modules.
      </p>
      <button
        onClick={() => alert("Wallet connection coming soon!")}
        className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
      >
        Connect Wallet
      </button>
    </section>
  );
};
