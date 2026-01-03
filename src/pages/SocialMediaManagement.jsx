import { Helmet } from "react-helmet";

export default function SocialMediaManagement() {
  const services = [
    "Account Management",
    "Creative Content",
    "Growth Strategy",
    "Audience Engagement",
    "Social Media Ads",
    "Insights & Reporting",
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#00161E] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0589D3]/20 via-[#32DDF9]/10 to-[#FAE100]/10 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Social Media & Digital Management Services
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#32DDF9] to-[#FAE100]">
              by WEBBLIXO
            </span>
          </h1>

          <p className="text-[#EFEFEF]/80 text-lg md:text-xl max-w-3xl mx-auto">
            We manage and grow your social media presence with strategic content, consistent branding, and audience-focused engagement.
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
            WEBBLIXO is a modern social & digital media management company focused on building strong brand presence through strategic content, creative visuals, and consistent audience engagement. We use data-driven strategies and platform-specific approaches to deliver measurable growth across social channels.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#00161E] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#FAE100]">
            Our Social Media Management Services
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
                  Professional {service.toLowerCase()} designed to grow your brand presence, increase engagement, and connect with your audience.
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
              <li>✔ Strategic Content Planning</li>
              <li>✔ Consistent Brand Presence</li>
              <li>✔ Engaging Content Creation</li>
              <li>✔ Audience Growth & Engagement</li>
              <li>✔ Platform-Specific Expertise</li>
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
                How often will you post on our social media accounts?
              </h3>
              <p className="text-[#EFEFEF]/70 mt-2">
                Posting frequency depends on your selected package and strategy, but we focus on consistent, high-quality posting rather than quantity alon
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Do you offer paid social media advertising?
              </h3>
              <p className="text-[#EFEFEF]/70 mt-2">
                Yes. We create and manage paid social media ad campaigns designed to increase reach, engagement, and conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
