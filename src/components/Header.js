import Image from "next/image";
import GrYoutube from "@meronex/icons/gr/GrYoutube";

export const Header = () => {
  return (
    <header className="relative shadow-md shadow-black/25 layout-padding pt-5 pb-3 sm:py-5 z-10">
      <div className="wrapper flex justify-between items center">
        <Image
          src="/images/greaselock-logo.png"
          width={165}
          height={150}
          alt="Grease Lock Logo"
        />
        <div className="flex items-center">
          <a
            href="#contact"
            className="text-sm sm:text-base text-teal no-underline font-bold tracking-wide"
          >
            Contact Us
          </a>
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
