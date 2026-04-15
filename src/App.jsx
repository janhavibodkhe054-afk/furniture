import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Product from "./pages/Product";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Gallery from "./pages/Gallery";
import FloatingContactButtons from "./components/FloatingContactButtons";
import Wardrobe from "./pages/Wardrobe";
import TV from "./pages/TV";
import DreesingUnit from "./pages/DreesingUnit";
import SofaSet from "./pages/SofaSet";
import DinningUnit from "./pages/DinningUnit";
import BedRoom from "./pages/BedRoom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
<ScrollToTop/>
<FloatingContactButtons/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Product />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/tvunit" element={<TV />} />
          <Route path="/dressing" element={<DreesingUnit />} />
          <Route path="/sofaset" element={<SofaSet/>} />
          <Route path="/dinning" element={<DinningUnit />} />
          <Route path="/bedroom" element={<BedRoom />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
