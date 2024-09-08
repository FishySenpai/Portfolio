import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser"
import {useNavigate} from "react-router-dom"
const Contact = () => {
  const [userName , setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  
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
          setSuccess(true)
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
      className="pt-16 relative flex flex-col justify-center min-h-screen "
    >
      <div className="w-full p-6 m-auto mt-36 bg-[#444444] rounded-md shadow-md lg:max-w-2xl">
        <h1 className="text-3xl cursor-pointer text-white underline">
          Contact
        </h1>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mb-2">
            <label for="username" className="text-[16px] text-white">
              Username
            </label>
            <input
              type="text"
              name="name"
              className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
              className="w-full  h-[180px] flex flex-wrap items-start px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide cursor-pointer text-[16px] text-white transition-colors duration-200 transform bg-[#2F2F2F] rounded-md hover:bg-[#444444] focus:outline-none focus:bg-gray-900">
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
}

export default Contact