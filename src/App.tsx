// src/App.tsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";

import Home from "./pages/Home";
import FeaturesPage from "./pages/Features";
import Whitepaper from "./pages/Whitepaper";
import QA from "./pages/QA";
import WhyAtlas from "./pages/WhyAtlas";
import Presale from "./pages/Presale";
import Whitelist from "./pages/Whitelist";
import LaunchApp from "./pages/LaunchApp";

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="min-h-screen bg-white dark:bg-black transition">
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/why-atlas" element={<WhyAtlas />} />
          <Route path="/presale" element={<Presale />} />
          <Route path="/whitelist" element={<Whitelist />} />
          <Route path="/launch" element={<LaunchApp />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
