"use client";

import Image from "next/image";
import GrYoutube from "@meronex/icons/gr/GrYoutube";
import React, { useRef } from "react";

export const Header = ({ scrollToRef }) => {
  return (
    <div className="fixed w-full z-50">
      <section className="bg-blue w-full z-100">
        <div className="flex justify-end wrapper text-white text-xs py-1">
          <a
            href="tel:8008289638"
            className="no-underline mr-10 hover:text-gray"

          >
            800.828.9638
          </a>
          <a
            href="mailto:sales@greaselock.com"
            className="hover:text-gray no-underline"

          >
            sales@greaselock.com
          </a>
        </div>
      </section>
      <header className="relative shadow-md shadow-black/25 bg-white layout-padding py-5 z-10">

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
              className="text-sm text-white bg-teal px-4 py-2 transition-all ease-in-out duration-500 border rounded-full border-teal hover:bg-white hover:text-teal font-bold tracking-wide"
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
    </div>
  );
};
