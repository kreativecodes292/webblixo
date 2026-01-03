import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function OverlayMenu({ isOpen, onClose }) {
  const [showExp, setShowExp] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const origin = isMobile ? "95% 8%" : "50% 8%";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ background: "rgba(0,0,0,0.95)" }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          <ul className="space-y-6 text-center">
            {/* NORMAL LINKS */}
            {["Home", "About", "Skills"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="text-2xl text-white font-semibold hover:text-pink-400 transition"
                >
                  {item}
                </a>
              </motion.li>
            ))}

            {/* EXPERIENCE DROPDOWN */}
            <motion.li
              className="relative"
              onMouseEnter={() => setShowExp(true)}
              onMouseLeave={() => setShowExp(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-2xl text-white font-semibold cursor-pointer hover:text-pink-400 transition">
                Services
              </span>

              <AnimatePresence>
                {showExp && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="
                      absolute left-1/2 -translate-x-1/2 mt-4
                      bg-black border border-gray-700
                      rounded-lg px-6 py-4 space-y-3
                      min-w-[280px] shadow-xl
                    "
                  >
                    <li>
                      <Link to="/web-development">
                        <a
                          href="#frontend"
                          onClick={onClose}
                          className="text-white hover:text-pink-400 whitespace-nowrap transition"
                        >
                          WEB DEVELOPMENT
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/graphic-design">
                        <a
                          href="#react"
                          onClick={onClose}
                          className="text-white hover:text-pink-400 whitespace-nowrap transition"
                        >
                          GRAPHIC DESIGNING
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/socialmedia-management">
                        <a
                          href="#freelance"
                          onClick={onClose}
                          className="text-white hover:text-pink-400 whitespace-nowrap transition"
                        >
                          SOCIAL & DIGITAL MEDIA MANAGEMENT
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/seo-optimization">
                        <a
                          href="#freelance"
                          onClick={onClose}
                          className="text-white hover:text-pink-400 whitespace-nowrap transition"
                        >
                          SEO OPTIMIZATION
                        </a>
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>

            {/* LAST LINKS */}
            {["Testimonial", "Contact"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="text-2xl text-white font-semibold hover:text-pink-400 transition"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
