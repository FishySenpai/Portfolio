import React, { useState } from 'react'

const Contact = () => {
  const [userName , setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleClick=()=>{

  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen ">
      <div className="w-full p-6 m-auto mt-36 bg-gray-500 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-mono cursor-pointer text-white underline">
          Contact
        </h1>
        <div className="mb-2">
          <label for="username" className="font-mono text-[16px] text-white">
            Username
          </label>
          <input
            type="text"
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
          <input
            type="text"
            className="w-[530px]  h-[200px] flex flex-wrap items-start px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide font-mono cursor-pointer text-[16px] text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact