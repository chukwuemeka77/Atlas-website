import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 text-gray-900 dark:text-gray-100">
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500">
                Atlas Protocol — Multi-token DEX & Launch Ecosystem
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                Launch tokens, provide liquidity, stake to earn ATLAS rewards, and use no-code tools to create projects — all connected with cross-chain rails.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/features" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow">
                  Explore Features
                </Link>
                <Link to="/launch" className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 px-5 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  Launch App
                </Link>
              </div>

              <div className="mt-8 flex gap-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <div className="text-sm text-gray-500">Total Supply</div>
                  <div className="font-semibold text-xl">10,000,000,000 ATLAS</div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <div className="text-sm text-gray-500">Launch Date</div>
                  <div className="font-semibold text-xl">1 Dec 2025</div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/whitepaper" className="text-blue-600 dark:text-pink-400">Whitepaper</Link></li>
                <li><Link to="/features" className="text-blue-600 dark:text-pink-400">Features</Link></li>
                <li><Link to="/presale" className="text-blue-600 dark:text-pink-400">Presale (Coming Soon)</Link></li>
                <li><Link to="/whitelist" className="text-blue-600 dark:text-pink-400">Join Whitelist</Link></li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20">
          <h2 className="text-2xl font-bold mb-6">Highlights</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
              <div className="text-sm text-gray-500">No-Code Launches</div>
              <div className="font-semibold mt-2">Deploy in minutes</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
              <div className="text-sm text-gray-500">Earn ATLAS</div>
              <div className="font-semibold mt-2">Stake & provide liquidity</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
              <div className="text-sm text-gray-500">Cross-Chain</div>
              <div className="font-semibold mt-2">Bridges & swaps</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
              <div className="text-sm text-gray-500">XP System</div>
              <div className="font-semibold mt-2">Earn rewards for activity</div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default Home;
