import { Helmet } from "react-helmet";

export default function GraphicDesigning() {
  const services = [
    "Brand Identity Design",
    "Logo Design",
    "Social Media Graphics",
    "Marketing & Advertising Creatives",
    "Print Design Solutions",
    "Design Support & Revisions",
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#00161E] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0589D3]/20 via-[#32DDF9]/10 to-[#FAE100]/10 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Graphic Designing Services
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#32DDF9] to-[#FAE100]">
              by WEBBLIXO
            </span>
          </h1>

          <p className="text-[#EFEFEF]/80 text-lg md:text-xl max-w-3xl mx-auto">
            WEBBLIXO is a creative graphic design company delivering visually compelling, brand-focused designs that help businesses stand out. We combine creativity, strategy, and modern design trends to produce impactful visuals that communicate your message clearly across digital and print platforms.          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#00161E] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#32DDF9]">
            Professional Graphic Design Company
          </h2>

          <p className="text-[#EFEFEF]/80 leading-8 max-w-4xl">
            WEBBLIXO is a modern web development company specializing in high-performance,
            visually stunning and SEO-friendly websites. We use cutting-edge technologies
            like React, Tailwind CSS and optimized architectures to deliver scalable digital solutions.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#00161E] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#FAE100]">
            Our Graphic Designing Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service}
                className="bg-linear-to-br from-[#0589D3]/20 to-[#00161E]
                border border-[#32DDF9]/30 rounded-2xl p-8
                hover:border-[#FAE100] hover:scale-[1.02]
                transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service}
                </h3>
                <p className="text-[#EFEFEF]/70">
                  Professional {service.toLowerCase()}  focused on creativity, brand consistency, and visual impact.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#00161E] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#32DDF9]">
              Why Choose WEBBLIXO?
            </h2>

            <ul className="space-y-4 text-[#EFEFEF]/80">
              <li>✔ Brand-focused creative designs</li>
              <li>✔ Modern, clean & professional visuals</li>
              <li>✔ Social media & marketing-ready graphics
              </li>
              <li>✔ Consistent brand identity across platforms
              </li>
              <li>✔ Fast turnaround & reliable support</li>
            </ul>
          </div>

          <div className="bg-linear-to-br from-[#0589D3]/30 to-[#00161E]
          rounded-3xl p-10 border border-[#32DDF9]/30">
            <h3 className="text-2xl font-semibold mb-4 text-[#FAE100]">
              Result-Driven Development
            </h3>
            <p className="text-[#EFEFEF]/80">
              Every project we deliver is focused on performance, conversions and
              long-term business growth.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#00161E] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#FAE100]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8 max-w-4xl">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Do you create custom designs?
              </h3>
              <p className="text-[#EFEFEF]/70 mt-2">
                Yes. All our designs are 100% custom and aligned with your brand identity and business goals.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Can you design for social media and ads?
              </h3>
              <p className="text-[#EFEFEF]/70 mt-2">
                Absolutely. We design high-converting visuals optimized for social media platforms and paid advertising.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Do you provide revisions?
              </h3>
              <p className="text-[#EFEFEF]/70 mt-2">
                Yes. We offer revisions to ensure the final design meets your expectations.              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
