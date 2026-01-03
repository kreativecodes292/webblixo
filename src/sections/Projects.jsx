import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.png";


/* ---------- MOBILE DETECTOR ---------- */
const useIsMobile = (query = "(max-width: 630px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

/* ---------- MAIN COMPONENT ---------- */
export default function Project() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "NK Studio",
        link: "https://www.nk.studio/",
        bgColor: "#00161e",
        image: isMobile ? photo1 : img1,
      },
      {
        title: "Gamily",
        link: "https://gamilyapp.com/",
        bgColor: "#00161e",
        image: isMobile ? photo2 : img2,
      },
    ],
    [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  /* ---------- SMOOTH SCROLL SNAP ---------- */
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const total = projects.length;
    const index = Math.min(total - 1, Math.floor(v * total + 0.2));
    setActiveIndex(index);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative text-[#efefef]"
      style={{
        height: `${projects.length * 100}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}
    >
      {/* ---------- GLOW ACCENTS ---------- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] rounded-full bg-[#32ddf9] opacity-20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] rounded-full bg-[#0589d3] opacity-20 blur-[120px] animate-pulse"></div>
      </div>

      {/* ---------- DESKTOP SCROLL PROGRESS BAR ---------- */}
      {!isMobile && (
        <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#efefef]/20 z-50">
          <motion.div
            className="h-full bg-[#32ddf9]"
            style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
          />
        </motion.div>
      )}

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        {/* ---------- HEADING ---------- */}
        <h2
          className={`text-3xl font-semibold text-center z-10 ${
            isMobile ? "mt-4" : "mt-8"
          }`}
        >
          My Work
        </h2>

        {/* ---------- MOBILE SCROLL HINT ---------- */}
        {isMobile && (
          <motion.div
            className="mt-3 flex flex-col items-center text-[#efefef]/70 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-xs">Swipe to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </motion.div>
        )}

        {/* ---------- PROJECT DISPLAY ---------- */}
        <div className="relative w-full flex-1 flex items-center justify-center">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2
              transition-all duration-500
              ${activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-0"}`}
              style={{ width: "85%", maxWidth: "1200px" }}
            >
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.h3
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                    className="text-center sm:text-left text-[clamp(1.8rem,5vw,4rem)] italic font-semibold mb-6"
                  >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              <div className="flex justify-center">
                <div
                  className="w-[88%] sm:w-[78%] h-[62vh] sm:h-[66vh]
                  bg-[#00161e]/50 rounded-xl shadow-[0_0_40px_#32ddf9] overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- VIEW PROJECT BUTTON ---------- */}
        <div className={`absolute ${isMobile ? "bottom-24" : "bottom-10"}`}>
          <a
            href={activeProject.link}
            target="_blank"
            className="px-6 py-3 bg-[#32ddf9] text-black rounded-lg font-semibold hover:bg-[#0589d3] transition"
          >
            View Project
          </a>
        </div>

        {/* ---------- MOBILE PROJECT INDICATOR ---------- */}
        {isMobile && (
          <div className="absolute bottom-6 flex gap-2">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-6 rounded-full transition-all ${
                  i === activeIndex ? "bg-[#32ddf9]" : "bg-[#32ddf9]/30"
                }`}
              />
            ))}
          </div>
        )}

        {/* ---------- DESKTOP PROJECT NUMBER ---------- */}
        {!isMobile && (
          <div className="absolute bottom-10 right-10 text-[#efefef]/70 text-sm tracking-widest">
            {String(activeIndex + 1).padStart(2, "0")} / {projects.length}
          </div>
        )}
      </div>
    </section>
  );
}
