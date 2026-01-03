import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu.jsx";
import Logoo from "../assets/logoo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);
    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  // ✅ Scroll behavior (auto-hide disable)
  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible || menuOpen) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setVisible(false); // scroll down → hide
      } else {
        setVisible(true); // scroll up → show
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceVisible, menuOpen]);

  useEffect(() => {
    if (!menuOpen) setVisible(true);
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0  w-full h-20 flex items-center justify-between px-6 py-2 mb-20 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img src={Logoo} alt="logo" className="sm:block w-40 h-40" />
          </div>
        </Link>

        <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
            aria-label="Open Menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-linear-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-60 transition-opacity duration-300"
          >
            Reach Out
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
