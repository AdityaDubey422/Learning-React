import React from "react";
import Navpart2 from "./Navpart2";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between bg-zinc-800 text-white py-4 px-10 items-center">
        <h2 className="text-3xl">React</h2>
        <Navpart2 />
      </nav>
    </>
  );
};

export default Navbar;
