import React from "react";

const About = () => {
  return (
    <div id="about" className=" text-white">
      <div className="pt-16 text-[50px] ml-96 pl-96 mt-96">ABOUT ME</div>

      <div className="flex flex-col mt-10">
        <div className="text-xl text-gray-300  ml-96 mr-96">
          <p>
            As a dedicated <strong>Full Stack Developer</strong>, I specialize
            in creating robust and user-friendly websites and web applications
            by seamlessly integrating both frontend and backend technologies. My
            expertise extends from crafting engaging user interfaces to
            architecting and optimizing scalable server-side solutions. The
            <strong> Projects</strong> section showcases some of my notable
            achievements, providing a glimpse into the comprehensive skill set I
            bring to every project.
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
            related to <strong>Full Stack Development</strong> and Programming.
          </p>
          <br />
          <p>
            Actively seeking new opportunities, I am enthusiastic about roles
            that allow me to contribute holistically, continuously learn, and
            foster personal and professional growth. If you have an exciting
            opportunity that aligns with my skills and experiences, don't
            hesitate to <strong>contact</strong> me. Let's collaborate and
            create something extraordinary together!
          </p>
        </div>
        <div className="flex flex-col ml-96 mt-4 text-xl space-y-12 ">
          <div className="text-2xl font-bold">Skills</div>
          <div className="flex flex-row space-x-5">
            <div className="px-3 py-2 bg-slate-500 rounded w-fit">HTML</div>
            <div className="px-3 py-2 bg-slate-500 rounded w-fit">CSS</div>
            <div className="px-3 py-2 bg-slate-500 rounded w-fit">
              TailwindCss
            </div>

            <div className="px-3 py-2 bg-slate-500 rounded w-fit">
              Bootstrap
            </div>
          </div>

          <div className="flex flex-row space-x-5">
            <div className="px-3 py-2 bg-slate-500 rounded w-fit">
              JavaScript
            </div>
            <div className="px-3 py-2 bg-slate-500 rounded w-fit">Reactjs</div>
            <div className="px-3 py-2 bg-slate-500 rounded w-fit">Firebase</div>
          </div>
          <div className="flex flex-row space-x-5">
            <div className="px-3 py-2 bg-slate-500 rounded w-fit">MySql</div>
            <div className="px-3 py-2 bg-slate-500 rounded w-fit">
              Postgresql
            </div>
            <div className="px-3 py-2 bg-slate-500 rounded w-fit">Git</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
