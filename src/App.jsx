import React from "react";
import Nav from "./pages/Nav";
import Hero from "./pages/Hero";
import Students from "./pages/Students";
import Products from "./pages/Products";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="min-h-dvh bg-[#161616]">
      <Nav />
      <Hero />
      <Students />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
