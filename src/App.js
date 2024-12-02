// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./App.module.css"; // Import the CSS module
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component
import "@fortawesome/fontawesome-free/css/all.min.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GrowthPage from "./pages/GrowthPage";
import WellnessPage from "./pages/WellnessPage";
import ContactPage from "./pages/ContactPage";
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage")); // Create a 404 Page

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/growth-and-development" element={<GrowthPage />} />
            <Route path="/health-and-wellness" element={<WellnessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="*" element={<NotFoundPage />} /> Fallback for undefined routes */}
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
