import React from "react";

export default function LaunchApp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      <div className="text-center max-w-xl px-6">
        <h1 className="text-4xl font-bold mb-4">ATLAS dApp Coming Soon</h1>
        <p className="text-gray-300 mb-6">
          The ATLAS decentralized exchange & launchpad interface is currently under active development.
          Stay tuned for the official dApp launch.
        </p>

        <button className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-pink-500 transition">
          Join Whitelist
        </button>
      </div>
    </div>
  );
}
