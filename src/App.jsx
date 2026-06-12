import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AchievementsPage from "./pages/AchievementsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/achievements"
          element={<AchievementsPage />}
        />
        <Route
          path="/gallery"
          element={<GalleryPage />}
        />
        <Route
          path="/contact"
          element={<ContactPage />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;