import React from 'react'

const Projects = () => {
  return (
    <div>
      <div className="ml-96 pl-22 mt-36 text-2xl">Projects</div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-center mt-12">
          <div className="w-[220px] font-mono font-medium">
            A anime website that uses MAL api to display data in more user
            friendly way, lets users create account or sign in using google and
            store their favourite anime via firebase database.
          </div>
          <div className="rotate-90 w-1 mb-64 ml-10  font-bold blur-[1px]">
            ______________________________________
          </div>
          {/* <div className="bg-gray-400 rounded-full w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            width="20px"
            viewBox="0 0 448 512"
          >
            <path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              fill="white"
            />
          </svg>
        </div> */}
          <div className="ml-10 hover:cursor-pointer hover:scale-125 duration-100 ">
            <a href="https://react-wind.netlify.app/" target="_blank">
              <img className="w-[350px] rounded-lg" src="react-wind.png" />
            </a>
          </div>
        </div>


        <div className="flex flex-row justify-center mt-12">
          <div className="hover:cursor-pointer hover:scale-125 duration-100 ">
            <a href="https://react-wind.netlify.app/" target="_blank">
              <img className="w-[350px] h-[230px] rounded-lg" src="doggo.png" />
            </a>
          </div>
          <div className="rotate-90 w-1 mb-64 ml-10  font-bold blur-[1px] ">
            ______________________________________
          </div>
          <div className="ml-10 w-[220px] font-mono font-medium">
            A anime website that uses MAL api to display data in more user
            friendly way, lets users create account or sign in using google and
            store their favourite anime via firebase database.
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects