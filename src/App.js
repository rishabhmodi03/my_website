import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// Use BrowserRouter if you implement the GH Pages workaround
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <ThemeProvider>
      <Router> {/* Use HashRouter or BrowserRouter */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
             {/* AnimatePresence helps animate route changes */}
            <AnimatePresence mode="wait">
              <Routes>
                 {/* Wrap Route element prop in motion.div for animations */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                {/* Add more routes as needed */}
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;