import { Helmet } from "react-helmet";

export default function WebDevelopment() {
  const services = [
    "Business Websites",
    "React & SPA Development",
    "Landing Pages",
    "E-commerce Solutions",
    "SEO Optimized Websites",
    "Website Maintenance & Support",
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#00161E] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0589D3]/20 via-[#32DDF9]/10 to-[#FAE100]/10 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
            Web Development Services
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#32DDF9] to-[#FAE100]">
              by WEBBLIXO
            </span>
          </h1>

          <p className="text-[#EFEFEF]/80 text-lg md:text-xl max-w-3xl mx-auto">
            WEBBLIXO builds lightning-fast, secure, and SEO-optimized websites that elevate your brand and accelerate online growth.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#00161E] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#32DDF9]">
            Professional Web Development Company
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
            Our Web Development Services
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
                  Professional {service.toLowerCase()} designed for speed, security
                  and search engine visibility.
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
              <li>✔ SEO-First Website Architecture</li>
              <li>✔ Ultra Fast Loading Speed</li>
              <li>✔ Mobile & Tablet Optimized</li>
              <li>✔ Modern UI / UX Design</li>
              <li>✔ Reliable Support & Maintenance</li>
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
                How long does it take to build a website?
              </h3>
              <p className="text-[#EFEFEF]/70 mt-2">
                Most websites are completed within 7–14 business days, depending on project scope, features, and content readiness.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Are WEBBLIXO websites SEO optimized?
              </h3>
              <p className="text-[#EFEFEF]/70 mt-2">
                Yes, every website is built with SEO best practices from day one.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Do you provide website maintenance and support?
              </h3>
              <p className="text-[#EFEFEF]/70 mt-2">
                Yes. We offer ongoing support and maintenance plans to keep your website secure, updated, and performing at its best.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Is website hosting included?
              </h3>
              <p className="text-[#EFEFEF]/70 mt-2">
                Hosting is not included by default, but we can recommend reliable hosting providers or manage hosting for you upon request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
