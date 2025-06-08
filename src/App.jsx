import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { LenisContext } from './context/LenisContext.jsx';
import HomePage from './pages/HomePage.jsx';
import StockTrackerPage from './pages/StockTrackerPage.jsx';
import WebTrackExtensionPage from './pages/WebTrackExtensionPage.jsx';
import './App.css';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    scrollRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
  }, [])

  return (
    <LenisContext.Provider value={{ scrollTo: (target) => scrollRef.current?.scrollTo(target) }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects">
            <Route index element={<Navigate to="/" />} />
            <Route path="stock-tracker" element={<StockTrackerPage />} />
            <Route path="webtrack-extension" element={<WebTrackExtensionPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LenisContext.Provider>
  )
}

export default App