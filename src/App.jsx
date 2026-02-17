// App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";

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

// Layout
const MainLayout = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <Outlet /> {/* children routes render here */}
    <Footer />
    <WhatsAppFloat />
  </>
);

// Define routes
const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <div className="w-full overflow-hidden">
            <section id="Home" className="min-h-screen"><Home /></section>
            <section id="About" className="min-h-screen"><About /></section>
            <section id="Services" className="min-h-screen"><Service /></section>
            <section id="Facilities" className="min-h-screen"><Facilities /></section>
            <section id="Contact" className="min-h-screen"><Contact /></section>
          </div>
        ),
      },
      { path: "products", element: <Product /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];

// Create router
const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

// Default export
export default function App() {
  return <RouterProvider router={router} />;
}
