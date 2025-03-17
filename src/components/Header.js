"use client";

import Image from "next/image";
import GrYoutube from "@meronex/icons/gr/GrYoutube";
import React, { useRef } from "react";

export const Header = ({ scrollToRef }) => {
  return (
    <header className="relative shadow-md shadow-black/25 layout-padding py-5 z-10">
      <div className="wrapper flex justify-between items center">
        <Image
          src="/images/greaselock-logo.png"
          width={165}
          height={150}
          alt="Grease Lock Logo"
        />
        <div className="flex items-center">
          <button
            onClick={() =>
              scrollToRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="text-sm sm:text-base text-teal transition ease-in-out duration-300 hover:text-blue hover:underline no-underline font-bold tracking-wide"
          >
            Contact Us
          </button>
          <a
            href="https://www.youtube.com/@greaselock"
            target="_blank"
            className="flex align-middle items-center ml-4 sm:ml-8"
          >
            <GrYoutube size="2.5em" />
          </a>
        </div>
      </div>
    </header>
  );
};
