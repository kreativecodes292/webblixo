import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./sections/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Main from "./pages/Main.jsx";
import WebDevelopment from "./pages/WebDevelopment.jsx";
import GraphicDesigning from "./pages/GraphicDesigning.jsx";
import SocialMediaManagement from "./pages/SocialMediaManagement.jsx";
import SEOOptimization from "./pages/SEOOptimization.jsx";


export default function App() {
  return (
    <Router>
      <div className="relative gradient text-white min-h-screen">
        <CustomCursor />
        <WhatsAppButton
          phone="447521440329"
          message="Hello! I saw your website and would like to connect with WEBBLIXO."
        />
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/graphic-design" element={<GraphicDesigning />} />
          <Route path="/socialmedia-management" element={<SocialMediaManagement />} />
          <Route path="/seo-optimization" element={<SEOOptimization />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
