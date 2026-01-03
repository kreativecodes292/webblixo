import { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import Astra from "../assets/Astra.png";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      idea:
        formData.get("project") && formData.get("project").trim() !== ""
          ? formData.get("project")
          : "No project idea provided",
    };

    console.log("DATA SENT:", data);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
      e.target.reset();
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message!");
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#00161e] text-[#efefef] py-20 px-6 md:px-20 flex flex-col justify-center items-center"
    >
      <ParticlesBackground />
      <h2 className="mb-20 text-2xl sm:text-4xl font-bold text-[#fae10a]">
        Contact us
      </h2>

      {/* MAIN CONTAINER */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-20 w-full max-w-7xl z-10">
        {/* LEFT: Floating Astra */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            src={Astra}
            alt="Astra"
            className="w-70 sm:w-64 md:w-80 lg:w-200 floating"
          />
        </div>

        {/* RIGHT: FORM */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <div className="w-full max-w-lg bg-[#0f1e28] p-8 rounded-xl shadow-xl border border-[#fae10a]/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left text-[#fae10a]">
              Let's Work Together
            </h2>

            <form onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-[#0f1e28] border border-[#fae10a]/50 focus:outline-none focus:ring-2 focus:ring-[#fae10a] text-[#efefef]"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-[#0f1e28] border border-[#fae10a]/50 focus:outline-none focus:ring-2 focus:ring-[#fae10a] text-[#efefef]"
              />

              <input
                type="text"
                name="service"
                placeholder="Service Needed"
                required
                className="w-full p-3 rounded-lg bg-[#0f1e28] border border-[#fae10a]/50 focus:outline-none focus:ring-2 focus:ring-[#fae10a] text-[#efefef]"
              />

              <input
                type="text"
                name="budget"
                placeholder="Your Budget"
                required
                className="w-full p-3 rounded-lg bg-[#0f1e28] border border-[#fae10a]/50 focus:outline-none focus:ring-2 focus:ring-[#fae10a] text-[#efefef]"
              />

              <textarea
                name="project"
                placeholder="Your Project Idea"
                rows="5"
                className="w-full p-3 rounded-lg bg-[#0f1e28] border border-[#fae10a]/50 focus:outline-none focus:ring-2 focus:ring-[#fae10a] text-[#efefef]"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#fae10a] hover:bg-[#e6cf0a] py-3 rounded-lg text-black text-lg font-semibold transition-colors"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>
        {`
          .floating {
            animation: float 4s ease-in-out infinite;
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </section>
  );
}
