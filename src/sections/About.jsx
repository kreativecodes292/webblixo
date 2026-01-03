import React from "react";
import { motion } from "framer-motion";
import rohailImg from "../assets/about.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#00161e] text-[#efefef] px-6 md:px-16 py-10 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#32ddf9] opacity-20 blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#0589d3] opacity-25 blur-[140px] animate-pulse"></div>

      {/* Image */}
      <motion.div
        className="z-10 shrink-0 mb-8 md:mb-0 md:mr-14"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-[#32ddf9] shadow-[0_0_80px_#32ddf9]">
          <img
            src={rohailImg}
            alt="Rohail Abbas"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="z-10 max-w-lg text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Heading + Intro */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#32ddf9] mb-2">
          About Us
        </h1>
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#efefef]/80">
          Building Smarter Digital Experiences
        </h2>
        <p className="text-[#efefef]/70 leading-relaxed mb-6">
          Our team develops robust web applications optimized for speed, scalability, and user-centric performance. With a modern tech stack — including MongoDB, Express, React, Node.js, and iFocus — we convert challenging requirements into sleek, efficient digital systems.
        </p>

        {/* Skills Info Cards */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
          <div className="bg-[#111] border border-[#1e1e1e] px-4 py-2 rounded-xl">
            <p className="text-sm text-[#efefef]/70">Experience</p>
            <p className="font-medium text-[#32ddf9]">12+ Years</p>
          </div>
          <div className="bg-[#111] border border-[#1e1e1e] px-4 py-2 rounded-xl">
            <p className="text-sm text-[#efefef]/70">Specialty</p>
            <p className="font-medium text-[#32ddf9]">Tech Stack</p>
          </div>
          <div className="bg-[#111] border border-[#1e1e1e] px-4 py-2 rounded-xl">
            <p className="text-sm text-[#efefef]/70">Focus</p>
            <p className="font-medium text-[#32ddf9]">Efficiency & Scalability</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
          <a
            href="#projects"
            className="px-6 py-2 bg-[#32ddf9] text-black font-medium hover:bg-[#0589d3] rounded-full transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-[#32ddf9] text-[#32ddf9] hover:bg-[#32ddf9] hover:text-black rounded-full transition-all"
          >
            Contact Us
          </a>
        </div>

        {/* About Me Section */}
        <div className="border-t border-[#1e1e1e] pt-6 mt-6 text-center md:text-left">
          <h3 className="text-xl font-semibold text-[#efefef] mb-3">Who We Are</h3>
          <p className="text-[#efefef]/70 leading-relaxed">
            We build modern, scalable, and reliable digital solutions that empower businesses to succeed in a fast-evolving digital world.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
