import { FC } from "react";

export const Home: FC = () => {
  return (
    <section id="home" className="text-center py-20 bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Atlas Protocol</h1>
      <p className="text-xl max-w-xl mx-auto mb-8">
        A next-gen DEX ecosystem with Launchpads, Launchpools, NFT modules, and multi-token liquidity rewards.
      </p>
      <a href="/launch" className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
        Launch App
      </a>
    </section>
  );
};
