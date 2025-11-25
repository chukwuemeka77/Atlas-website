// src/components/PageWrapper.tsx
import React from "react";
import { motion } from "framer-motion";

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default PageWrapper;
