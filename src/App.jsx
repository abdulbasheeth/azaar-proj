import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./components/Ui/ScrollToTop";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import WhatsAppFloat from "./components/Ui/WhatsappFloat";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Service from "./components/pages/Services";
import Facilities from "./components/pages/Facilities";
import Product from "./components/pages/Product";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Home page with all sections stacked */}
        <Route
          path="/"
          element={
            <div className="w-full overflow-hidden">
              <section id="Home" className="min-h-screen">
                <Home />
              </section>

              <section id="About" className="min-h-screen">
                <About />
              </section>

              <section id="Services" className="min-h-screen">
                <Service />
              </section>

              <section id="Facilities" className="min-h-screen">
                <Facilities />
              </section>

              <section id="Contact" className="min-h-screen">
                <Contact />
              </section>
            </div>
          }
        />

        {/* Product page */}
        <Route path="/products" element={<Product />} />

        {/* Redirect unknown paths to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
