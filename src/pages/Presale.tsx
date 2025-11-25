import { FC } from "react";
import { WhitelistForm } from "../components/WhitelistForm";

export const Presale: FC = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">Atlas Presale</h2>
      <p className="text-lg text-gray-700 mb-8">
        Presale coming soon! Join our whitelist to be among the first to participate.
      </p>
      <WhitelistForm />
    </section>
  );
};
