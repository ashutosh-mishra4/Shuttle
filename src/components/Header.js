import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

function Header() {
  const [isHidden, setIsHIdden] = useState(true);
  const handleHidden = () => {
    setIsHIdden(!isHidden);
  };
  return (
    <header className="flex items-center gap-2 text-xl font-montserrat border-2 drop-shadow-md border-black w-screen bg-white font-bold p-2 fixed">
      {isHidden ? (
        <BiMenuAltLeft onClick={handleHidden} className="md:hidden" />
      ) : (
        <nav className={`w-40 h-auto border-2 border-black p-4`}>
          <GrClose
            className="text-white bg-white float-right"
            onClick={handleHidden}
          />
          <ul className="text-black flex flex-col justify-center items-center">
            <li>Home</li>
            <li>Blog</li>
            <li>News</li>
            <li>Reports</li>
          </ul>
        </nav>
      )}
      Shuttle
    </header>
  );
}

export default Header;
