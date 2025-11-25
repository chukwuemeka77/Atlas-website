import { FC } from "react";

export const Whitepaper: FC = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-6">Atlas Protocol Whitepaper</h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Explore our detailed whitepaper to understand the Atlas ecosystem, its features, and technical architecture.
      </p>
      <a
        href="/assets/Atlas_Whitepaper.pdf"
        target="_blank"
        className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
      >
        View Whitepaper
      </a>
    </section>
  );
};
