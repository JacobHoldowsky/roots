// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./App.module.css"; // Import the CSS module
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component


const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const GrowthPage = lazy(() => import("./pages/GrowthPage"));
const WellnessPage = lazy(() => import("./pages/WellnessPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
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
