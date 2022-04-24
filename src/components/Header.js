import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { Outlet, Link } from "react-router-dom";

function Header() {
  const [isHidden, setIsHIdden] = useState(true);
  const handleHidden = () => {
    setIsHIdden(!isHidden);
  };
  return (
    <header className="font-press-start flex items-center gap-2 text-xl border-b-2 drop-shadow-md  w-screen bg-white font-bold p-2 fixed">
      {isHidden ? (
        <BiMenuAltLeft onClick={handleHidden} className="md:hidden scale-150" />
      ) : (
        <nav className={`w-screen h-screen p-4`}>
          <GrClose
            className="text-white bg-white float-right"
            onClick={handleHidden}
          />
          <ul className="text-black flex flex-col gap-8 text-2xl justify-center items-center">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:underline">
              <Link to="/news">News</Link>
            </li>
            <li className="hover:underline">
              <Link to="/reports">Reports</Link>
            </li>
          </ul>
        </nav>
      )}
      {/* Display the site title "Shuttle" only when navbar is closed */}
      {isHidden ? (
        <nav className="flex justify-between md:gap-72 lg:gap-96">
          <p>Shuttle</p>
          <ul className="hidden md:flex md:gap-10 lg:gap-20 xl:gap-28">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:underline">
              <Link to="/news">News</Link>
            </li>
            <li className="hover:underline">
              <Link to="/reports">Reports</Link>
            </li>
          </ul>
        </nav>
      ) : null}
      <Outlet />
    </header>
  );
}

export default Header;
