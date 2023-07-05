import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="relative ">
      <div className="bg-slate-900 text-white p-3 font-semibold text-md">
        <div className="flex flex-row space-x-12 justify-center ">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/projects">Projects</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar