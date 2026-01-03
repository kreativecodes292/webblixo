import React, { useEffect, useRef } from "react";
import {
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiNodedotjs,
  SiMongodb,
  SiReact,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MySkills() {
  const scrollRef = useRef(null);
  const speed = 2; // Scrolling speed

  useEffect(() => {
    const container = scrollRef.current;
    let x = 0;
    let animationFrame;

    const animate = () => {
      x -= speed;
      container.style.transform = `translateX(${x}px)`;

      if (Math.abs(x) >= container.scrollWidth / 2) {
        x = 0; // Reset for infinite scroll
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const icons = [
    { icon: <SiTypescript size={50} />, name: "TypeScript" },
    { icon: <SiTailwindcss size={50} />, name: "Tailwind CSS" },
    { icon: <SiFastapi size={50} />, name: "FastAPI" },
    { icon: <SiNodedotjs size={50} />, name: "Node.js" },
    { icon: <SiMongodb size={50} />, name: "MongoDB" },
    { icon: <FaJava size={50} />, name: "Java" },
    { icon: <SiReact size={50} />, name: "React" }
  ];

  const loopIcons = [...icons, ...icons]; // Duplicate for infinite scroll

  return (
    <section
      id="skills"
      className="relative w-full py-16 bg-[#00161e] text-[#efefef] overflow-hidden"
    >
      {/* Glowing Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full bg-[#32ddf9] opacity-20 blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full bg-[#0589d3] opacity-20 blur-[150px] animate-pulse"></div>
      </div>

      {/* Title */}
      <div className="text-center mb-10 relative z-10">
        <motion.h2
          className="text-3xl sm:text-3.2xl font-bold text-transparent bg-clip-text z-10"
          style={{
            backgroundImage: "linear-gradient(90deg, #32ddf9, #0589d3)"
          }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our Technology Stack
        </motion.h2>
        <p className="sm:text-lg text-sm mt-2 text-[#efefef]/70">
          Building fast, scalable, and future-ready digital solutions
        </p>
      </div>

      {/* Scrolling Icons */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex sm:gap-20 gap-10 items-center whitespace-nowrap min-w-full will-change-transform relative z-10"
        >
          {loopIcons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-[#32ddf9] hover:scale-110 transition-transform duration-300"
            >
              {item.icon}
              <span className="text-sm mt-3 text-[#efefef]/70">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
