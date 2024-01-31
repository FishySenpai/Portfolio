import React, { useState, useEffect } from "react";

const Home = () => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleScroll = () => {
    const scrollThreshold =
      document.documentElement.scrollHeight - window.innerHeight;
    const isAtBottom = window.scrollY >= scrollThreshold;

    setIsScrolledToBottom(isAtBottom);
  };

const resetScroll = () => {
  console.log("test")
  if (isScrolledToBottom) {
    // Reset scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' or 'instant' for different scrolling behavior
    });
  }
};


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="home" className="flex items-center justify-center pt-16 text ">
      <div>
        <div className="flex flex-row text-[30px]  ml-5 mt-54 sm:text-[50px] sm:ml-96 sm:pl-72  sm:mt-80">
          Hello, I'm
          <div className="text-pink-600 pl-3">Noman Basit.</div>
        </div>
        <div className="text-[16px]  ml-5 sm:text-[40px] mt-2 sm:ml-96 sm:pl-72 ">
          I'm a full-stack web developer.
        </div>
        <div className="text-xl ml-5 mr-5 sm:ml-96 sm:mr-96 mt-4 text-gray-200 ">
          A passionate and results-driven web developer with a focus on creating
          immersive and user-friendly digital experiences. Whether you're a
          startup looking to establish an online presence or an enterprise
          seeking to enhance your web applications, I'm here to turn your ideas
          into reality.
        </div>
      </div>
      <div
        className="fixed bottom-10 right-20 bg-white rounded-full px-4 py-3 z-50"
        onClick={() => {
          resetScroll();
        }}
      >
        {isScrolledToBottom ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 0 384 512"
          >
            <path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 0 384 512"
          >
            <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
          </svg>
        )}
      </div>{" "}
    </div>
  );
};

export default Home;
