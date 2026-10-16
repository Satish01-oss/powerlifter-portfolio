import { useCallback, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";

import Home from "./pages/Home";
import AchievementsPage from "./pages/AchievementsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/fx/Preloader";
import ScrollProgress from "./components/fx/ScrollProgress";
import BackToTop from "./components/fx/BackToTop";
import { IntroContext, shouldPlayIntro } from "./context/intro";

function App() {
  const location = useLocation();
  const [introDone, setIntroDone] = useState(() => !shouldPlayIntro());
  const finishIntro = useCallback(() => setIntroDone(true), []);

  return (
    // Respect the visitor's "reduce motion" OS setting for all animations
    <MotionConfig reducedMotion="user">
      <IntroContext.Provider value={introDone}>
        <AnimatePresence>
          {!introDone && <Preloader key="preloader" onDone={finishIntro} />}
        </AnimatePresence>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[110] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-red-600 focus:text-white"
        >
          Skip to content
        </a>

        <ScrollProgress />
        <Navbar />

        {/* Old page plays its exit, we jump to the top, then the new page enters */}
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo({ top: 0, behavior: "instant" })}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>

        <Footer />
        <BackToTop />

        {/* Subtle film grain over everything */}
        <div
          aria-hidden="true"
          className="grain pointer-events-none fixed inset-0 z-[55] opacity-[0.05]"
        />
      </IntroContext.Provider>
    </MotionConfig>
  );
}

export default App;
