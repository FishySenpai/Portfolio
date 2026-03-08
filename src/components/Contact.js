import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ userName: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.userName.trim()) errors.userName = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setLoading(true);
    emailjs
      .sendForm("service_f6yokj7", "template_dn8yhwa", formRef.current, "KiAU3CUZWGB6HPIP2")
      .then(() => {
        setSuccess(true);
        setFormData({ userName: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const inputClass =
    "block w-full px-4 py-3 mt-1.5 border border-neutral-700 text-neutral-100 bg-neutral-800/60 rounded-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-colors duration-150";

  return (
    <div id="contact" className="relative flex flex-col pt-16 pb-28" ref={contactRef}>
      {/* Section header */}
      <div className="mx-auto pb-5 text-center">
        <div
          className={`text-[40px] text-neutral-300 transition-transform duration-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"
          }`}
        >
          <span className="font-mono text-orange-500 text-[24px] mr-2 align-middle">03.</span>Contact
        </div>
        <div
          className={`w-32 h-[3px] bg-orange-600 mx-auto mt-1 transition-transform duration-1000 ease-out delay-150 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
          }`}
        />
        <div
          className={`mt-4 text-[16px] sm:text-[17px] leading-[28px] secondary-color max-w-xl mx-auto px-4 transition ease-in-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100 duration-[1s]" : "translate-y-6 opacity-0 duration-[1s]"
          }`}
        >
          Have a project in mind or want to work together? Drop me a message — I'll get back to you within a day.
        </div>
      </div>

      {/* Two-column layout */}
      <div
        className={`mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-10 mt-10 transition ease-in-out delay-300 ${
          isVisible ? "translate-y-0 opacity-100 duration-[1s]" : "translate-y-8 opacity-0 duration-[1s]"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start">

          {/* Left — contact info */}
          <div className="space-y-6">
            <div>
              <div className="font-mono text-[11px] text-orange-500 mb-3 tracking-widest uppercase">
                <span className="mr-1 opacity-50">&gt;</span> Get in touch
              </div>
              <p className="text-[15px] leading-[26px] secondary-color">
                I'm open to full-time roles, freelance work, and interesting collaborations.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:nomanbasit366@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="h-10 w-10 bg-[#2e2e2e] border border-neutral-700/60 flex items-center justify-center shrink-0 group-hover:border-orange-600/40 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" fill="#a3a3a3" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase mb-0.5">Email</div>
                  <div className="text-[13px] text-neutral-300 group-hover:text-orange-400 transition-colors duration-150">
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
                <div className="h-10 w-10 bg-[#2e2e2e] border border-neutral-700/60 flex items-center justify-center shrink-0 group-hover:border-orange-600/40 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4">
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" fill="#a3a3a3" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase mb-0.5">LinkedIn</div>
                  <div className="text-[13px] text-neutral-300 group-hover:text-orange-400 transition-colors duration-150">
                    /in/noman-basit
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/FishySenpai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="h-10 w-10 bg-[#2e2e2e] border border-neutral-700/60 flex items-center justify-center shrink-0 group-hover:border-orange-600/40 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="h-4 w-4">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" fill="#a3a3a3" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase mb-0.5">GitHub</div>
                  <div className="text-[13px] text-neutral-300 group-hover:text-orange-400 transition-colors duration-150">
                    /FishySenpai
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#1e1e1e] border border-neutral-700/60 rounded-sm p-6">
            {success ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                <div className="h-12 w-12 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill="#4ade80" />
                  </svg>
                </div>
                <div className="text-neutral-200 font-semibold">Message sent!</div>
                <p className="text-[14px] secondary-color">Thanks for reaching out — I'll get back to you soon.</p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-2 font-mono text-[12px] text-orange-500 hover:text-orange-400 underline transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="userName" className="text-[13px] font-mono text-neutral-400 tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="Your name"
                  />
                  {formErrors.userName && (
                    <p className="text-red-400 text-[12px] mt-1">{formErrors.userName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-[13px] font-mono text-neutral-400 tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                  {formErrors.email && (
                    <p className="text-red-400 text-[12px] mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-[13px] font-mono text-neutral-400 tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`${inputClass} h-[160px] resize-none`}
                    placeholder="What's on your mind?"
                  />
                  {formErrors.message && (
                    <p className="text-red-400 text-[12px] mt-1">{formErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-orange-600/70 hover:border-orange-600 shadow-md shadow-neutral-950 text-neutral-200 font-semibold text-[15px] rounded-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
