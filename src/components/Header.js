import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { GrClose } from 'react-icons/gr'

function Header() {
  return (
    <header className="flex items-center gap-2 text-xl font-montserrat font-bold p-2 ">
      {/* <nav>
            <BiMenuAltLeft />
        </nav> */}
      <div className="w-40 h-auto border-2 border-black p-4">
          <GrClose className="text-white bg-white float-right"/>
          <ul className="text-black flex flex-col justify-center items-center">
              <li>Home</li>
              <li>Blog</li>
              <li>News</li>
              <li>Reports</li>
          </ul>
      </div>
    </header>
  );
}

export default Header;
