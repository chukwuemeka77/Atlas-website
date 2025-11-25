// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/whitepaper", label: "Whitepaper" },
  { to: "/qa", label: "Q & A" },
  { to: "/why-atlas", label: "Why Atlas?" },
  { to: "/presale", label: "Presale" },
  { to: "/whitelist", label: "Whitelist" },
  { to: "/launch", label: "Launch App" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-atlasBlue text-white p-4 shadow-lg sticky top-0 z-40"
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Atlas Protocol</h1>

        <div className="flex space-x-6">
          {navItems.map((item) => (
            <motion.div
              key={item.to}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <Link className="hover:text-atlasPink" to={item.to}>
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
