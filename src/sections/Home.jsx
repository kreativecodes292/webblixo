import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Home() {
  const roles = useMemo(
    () => [
      "WEB DEVELOPMENT",
      "GRAPHIC DESIGNING",
      "SEO OPTIMIZATION",
      "SOCIAL & DIGITAL MEDIA MANAGEMENT",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  /* ---------- TYPING EFFECT ---------- */
  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  /* ---------- CURSOR BLINK ---------- */
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center px-6 sm:px-16 relative bg-[#00161e] overflow-hidden pt-20 sm:pt-35 pb-10"
    >
      <ParticlesBackground />

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#32ddf9] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#0589d3] opacity-25 blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">

        {/* TYPING TEXT */}
        <motion.p
          className="text-[#efefef] text-sm sm:text-base md:text-lg tracking-widest"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {roles[index].substring(0, subIndex)}
          <span
            className={`inline-block w-0.5 ml-1 bg-[#fae10a] ${
              blink ? "opacity-100" : "opacity-0"
            }`}
          />
        </motion.p>

        {/* MAIN HEADING */}
        <motion.h1
          className="text-[#efefef] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Empowering ideas.
          <br />
          <span className="text-[#fae10a]">
            Redefining the future of technology
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          className="text-[#efefef]/80 mt-3 max-w-2xl text-sm sm:text-base md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          We push technology forward, building intelligent, high-performance
          solutions defined by speed, scalability, and modern engineering.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="flex flex-wrap gap-4 mt-5 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a
            href="#about"
            className="bg-[#32ddf9] px-6 sm:px-8 py-3 sm:py-4 text-black rounded-xl text-sm sm:text-base font-semibold 
            hover:bg-[#0589d3] transition shadow-lg shadow-[#32ddf9]/40"
          >
            Why Us?
          </a>

          <a
            href="#contact"
            className="border border-[#32ddf9] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-[#32ddf9] rounded-xl font-semibold 
            hover:bg-[#32ddf9] hover:text-black transition"
          >
            Let’s Connect
          </a>
        </motion.div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 mt-6 text-2xl sm:text-3xl">
          {[
            {
              link: "https://www.linkedin.com/company/britops-taxi-services/",
              icon: <FaLinkedin />,
            },
            {
              link: "https://www.facebook.com/share/1AU6hDXScq/",
              icon: <FaFacebookF />,
            },
            {
              link: "https://www.instagram.com/webblixo.tech.solutions?igsh=MWJpM2Ywc2JycWJidQ==",
              icon: <FaInstagram />,
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-full 
              border border-[#32ddf9] 
              bg-gradient-to-br from-[#32ddf9]/20 to-[#0589d3]/20
              text-[#efefef] shadow-[0_0_12px_#32ddf980] 
              hover:shadow-[0_0_18px_#32ddf9ff,0_0_25px_#0589d3ff]
              hover:scale-110 transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* STATS */}
        <motion.div
          className="w-full max-w-4xl bg-[#00161e]/50 backdrop-blur-xl rounded-2xl 
          border border-[#0589d3]/40 mt-12 p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[#efefef]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {[
            ["1.5K", "Projects Completed"],
            ["450+", "Happy Clients"],
            ["100%", "Customer Satisfaction"],
            ["12", "Years Experience"],
          ].map(([num, text], i) => (
            <div key={i} className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{num}</h2>
              <p className="text-xs sm:text-sm md:text-base opacity-70">{text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
