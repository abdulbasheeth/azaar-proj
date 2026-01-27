import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Services';
import Facilities from './components/pages/Facilities';
import Products from './components/pages/Products'; // homepage preview
import Quality from './components/pages/Quality';
import Contact from "./components/pages/Contact"
import ProductGallery from "./components/Ui/ProductGallery" // full gallery page
import Footer from "./components/Layout/Footer"
import WhatsAppFloat from "./components/Ui/WhatsappFloat";


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Homepage with preview Products section */}
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Service />
            <Facilities />
            <Products /> {/* preview section */}
            <Quality />
            <Contact />
          </>
        }/>

        
        <Route path="/Products" element={<ProductGallery />} />
      </Routes>
     <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
