"use client";

import { IconMenu, IconX } from "@tabler/icons-react";
import { components, started } from "../constants";
import { Navigation } from "./navigation";
import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex lg:hidden " onClick={handleClick}>
      <button onClick={handleClick}><IconMenu/></button>
      <div className={`${isOpen ? 'fixed top-0 left-0':'-translate-x-[90vw] fixed top-0'} z-30 backdrop-blur-md ease-in-out duration-150 transition-transform bg-neutral-950 border-r border-neutral-700 backdrop-brightness-150 h-[100vh] w-[80vw]`}>
        <div className="z-30 flex flex-col w-full gap-2 pt-4 pl-12 pr-4 ">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-bold">MntUI </h4>
          <button onClick={handleClick}><IconX/></button>
        </div>
          <h4 className="text-sm font-semibold">Getting Started</h4>
          <div className="flex flex-col gap-2 pt-2 pb-4 text-sm">
            <Navigation navLinks={started} />
            <Link
              className="font-medium text-neutral-400"
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
            >
              TailwindCSS
            </Link>
          </div>
          <h4 className="text-sm font-semibold">Components</h4>
          <div className="flex flex-col gap-2 pt-2 pb-4 text-sm">
            <Navigation navLinks={components} />
          </div>
        </div>
      </div>
    </div>
  );
}
