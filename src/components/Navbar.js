import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="relative ">
      <div className=" bg-gradient-to-r from-slate-600 from-10% via-slate-700 via-30% to-slate-900 to-90% text-white p-3 font-semibold text-md ">
        <div className="flex flex-row space-x-12 justify-center ">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/projects">Projects</Link>
          </div>

          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
