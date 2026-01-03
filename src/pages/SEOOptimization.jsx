import { Helmet } from "react-helmet";

export default function SEOOptimization() {
  const services = [
    "SEO Audit & Strategy",
    " On-Page Optimization",
    "Technical SEO Improvements",
    "Content & Keywords",
    "Backlink Strategy",
    "Performance Tracking",
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#00161E] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0589D3]/20 via-[#32DDF9]/10 to-[#FAE100]/10 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Search Engine Optimization Services
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#32DDF9] to-[#FAE100]">
              by WEBBLIXO
            </span>
          </h1>

          <p className="text-[#EFEFEF]/80 text-lg md:text-xl max-w-3xl mx-auto">
            We help your business rank higher on search engines through data-driven SEO strategies and continuous optimization.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#00161E] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#32DDF9]">
            Professional SEO Company
          </h2>

          <p className="text-[#EFEFEF]/80 leading-8 max-w-4xl">
            WEBBLIXO is a results-driven SEO company focused on improving search visibility, increasing organic traffic, and driving sustainable business growth. We use proven SEO strategies, technical optimization, and data-driven insights to deliver measurable results.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#00161E] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#FAE100]">
            Our SEO Services
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
                  Professional {service.toLowerCase()} designed to improve rankings, increase organic traffic, and enhance online visibility.
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
              <li>✔ Results-Driven SEO Strategy</li>
              <li>✔ SEO-First Approach</li>
              <li>✔ Transparent Reporting </li>
              <li>✔ Ethical (White-Hat) Practices</li>
              <li>✔ Industry-Focused Keyword Research</li>
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
                Is SEO a one-time service or ongoing?
              </h3>
              <p className="text-[#EFEFEF]/70 mt-2">
               SEO is an ongoing process. Continuous optimization is essential to maintain rankings and adapt to search engine updates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Is SEO a one-time service or ongoing?
              </h3>
              <p className="text-[#EFEFEF]/70 mt-2">
                SEO is an ongoing process. Continuous optimization is essential to maintain rankings and adapt to search engine updates.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                What SEO services do you offer?
              </h3>
              <p className="text-[#EFEFEF]/70 mt-2">
               We provide on-page SEO, technical SEO, keyword research, content optimization, link building, and performance reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
