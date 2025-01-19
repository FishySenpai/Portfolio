import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [scale, setScale] = useState("");
  const [loading, setLoading] = useState(false);
  const contactRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsFormVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (isFormVisible) {
      setScale("scale-[1.05] opacity-100");
      setTimeout(() => {
        setScale("scale-100 opacity-100");
      }, 700);
    } else {
      setScale("scale-50 opacity-0");
    }
  }, [isFormVisible]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when user starts typing
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.userName.trim()) {
      errors.userName = "Username is required.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters long.";
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

  setLoading(true); // Start loading state

  emailjs
    .sendForm(
      "service_f6yokj7",
      "template_dn8yhwa",
      formRef.current,
      "KiAU3CUZWGB6HPIP2"
    )
    .then(
      (result) => {
        console.log(result.text);
        setSuccess(true);
        setFormData({ userName: "", email: "", message: "" });
        setLoading(false); // End loading state
      },
      (error) => {
        console.log(error.text);
        setSuccess(false);
        setLoading(false); // End loading state on error
      }
    );
};

  return (
    <div id="contact" className="relative flex flex-col justify-center pb-44 ">
      <div className="mt-36 mx-auto  pb-5" ref={contactRef}>
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
        className={`mx-auto w-[90%] 1md:w-[800px] transform transition-all duration-[0.7s] ${scale}`}
      >
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="userName" className="text-[16px] text-white">
              Username
            </label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              className="block w-full px-4 py-4 mt-2 border border-neutral-700 text-neutral-100 bg-neutral-800 rounded-md focus:border-neutral-400 focus:ring-neutral-100 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleInputChange}
            />
            {formErrors.userName && (
              <p className="text-red-500 text-sm mt-1">{formErrors.userName}</p>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="text-[16px] text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="block w-full px-4 py-4 mt-2 border border-neutral-700 text-neutral-100 bg-neutral-800 rounded-md focus:border-neutral-400 focus:ring-neutral-100 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="message" className="text-[16px] text-white">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              className="w-full h-[220px] px-4 py-2 mt-2 border border-neutral-700 text-neutral-100 bg-neutral-800 rounded-md focus:border-neutral-400 focus:ring-neutral-100 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleInputChange}
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className={`w-full px-4 py-2 text-[16px] text-white bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-neutral-800 shadow-md shadow-neutral-950 transition-colors ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
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
