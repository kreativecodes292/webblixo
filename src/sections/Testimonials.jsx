import { motion } from "framer-motion";

import m1 from "../assets/m1.png";
import w1 from "../assets/w1.png";
import m2 from "../assets/m2.png";
import w2 from "../assets/w2.png";

const testimonials = [
  {
    name: "Yash Sahu",
    role: "Software Engineer at HCL Technologies",
    review:
      "Absolutely impressed with their work! The team delivered a seamless web application on time and exceeded our expectations. Highly recommended.",
    image: m1,
  },
  {
    name: "Heather Foster",
    role: "UI/UX Designer at PixelWorks",
    review:
      "I loved working with them! The app they developed is fast, intuitive, and exactly what we needed to grow our brand online.",
    image: w1,
  },
  {
    name: "James Harrison",
    role: "Tech Manager at CodeEmpire",
    review:
      "Their professionalism and attention to detail are unmatched. The digital solutions they provided truly transformed our business operations.",
    image: m2,
  },
  {
    name: "Carrie Smith",
    role: "CTO at Innovate Labs",
    review:
      "A team that combines creativity with technical expertise. They made a complex project look effortless and delivered outstanding results",
    image: w2,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative min-h-screen bg-[#00161e] text-[#efefef] flex flex-col items-center justify-between px-6 py-20"
    >
      <motion.h2
        className="text-2xl sm:text-4xl font-bold mb-10 text-[#fae10a]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What People Say
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-full w-full">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name + i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#00161e]/70 backdrop-blur-lg border border-[#fae10a]/30 p-6 rounded-2xl flex flex-col items-center text-center transform transition duration-500
              hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_#fae10a]"
          >
            <img
              src={t.image}
              alt=""
              className="w-16 h-16 rounded-full border-2 border-[#fae10a]/50 mb-4 object-cover"
              loading="lazy"
            />
            <p className="text-[#efefef]/80 italic mb-4">{t.review}</p>
            <h3 className="text-lg font-semibold text-[#fae10a]">{t.name}</h3>
            <p className="text-sm text-[#efefef]/70">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
