import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gmail from "./Assets/gmail.png";
import bg from "./Assets/bg.jpg";
const Home = () => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isTallScreen, setIsTallScreen] = useState(window.innerHeight > 800);

  const handleResize = () => {
    setIsTallScreen(window.innerHeight > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    // Set a timeout to delay setting the animation to false
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 8000); // 1000ms = 1 second

    return () => clearTimeout(timeout);
  }, []);

  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      console.log(`Scrolling to section: ${sectionId}`);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    } else {
      console.log(`Section not found: ${sectionId}`);
    }
  };
  const handleScroll = () => {
    const scrollThreshold =
      document.documentElement.scrollHeight - window.innerHeight;
    const isAtBottom = window.scrollY >= scrollThreshold;

    setIsScrolledToBottom(isAtBottom);
  };

  const resetScroll = () => {
    console.log("test");
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
    <div
      id="home"
      className="flex items-center justify-center pt-16 text text-neutral-200 mb-36"
    >
      {/* <img src={bg} alt="" className="-z-10 absolute " /> */}
      <div className="w-full flex flex-col">
        <div
          className={`sm:mx-auto flex flex-col justify-center items-center ${
            isTallScreen ? "mt-72" : "mt-52"
          }   sm:mt-80 `}
        >
          <div className=" ">
            <p className="flex flex-row text-[30px] 4sm:text-[40px] 1sm:text-[45px] text-left max-w-[335px] w-[335px] 4sm:max-w-[435px] 4sm:w-[435px] 2sm:max-w-[440px] 2sm:w-[440px] 1sm:max-w-[495px] 1sm:w-[495px] header-typing header-1">
              Hello, I'm
              <div className=" text-orange-600 pl-3">Noman Basit.</div>
            </p>
            <p className="text-[22px] 4sm:text-[30px]  1sm:text-[35px] mt-2 ml-2 sm:ml-0 text-left  max-w-fit sm:max-w-[425px] 1sm:max-w-[495px] w-[600px] header-typing header-2">
              I'm a full-stack web developer.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col text-[17px] leading-[28px] 1sm:text-lg mt-4 secondary-color">
            <div className="hidden 3lg:block mx-auto">
              <div className="mx-auto min-w-[1080px] max-w-[1080px]">
                <p className={`${animate ? "" : "header-typing header-3 "}`}>
                  A passionate and results-driven web developer with a focus on
                  creating{" "}
                  <b
                    className="text-white"
                    onClick={() => scrollToSection("contact")}
                  >
                    responsive
                  </b>{" "}
                  and user-friendly digital experiences. Whether
                </p>
              </div>
              <div className="mx-auto min-w-[1070px] max-w-[1070px]">
                <p className={` ${animate ? "" : "header-typing header-4"}`}>
                  you are a startup looking to establish an online presence or
                  an enterprise seeking to enhance your web applications, I'm
                  here to
                </p>
              </div>
              <div className="mx-auto min-w-[230px] max-w-[230px]">
                <p className={` ${animate ? "" : "header-typing header-5"}`}>
                  turn your ideas into reality.
                </p>
              </div>
            </div>
            <div className="hidden 1sm:block 3lg:hidden">
              <div className="mx-auto min-w-[690px] max-w-[690px]">
                <p className={` ${animate ? "" : "header-typing header-6"}`}>
                  A passionate and results-driven web developer with a focus on
                  creating{" "}
                  <b
                    className="text-white"
                    onClick={() => scrollToSection("contact")}
                  >
                    responsive
                  </b>{" "}
                </p>
              </div>
              <div className="mx-auto min-w-[690px] max-w-[690px]">
                <p className={` ${animate ? "" : "header-typing header-7"}`}>
                  and user-friendly digital experiences. Whether you're a
                  startup looking to establish
                </p>
              </div>
              <div className="mx-auto min-w-[660px] max-w-[660px]">
                <p className={` ${animate ? "" : "header-typing header-8"}`}>
                  an online presence or an enterprise seeking to enhance your
                  web applications.
                </p>
              </div>
              <div className="mx-auto min-w-[320px] max-w-[320px]">
                <p className={` ${animate ? "" : "header-typing header-9"}`}>
                  I'm here to turn your ideas into reality.
                </p>
              </div>
            </div>
            <div className="hidden sm:block 1sm:hidden">
              <div className="mx-auto min-w-[500px] max-w-[500px]">
                <p
                  className={` ${
                    animate ? "" : "w-[500px] header-typing header-10"
                  }`}
                >
                  A passionate and results-driven web developer with a focus on{" "}
                </p>
              </div>
              <div className="mx-auto min-w-[580px] max-w-[580px]">
                <p
                  className={` ${
                    animate ? "" : "w-[580px] header-typing header-11"
                  }`}
                >
                  creating{" "}
                  <b
                    className="text-white"
                    onClick={() => scrollToSection("contact")}
                  >
                    responsive
                  </b>{" "}
                  and user-friendly digital experiences. Whether you're
                </p>
              </div>
              <div className="mx-auto min-w-[520px] max-w-[520px]">
                <p
                  className={` ${
                    animate ? "" : "w-[520px] header-typing header-12"
                  }`}
                >
                  a startup looking to establish an online presence or an
                  enterprise
                </p>
              </div>
              <div className="mx-auto min-w-[310px] max-w-[310px]">
                <p
                  className={` ${
                    animate ? "blinking" : "w-[310px] header-typing header-13"
                  }`}
                >
                  I'm here to turn your ideas into reality.
                </p>
              </div>
            </div>
            <div className="hidden 4sm:block sm:hidden">
              <div className="mx-auto min-w-[370px] max-w-[370px]">
                <p
                  className={` ${
                    animate ? "" : "w-[370px] header-typing header-14"
                  }`}
                >
                  A passionate and results-driven web developer
                </p>
              </div>
              <div className="mx-auto min-w-[470px] max-w-[470px]">
                <p
                  className={` ${
                    animate ? "" : "w-[470px] header-typing header-15"
                  }`}
                >
                  with a focus on creating{" "}
                  <b
                    className="text-white"
                    onClick={() => scrollToSection("contact")}
                  >
                    responsive
                  </b>{" "}
                  and user-friendly digital
                </p>
              </div>
              <div className="mx-auto min-w-[458px] max-w-[458px]">
                <p
                  className={` ${
                    animate ? "" : "w-[458px] header-typing header-16"
                  }`}
                >
                  experiences. Whether you're a startup looking to establish
                </p>
              </div>
              <div className="mx-auto min-w-[420px] max-w-[420px]">
                <p
                  className={` ${
                    animate ? "" : "w-[420px] header-typing header-17"
                  }`}
                >
                  an online presence or an enterprise I'm here to turn
                </p>
              </div>
              <div className="mx-auto min-w-[180px] max-w-[180px]">
                <p
                  className={` ${
                    animate ? "blinking" : "w-[180px] header-typing header-18"
                  }`}
                >
                  your ideas into reality.
                </p>
              </div>
            </div>
            <div className="block 4sm:hidden">
              <div className="mx-auto min-w-[320px] max-w-[320px]">
                <p
                  className={` ${
                    animate ? "" : "w-[320px] header-typing header-19"
                  }`}
                >
                  A passionate and results-driven website
                </p>
              </div>
              <div className="mx-auto min-w-[290px] max-w-[290px]">
                <p
                  className={` ${
                    animate ? "" : "w-[290px] header-typing header-20"
                  }`}
                >
                  developer with a focus on creating{" "}
                </p>
              </div>
              <div className="mx-auto min-w-[330px] max-w-[330px]">
                <p
                  className={` ${
                    animate ? "" : "w-[330px] header-typing header-21"
                  }`}
                >
                  <b
                    className="text-white"
                    onClick={() => scrollToSection("contact")}
                  >
                    responsive
                  </b>{" "}
                  and user-friendly experiences.
                </p>
              </div>
              <div className="mx-auto min-w-[270px] max-w-[270px]">
                <p
                  className={` ${
                    animate ? "" : "w-[270px] header-typing header-22"
                  }`}
                >
                  Whether you are a startup looking
                </p>
              </div>
              <div className="mx-auto min-w-[290px] max-w-[290px]">
                <p
                  className={` ${
                    animate ? "" : "w-[290px] header-typing header-23"
                  }`}
                >
                  to establish an online presence or an
                </p>
              </div>
              <div className="mx-auto min-w-[320px] max-w-[320px]">
                <p
                  className={` ${
                    animate ? "blinking" : "w-[320px] header-typing header-24"
                  }`}
                >
                  enterprise I will make your ideas reality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 pb-4 text-[22px] space-x-4 flex flex-row justify-center  ">
          <button
            onClick={() => scrollToSection("projects")}
            className="p-3 relative px-10 flex flex-row bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-neutral-800 shadow-md shadow-neutral-950 text-neutral-200 font-semibold rounded-sm  group hover-effect"
          >
            <p className="text-xl">View Projects</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-[20px] w-[20px] mt-1.5 ml-2 -rotate-90 transition-transform duration-300 transform group-hover:rotate-0"
            >
              <path
                d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                fill="rgb(229 229 229)"
              />
            </svg>
          </button>
        </div>

        <div className="relative cursor-pointer z-50 hidden xl:block">
          <a
            href="https://github.com/FishySenpai"
            target="_blank"
            className="fixed top-[394px] bg-[#4E545A] h-14 w-14 pl-2 pt-2 hover:w-[80px] hover:pl-7 transition-all duration-300 ease-in-out "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="h-9 w-9 "
            >
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/noman-basit/"
            target="_blank"
            className="fixed top-[450px] bg-[#0077BA] h-14 w-14 pl-3 pt-3 hover:w-[80px] hover:pl-7 transition-all duration-300 ease-in-out "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512 "
              className="h-8 w-8 "
            >
              <path
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                fill="white"
              />
            </svg>
          </a>
          <Link to="/" onClick={() => scrollToSection("contact")}>
            <div className="fixed top-[506px] bg-[#fff] h-14 w-14 pl-2 pt-2 hover:w-[80px] hover:pl-7 transition-all duration-300 ease-in-out ">
              <img src={gmail} alt="email" className="h-10 w-10 " />
            </div>
          </Link>
        </div>
      </div>
      <div
        className="fixed bottom-10 right-20 bg-white rounded-full px-4 py-3 z-50 hidden"
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
