import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.01 } // Trigger when 50% of the section is visible
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.disconnect(); // Ensure the observer is disconnected on cleanup
      }
    };
  }, []);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f6yokj7",
        "template_dn8yhwa",
        form.current,
        "KiAU3CUZWGB6HPIP2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="relative flex flex-col justify-center pb-44 "
      ref={contactRef}
    >
      <div className="mt-36 mx-auto  pb-5">
        <div
          className={`text-[40px] text-neutral-300 transition-transform duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-40 opacity-0"
          }`}
        >
          Contact
        </div>
        <div
          className={`w-32 h-[3px] bg-orange-600 mx-auto mt-1 transition-transform duration-1000 ease-out delay-150 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
          }`}
        ></div>
      </div>
      <div
        className={`w-full mx-auto  lg:max-w-3xl transform transition-all duration-[1.5s]   ${
          isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
        } `}
      >
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mb-2">
            <label for="username" className="text-[16px] text-white">
              Username
            </label>
            <input
              type="text"
              name="name"
              className="block w-full px-4 py-4 mt-2 border border-neutral-700 text-neutral-100 bg-neutral-800 rounded-md focus:border-neutral-400 focus:ring-neutral-100 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label for="email" className="text-[16px] text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="block w-full px-4 py-4 mt-2 border border-neutral-700 text-gray-800 bg-neutral-800 rounded-md focus:border-neutral-400 focus:ring-neutral-100 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label for="text" className="text-[16px] text-white">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              className="w-full  h-[220px] flex flex-wrap items-start px-4 py-2 mt-2 border border-neutral-700 text-gray-800 bg-neutral-800 rounded-md focus:border-neutral-400 focus:ring-neutral-100 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide cursor-pointer text-[16px] text-white transition-colors bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-neutral-800 shadow-md shadow-neutral-950">
              Send
            </button>
            <div className="text-[16px] text-white pt-2">
              {success && "Your message has been sent successfully!"}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
