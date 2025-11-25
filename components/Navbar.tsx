import { FC } from "react";
import { LucideIcon, Menu } from "lucide-react";
import { Button } from "./Button";

export const Navbar: FC = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-900 to-pink-500 text-white">
      <div className="flex items-center space-x-3">
        <img src="/atlas-logo.png" alt="Atlas Logo" className="h-10 w-10" />
        <span className="font-bold text-xl">Atlas Protocol</span>
      </div>
      <div className="flex space-x-6 items-center">
        <a href="/#home" className="hover:underline">Home</a>
        <a href="/#why" className="hover:underline">Why Atlas Dex?</a>
        <a href="/#faq" className="hover:underline">FAQ</a>
        <a href="/whitepaper" className="hover:underline">Whitepaper</a>
        <a href="/presale" className="hover:underline">Presale</a>
        <Button text="Launch App" onClick={() => window.location.href="/launch"} />
      </div>
    </nav>
  );
};
