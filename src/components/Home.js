import React from "react";

const STATS = [
  { num: "10+",  label: "Projects Delivered"  },
  { num: "2+",   label: "Years Experience"     },
  { num: "24hr", label: "Response Time"        },
  { num: "100%", label: "Client Satisfaction"  },
];

const SERVICES = [
  { label: "Web Applications",  desc: "Scalable full-stack apps built to perform"  },
  { label: "Business Websites", desc: "High-converting pages that drive results"   },
  { label: "E-Commerce Stores", desc: "End-to-end shopping experiences"            },
  { label: "AI & Automation",   desc: "Smart workflows and AI-powered features"    },
];

const Home = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#FAFAF8] pt-[76px]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">

          {/* ── Left ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#FFF4EE] border border-[#FDDFC8] rounded-full mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[12px] font-semibold text-[#E8630A] tracking-wide">
                Available for New Projects
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[44px] sm:text-[54px] lg:text-[62px] xl:text-[70px] leading-[1.08] text-[#111111] mb-5">
              I Build Web Products
              <br />
              That Work for
              <br />
              <span className="text-[#E8630A] italic">Your Business.</span>
            </h1>

            {/* Sub */}
            <p className="text-[17px] sm:text-[18px] leading-[30px] text-[#555555] max-w-xl mb-3">
              Full-stack development for startups and growing businesses.
              Fast turnaround, clean code, and someone who actually cares
              about the outcome — not just the deliverable.
            </p>

            {/* Proof line */}
            <p className="text-[14px] text-[#888888] mb-8 flex items-center gap-2">
              <svg className="h-4 w-4 text-[#E8630A] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              10+ projects delivered across 3 continents. Trusted by founders,
              agencies, and product teams.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => scrollTo("contact")}
                className="px-7 py-3.5 bg-[#E8630A] hover:bg-[#D45508] text-white font-bold text-[15px] rounded-sm transition-colors duration-200 shadow-md shadow-orange-200"
              >
                Start a Project →
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="px-7 py-3.5 border-2 border-[#111111] hover:border-[#E8630A] hover:text-[#E8630A] text-[#111111] font-semibold text-[15px] rounded-sm transition-colors duration-200"
              >
                See My Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#E5E2DB]">
              {STATS.map(({ num, label }) => (
                <div key={label}>
                  <div className="font-serif text-[34px] text-[#E8630A] leading-none">{num}</div>
                  <div className="text-[11px] text-[#888888] mt-2 font-semibold tracking-wider uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right card ── */}
          <div className="hidden lg:block">
            <div className="bg-white border border-[#E5E2DB] rounded-2xl shadow-xl shadow-black/5 p-7">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#F0EEE9]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[13px] font-bold text-[#111111]">Available for Work</span>
                </div>
                <span className="text-[11px] font-semibold text-[#888888]">
                  24hr response
                </span>
              </div>

              <div className="space-y-4 mb-6">
                {SERVICES.map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-sm bg-[#FFF4EE] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="h-3 w-3 text-[#E8630A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#111111]">{label}</div>
                      <div className="text-[12px] text-[#888888] mt-0.5 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollTo("contact")}
                className="w-full py-3 bg-[#E8630A] hover:bg-[#D45508] text-white font-bold text-[14px] rounded-sm transition-colors duration-200"
              >
                Book a Free 30-min Call →
              </button>
              <p className="text-center text-[11px] text-[#AAAAAA] mt-3">
                No commitment · I'll respond within 24 hours
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
