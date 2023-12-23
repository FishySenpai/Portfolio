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
      className="relative flex flex-col justify-center min-h-screen "
    >
      <div className="w-full p-6 m-auto mt-36 bg-gray-500 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-mono cursor-pointer text-white underline">
          Contact
        </h1>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mb-2">
            <label for="username" className="font-mono text-[16px] text-white">
              Username
            </label>
            <input
              type="text"
              name="name"
              className="block w-full px-4 py-2 mt-2 font-mono text-gray-900 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label for="email" className="font-mono text-[16px] text-white">
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
            <label for="text" className="font-mono text-[16px] text-white">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              className="w-[530px]  h-[180px] flex flex-wrap items-start px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide font-mono cursor-pointer text-[16px] text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900">
              Send
            </button>
            <div className="font-mono text-[16px] text-white pt-2">
              {success && "Your message has been sent successfully!"}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact