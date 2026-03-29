import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const PROJECT_TYPES = [
  "Web Application",
  "Business Website / Landing Page",
  "E-Commerce Store",
  "AI & Automation",
  "Other / Not Sure Yet",
];

const Contact = () => {
  const [formData, setFormData]   = useState({ userName: "", email: "", projectType: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [success, setSuccess]     = useState(false);
  const [loading, setLoading]     = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);
  const formRef    = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) { setIsVisible(true); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.userName.trim())  errors.userName = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email.";
    }
    if (!formData.message.trim())        errors.message = "Message is required.";
    else if (formData.message.length < 10) errors.message = "Message must be at least 10 characters.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }
    setLoading(true);
    emailjs
      .sendForm("service_f6yokj7", "template_dn8yhwa", formRef.current, "KiAU3CUZWGB6HPIP2")
      .then(() => {
        setSuccess(true);
        setFormData({ userName: "", email: "", projectType: "", message: "" });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const inputClass =
    "block w-full px-4 py-3 mt-1.5 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-sm focus:border-[#E8630A] focus:ring-1 focus:ring-[#E8630A] focus:outline-none transition-colors duration-150 text-[15px]";

  return (
    <section id="contact" className="bg-[#0F172A] py-24 lg:py-32" ref={contactRef}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[11px] font-bold text-[#E8630A] tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>
          <div className="reveal-line-wrapper mb-4">
            <h2 className={`reveal-line font-serif text-[38px] sm:text-[48px] lg:text-[54px] leading-tight text-white ${isVisible ? "visible" : ""}`}>
              Let's Build Something{" "}
              <span className="text-[#E8630A]">Great Together.</span>
            </h2>
          </div>
          <p className="text-[16px] leading-[28px] text-white/60">
            Have a project in mind? Tell me about it — I'll get back to you
            within 24 hours with my thoughts and next steps.
          </p>
        </div>

        {/* Two-column */}
        <div
          className={`grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[15px] font-bold text-white mb-4">Contact Details</h3>
              <div className="space-y-4">
                <a
                  href="mailto:nomanbasit366@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="h-10 w-10 bg-white/10 border border-white/15 rounded-sm flex items-center justify-center shrink-0 group-hover:border-[#E8630A]/50 transition-colors">
                    <svg className="h-4 w-4 text-white/60" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-white/40 uppercase tracking-widest font-medium mb-0.5">Email</div>
                    <div className="text-[13px] text-white/80 group-hover:text-[#E8630A] transition-colors">
                      nomanbasit366@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/noman-basit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="h-10 w-10 bg-white/10 border border-white/15 rounded-sm flex items-center justify-center shrink-0 group-hover:border-[#E8630A]/50 transition-colors">
                    <svg className="h-4 w-4 text-white/60" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-white/40 uppercase tracking-widest font-medium mb-0.5">LinkedIn</div>
                    <div className="text-[13px] text-white/80 group-hover:text-[#E8630A] transition-colors">
                      /in/noman-basit
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Response promise */}
            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-[13px] font-bold text-white mb-1">24hr Response Guarantee</div>
              <p className="text-[13px] text-white/50 leading-[22px]">
                Every inquiry gets a personal response within one business day.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-7">
            {success ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                <div className="h-14 w-14 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg>
                </div>
                <div className="text-white font-bold text-[17px]">Message received!</div>
                <p className="text-[14px] text-white/50">I'll get back to you within 24 hours.</p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-2 text-[13px] text-[#E8630A] hover:underline font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[12px] font-semibold text-white/60 tracking-wide uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="userName"
                      value={formData.userName}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                    {formErrors.userName && (
                      <p className="text-red-400 text-[12px] mt-1">{formErrors.userName}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-[12px] font-semibold text-white/60 tracking-wide uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass}
                    />
                    {formErrors.email && (
                      <p className="text-red-400 text-[12px] mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-[12px] font-semibold text-white/60 tracking-wide uppercase">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled className="bg-[#0F172A]">
                      Select a service...
                    </option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-[#0F172A]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[12px] font-semibold text-white/60 tracking-wide uppercase">
                    Tell Me About Your Project
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What are you building? What's your timeline and budget?"
                    className={`${inputClass} h-[140px] resize-none`}
                  />
                  {formErrors.message && (
                    <p className="text-red-400 text-[12px] mt-1">{formErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shimmer w-full py-3.5 bg-[#E8630A] hover:bg-[#D45508] text-white font-bold text-[15px] rounded-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
