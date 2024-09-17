import React from "react";

const About = () => {
  return (
    <div id="about" className=" text-neutral-200 flex flex-col">
      <div className=" text-[40px] mx-auto mt-64">ABOUT ME</div>

      <div className="flex flex-row mt-10">
        <div className="text-lg secondary-color w-[600px] ml-96 ">
          <p>
            As a dedicated{" "}
            <strong className="text-neutral-200">Full Stack Developer</strong>, I
            specialize in creating robust and user-friendly websites and web
            applications by seamlessly integrating both frontend and backend
            technologies. My expertise extends from crafting engaging user
            interfaces to architecting and optimizing scalable server-side
            solutions. The
            <strong className="text-neutral-200"> Projects</strong> section showcases
            some of my notable achievements, providing a glimpse into the
            comprehensive skill set I bring to every project.
          </p>
          <br />
          <p>
            Beyond the code, I am committed to fostering knowledge-sharing
            within the dynamic developer community. Connect with me on
            <a href="#" className="underline text-purple-300">
              {" "}
              LinkedIn
            </a>
            , where I consistently share content spanning a wide array of topics
            related to{" "}
            <strong className="text-neutral-200">Full Stack Development</strong> and
            Programming.
          </p>
          <br />
          <p>
            Actively seeking new opportunities, I am enthusiastic about roles
            that allow me to contribute holistically, continuously learn, and
            foster personal and professional growth. If you have an exciting
            opportunity that aligns with my skills and experiences, don't
            hesitate to <strong className="text-neutral-200">contact</strong> me.
            Let's collaborate and create something extraordinary together!
          </p>
        </div>
        <div className="flex flex-col ml-40 text-lg space-y-12 text-neutral-200 text ">
          <div className="text-2xl font-bold">Skills</div>
          <div className="flex flex-row space-x-5">
            <div className="px-4 py-3 bg-[#444444] rounded shadow-md shadow-[#212121] w-fit ">
              HTML
            </div>
            <div className="px-4 py-3 bg-[#444444] rounded shadow-md shadow-[#212121] w-fit ">
              CSS
            </div>
            <div className="px-4 py-3 bg-[#444444] rounded shadow-md shadow-[#212121] w-fit ">
              TailwindCss
            </div>

            <div className="px-4 py-3 bg-[#444444] rounded shadow-md shadow-[#212121] w-fit ">
              Bootstrap
            </div>
          </div>

          <div className="flex flex-row space-x-5">
            <div className="px-4 py-3 bg-[#444444] rounded shadow-md shadow-[#212121] w-fit ">
              JavaScript
            </div>
            <div className="px-4 py-3 bg-[#444444] rounded shadow-md shadow-[#212121] w-fit ">
              Reactjs
            </div>
            <div className="px-4 py-3 bg-[#444444] rounded shadow-md shadow-[#212121] w-fit ">
              Firebase
            </div>
            <div className="px-4 py-3 bg-[#444444] rounded shadow-md shadow-[#212121] w-fit ">
              Nodejs
            </div>
          </div>
          <div className="flex flex-row space-x-5">
            <div className="px-4 py-3 bg-[#444444] rounded shadow-md shadow-[#212121] w-fit ">
              MySql
            </div>
            <div className="px-4 py-3 bg-[#444444] rounded shadow-md shadow-[#212121] w-fit ">
              Postgresql
            </div>
            <div className="px-4 py-3 bg-[#444444] rounded shadow-md shadow-[#212121] w-fit ">
              Git
            </div>
            <div className="px-4 py-3 bg-[#444444] rounded shadow-md shadow-[#212121] w-fit ">
              GitHub
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
