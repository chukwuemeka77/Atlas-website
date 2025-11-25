import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Whitepaper from "./pages/Whitepaper";
import QA from "./pages/QA";
import WhyAtlas from "./pages/WhyAtlas";
import LaunchApp from "./pages/LaunchApp";
import Presale from "./pages/Presale";
import FeaturesPage from "./pages/Features";

import Preloader from "./components/Preloader";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <div className="min-h-screen flex flex-col bg-white dark:bg-black transition">
            {/* Navbar */}
            <header className="bg-atlasBlue text-white p-4 flex justify-between items-center">
              <h1 className="text-xl font-bold">Atlas Protocol</h1>

              <nav className="space-x-4">
                <Link to="/" className="hover:text-atlasPink">Home</Link>
                <Link to="/features" className="hover:text-atlasPink">Features</Link>
                <Link to="/whitepaper" className="hover:text-atlasPink">Whitepaper</Link>
                <Link to="/qa" className="hover:text-atlasPink">Q & A</Link>
                <Link to="/why-atlas" className="hover:text-atlasPink">Why Atlas</Link>
                <Link to="/presale" className="hover:text-atlasPink">Presale</Link>
                <Link to="/launch" className="hover:text-atlasPink">Launch App</Link>
              </nav>
            </header>

            {/* Routes */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/whitepaper" element={<Whitepaper />} />
                <Route path="/qa" element={<QA />} />
                <Route path="/why-atlas" element={<WhyAtlas />} />
                <Route path="/launch" element={<LaunchApp />} />
                <Route path="/presale" element={<Presale />} />
                <Route path="/features" element={<FeaturesPage />} />
              </Routes>
            </main>

            {/* Footer */}
            <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-400 p-4 text-center">
              &copy; {new Date().getFullYear()} Atlas Protocol. All rights reserved.
            </footer>
          </div>
        </Router>
      )}
    </>
  );
};

export default App;
