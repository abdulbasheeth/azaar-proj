import React from "react";

import ScrollToTop from "./components/Ui/ScrollToTop"
import { Routes, Route } from "react-router-dom";

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
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Service />
              <Facilities />
              <Contact />
            </>
          }
        />

        {/* Product page */}
        <Route path="/product" element={<Product />} />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
