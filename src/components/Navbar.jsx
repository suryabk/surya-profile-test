import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const nav = ["About", "Academy", "Portfolio", "Contact"];
  return (
    <div className="navbar bg-slate-200 fixed z-20">
      <div className="flex-1">
        <a className="text-xl" href="#home">
          <img src="./assets/logo.svg" alt="" className="top" />
        </a>
      </div>
      <div className="hidden md:block">
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            {nav.map((item) => (
              <li>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-poppins font-semibold text-black">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="block md:hidden">
        {menu ? (
          <FiX className="w-8 text-3xl" onClick={() => setMenu(false)} />
        ) : (
          <FiMenu className="w-8 text-3xl" onClick={() => setMenu(true)} />
        )}
      </div>
      <div
        className={`${
          menu ? "absolute" : "hidden"
        } overflow-auto w-full left-0 top-16 bg-emerald-500 z-10 mx-0 px-4 py-2`}>
        <div className="w-full">
          <ul className="flex flex-col">
            {nav.map((navName) => (
              <li
                className="text-white w-full font-poppins text-lg px-4 py-2 font-semibold text-center"
                onClick={() => setMenu(false)}>
                <a href={`#${navName.toLowerCase()}`}>{navName}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
