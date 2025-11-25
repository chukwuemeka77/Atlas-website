import { FC } from "react";

const faqs = [
  { q: "What is Atlas Protocol?", a: "Atlas Protocol is a next-gen DEX ecosystem with Launchpads, Launchpools, NFT modules, and multi-token liquidity rewards." },
  { q: "How do I participate in presale?", a: "Presale will be available through our Launchpad. Sign up and follow instructions to secure your tokens." },
  { q: "Which tokens can I stake?", a: "Any ERC20 token is supported in our MultiToken staking pools, earning rewards in Atlas." },
  { q: "How do I use the Launchpad?", a: "No coding experience is needed. Connect your wallet and participate through our guided UI." }
];

export const FAQ: FC = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-10">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto text-left space-y-6">
        {faqs.map(({ q, a }, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-lg mb-1">{q}</h3>
            <p className="text-gray-700">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
