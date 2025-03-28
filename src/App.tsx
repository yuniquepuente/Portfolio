import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import HomePage from "./pages/HomePage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import ArtworkPage from "./pages/ArtworkPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import Footer from "./components/Footer.tsx";
export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#1A1A1A]">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/artwork/:id" element={<ArtworkPage />} />
            <Route path="/about" element={<AboutPage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;