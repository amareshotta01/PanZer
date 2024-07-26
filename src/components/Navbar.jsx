import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white ">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500"> &lt;</span>
          <span>Pan</span>
          <span className="text-green-500">Zer/&gt;</span>
        </div>
        {/* <ul>
                    <li className='flex gap-4 '>
                        <a className='hover:font-bold' href='/'>Home</a>
                        <a className='hover:font-bold' href='#'>About</a>
                        <a className='hover:font-bold' href='#'>Contact</a>
                    </li>
                </ul> */}
        <a terget="_blank" href="https://www.github.com/amareshotta01">
          <button className="text-white bg-green-700 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1">
            <img
              className="invert  w-10 p-1"
              src="/icons/github.svg"
              alt="github logo"
            />
            <span className="font-bold px-2">GitHub</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
