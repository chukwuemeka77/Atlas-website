// src/components/Preloader.tsx
import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed inset-0 bg-black flex items-center justify-center text-white text-2xl font-bold z-50"
    >
      Atlas Protocol…
    </motion.div>
  );
}
