import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ProjectList from "./components/sections/ProjectList";
import ContactSection from "./components/sections/ContactSection";
import UIKit from "./pages/UIKit";
import './index.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'uikit'>('portfolio');

  const toggleDark = () => {
    setDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900
        dark:text-white transition-colors">

        {/* Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0
            bg-blue-800 text-white p-2 z-50"
        >
          Ana içeriğe atla
        </a>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDark}
          className="fixed bottom-6 right-6 z-50 bg-gray-200 dark:bg-gray-700
            text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg
            hover:scale-110 transition-transform text-lg"
          aria-label="Tema değiştir"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* UIKit Toggle (sağ üst köşe) */}
        <div className="fixed top-4 right-16 z-50">
          <button
            onClick={() =>
              setCurrentPage(p => p === 'portfolio' ? 'uikit' : 'portfolio')
            }
            className="bg-purple-600 hover:bg-purple-700 text-white text-xs
              px-3 py-1.5 rounded-full shadow-lg transition-colors font-medium"
          >
            {currentPage === 'portfolio' ? '🎨 UI Kit' : '← Portföy'}
          </button>
        </div>

        {currentPage === 'uikit' ? (
          <UIKit />
        ) : (
          <>
            <Header />
            <main id="main-content">
              <Hero />
              <About />
              <Skills />
              <ProjectList />
              <ContactSection />
            </main>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}