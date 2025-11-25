import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Whitepaper from "./pages/Whitepaper";
import QandA from "./pages/QandA";
import WhyAtlas from "./pages/WhyAtlas";
import LaunchApp from "./pages/LaunchApp";
import Presale from "./pages/Presale";
import FeaturesPage from "./pages/Features";


const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-atlasBlue text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Atlas Protocol</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-atlasPink">Home</Link>
          <Link to="/whitepaper" className="hover:text-atlasPink">Whitepaper</Link>
          <Link to="/qanda" className="hover:text-atlasPink">Q & A</Link>
          <Link to="/why-atlas" className="hover:text-atlasPink">Why Atlas</Link>
          <Link to="/launch" className="hover:text-atlasPink">Launch App</Link>
          <Link to="/presale" className="hover:text-atlasPink">Presale</Link>
        </nav>
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/qanda" element={<QandA />} />
          <Route path="/why-atlas" element={<WhyAtlas />} />
          <Route path="/launch" element={<LaunchApp />} />
          <Route path="/presale" element={<Presale />} />

        <Route path="/features" element={<FeaturesPage />} />
   


        </Routes>
      </main>

      <footer className="bg-gray-100 text-gray-700 p-4 text-center">
        &copy; {new Date().getFullYear()} Atlas Protocol. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
