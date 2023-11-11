import React from 'react'

const About = () => {
  return (
    <div className=" text-white">
      <div className="text-[50px] ml-96 pl-96 mt-96">ABOUT ME</div>
      <div className="text-xl ml-96 mr-96 text-gray-200 ">
        I specialize in crafting robust and dynamic web applications using
        cutting-edge technologies. My toolkit includes:
      </div>
      <div className="flex flex-col ml-96 pl-5 mt-10 text-xl space-y-3 ">
        <div className="px-3 py-2 bg-slate-500 rounded w-fit">Html</div>
        <div className="px-3 py-2 bg-slate-500 rounded w-fit">Css</div>
        <div className="px-3 py-2 bg-slate-500 rounded w-fit">TailwindCss</div>
        <div className="px-3 py-2 bg-slate-500 rounded w-fit">Javascript</div>
        <div className="px-3 py-2 bg-slate-500 rounded w-fit">Reactjs</div>
        <div className="px-3 py-2 bg-slate-500 rounded w-fit">Firebase</div>
        <div className="px-3 py-2 bg-slate-500 rounded w-fit">MySql</div>
      </div>
    </div>
  );
}

export default About