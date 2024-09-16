import React from "react";

const Navbar = () => {
  return (
    <header className="container rounded-b-lg bg-violet-200 h-[60px] w-[100%] flex justify-between items-center">
      <h1 className="text-2xl font-bold cursor-pointer">
        <span className="text-violet-700">&lt;</span>TO
        <span className="text-violet-700">DO</span>
        <span className="text-violet-700">/&gt;</span>
      </h1>
      <nav className="flex justify-between items-center gap-10 ">
        <li className="list-none">
          <a
            className="text-violet-700 duration-500 hover:text-violet-400"
            href="#"
          >
            Github
          </a>
        </li>
        <button className="bg-violet-700 py-[6px] px-3 text-white rounded-lg hover:bg-violet-800 duration-500 active:scale-95">
          Contact?
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
