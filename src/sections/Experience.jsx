import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const experiences = [
  {
    role: "MERN STACK DEVELOPMENT",
    company: "WEBBLIXO",
    duration: "2014",
    description:
      "We build scalable, secure, and high-performance web apps with MongoDB, Express, React, and Node.js.",
  },
  {
    role: "SOCIAL MEDIA MANAGEMENT",
    company: "WEBBLIXO",
    duration: "2014",
    description:
      "We boost your brand’s presence with strategic social media and digital marketing, driving engagement, leads, and results.",
  },
  {
    role: "SEO OPTIMIZATION",
    company: "WEBBLIXO",
    duration: "2014",
    description:
      "We improve search engine rankings with on-page, off-page, and technical SEO to drive organic traffic and long-term growth.",
  },
  {
    role: "GRAPHIC DESIGNING",
    company: "WEBBLIXO",
    duration: "2014",
    description:
      "We create professional logos, branding, social media creatives, and marketing designs that strengthen brand identity.",
  },
];

function ExperienceItem({ exp, idx, start, end, scrollYProgress, layout }) {
  // First 2 items fully visible
  const initialVisible = idx < 2;

  const opacity = useTransform(
    scrollYProgress,
    initialVisible ? [0, 0] : [start, end],
    initialVisible ? [1, 1] : [0, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    initialVisible ? [0, 0] : [start, end],
    initialVisible ? [1, 1] : [0.6, 1]
  );

  const y = useTransform(
    scrollYProgress,
    initialVisible ? [0, 0] : [start, end],
    initialVisible ? [0, 0] : [idx % 2 === 0 ? 30 : -30, 0]
  );

  const x = useTransform(
    scrollYProgress,
    initialVisible ? [0, 0] : [start, end],
    initialVisible ? [0, 0] : [-10, 0]
  );

  if (layout === "desktop") {
    return (
      <div className="relative flex flex-1 justify-center items-center min-w-0">
        {/* Yellow timeline dot */}
        <motion.div
          className="z-10 w-7 h-7 rounded-full bg-[#fae10a] shadow-[0_0_0_8px_rgba(250,225,10,0.25)]"
          style={{ scale, opacity }}
        />

        {/* Timeline line */}
        <motion.div
          className={`absolute ${idx % 2 === 0 ? "-top-7" : "-bottom-7"} w-[3px] bg-[#fae10a]/50`}
          style={{ height: 35, opacity }}
        />

        {/* Card */}
        <motion.article
          className={`absolute ${idx % 2 === 0 ? "bottom-14" : "top-14"} bg-[#00161e]/80 backdrop-blur border border-[#0589d3]/50 rounded-xl p-6 w-[300px] shadow-xl`}
          style={{ opacity, y }}
          transition={{ duration: 0.45, delay: idx * 0.1 }}
        >
          <h3 className="text-xl font-semibold text-[#fae10a]">{exp.role}</h3>
          <p className="text-md text-[#efefef]/70 mb-3">
            {exp.company} · {exp.duration}
          </p>
          <p className="text-md text-[#efefef]/80">{exp.description}</p>
        </motion.article>
      </div>
    );
  }

  // Mobile layout
  return (
    <div className="flex relative items-start">
      <motion.div
        className="absolute -left-2 top-1 z-10 w-3.5 h-3.5 rounded-full bg-[#fae10a] shadow-[0_0_0_3px_rgba(250,225,10,0.25)]"
        style={{ scale, opacity }}
      />

      <motion.article
        className="bg-[#00161e]/80 backdrop-blur border border-[#0589d3]/50 rounded-lg p-2.5 w-[70vw] ml-4 shadow-md"
        style={{ opacity, x }}
        transition={{ duration: 0.45, delay: idx * 0.1 }}
      >
        <h3 className="text-sm font-semibold text-[#fae10a]">{exp.role}</h3>
        <p className="text-xs text-[#efefef]/70 mb-1">
          {exp.company} · {exp.duration}
        </p>
        <p className="text-xs text-[#efefef]/80 leading-tight">{exp.description}</p>
      </motion.article>
    </div>
  );
}

export default function Experience() {
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sectionHeight = isMobile ? 28 * experiences.length : 105 * experiences.length;

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  // Thresholds for progressive reveal
  const thresholds = useMemo(() => {
    const base = experiences.length;
    return experiences.map((_, i) => {
      return (i + 1) / base - 0.2; // reveal slightly early
    });
  }, []);

  // Adjust line to start from first 2 visible items
  const initialLineProgress = 2 / experiences.length; // 2 items already visible
  const lineSize = useTransform(scrollYProgress, (v) => {
    const progress = initialLineProgress + v * (1 - initialLineProgress);
    return `${Math.min(progress * 100, 100)}%`;
  });

  return (
    <section id="experience" className="relative p-5 bg-[#00161e] text-[#efefef]">
      <div
        ref={sceneRef}
        style={{ height: `${sectionHeight}vh`, minHeight: "90vh" }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-semibold mt-4 text-center">
            Our Services
          </h2>

          <div className="flex flex-1 items-center justify-center px-4">
            {!isMobile && (
              <div className="relative w-full max-w-6xl">
                {/* Horizontal timeline */}
                <div className="relative h-1.5 bg-[#efefef]/15 rounded">
                  <motion.div
                    className="absolute left-0 top-0 h-1.5 bg-[#fae10a] rounded origin-left"
                    style={{ width: lineSize }}
                  />
                </div>

                <div className="relative flex justify-between mt-2">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="desktop"
                    />
                  ))}
                </div>
              </div>
            )}

            {isMobile && (
              <div className="relative w-full max-w-sm ml-1">
                {/* Vertical timeline */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#efefef]/15 rounded">
                  <motion.div
                    className="absolute top-0 left-0 w-0.5 bg-[#fae10a] rounded"
                    style={{ height: lineSize }}
                  />
                </div>

                <div className="relative flex flex-col gap-4 ml-4 mt-3 pb-16">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="mobile"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
