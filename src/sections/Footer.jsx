import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socialIcons = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/britops-taxi-services/" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/share/1AU6hDXScq/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/webblixo.tech.solutions?igsh=MWJpM2Ywc2JycWJidQ==" },
  ];

  return (
    <footer className="bg-[#00161e] text-[#efefef] py-16 px-6 sm:px-16 relative overflow-hidden">
      {/* Background glowing blue lights */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#32ddf9]/10 blur-3xl animate-pulse -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#0589d3]/15 blur-3xl animate-pulse translate-x-20 translate-y-20"></div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Branding */}
        <div className="space-y-4">
          <h3 className="text-[#32ddf9] font-bold text-xl sm:text-2xl">WEBBLIXO</h3>
          <p className="text-sm sm:text-base opacity-70 leading-relaxed text-[#efefef]/70">
            Delivering reliable, high-performance digital experiences with modern technologies, strategic innovation, and elegant design.
          </p>
          <p>info@webblixo.com</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-[#32ddf9] font-bold text-lg sm:text-xl">Quick Links</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            {["home", "about", "projects", "contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="hover:text-[#32ddf9] transition-colors duration-300 hover:scale-105 inline-block"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social / Contact */}
        <div className="space-y-4">
          <h3 className="text-[#32ddf9] font-bold text-lg sm:text-xl">Connect Us</h3>
          <div className="flex gap-5 text-xl sm:text-2xl">
            {socialIcons.map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#32ddf9" }}
                whileTap={{ scale: 0.9 }}
                className="p-1.5 rounded-full border border-[#32ddf9] 
                  bg-[#32ddf9]/10 text-[#efefef] shadow-[0_0_12px_#32ddf980] 
                  hover:shadow-[0_0_18px_#32ddf9ff,0_0_25px_#0589d3ff] 
                  hover:scale-110 transition-all duration-300"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="border-t border-[#32ddf9]/30 my-10 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />

      {/* Copyright */}
      <motion.div
        className="text-center text-xs sm:text-sm opacity-60 relative z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        &copy; {new Date().getFullYear()} WEBBLIXO. All rights reserved.
      </motion.div>
    </footer>
  );
}
