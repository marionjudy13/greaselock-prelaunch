import Image from "next/image";
import GrYoutube from "@meronex/icons/gr/GrYoutube";

export const Header = () => {
  return (
    <header className="relative shadow-md shadow-black/25 layout-padding py-4 z-10">
      <div className="wrapper flex justify-between items center">
        <Image
          src="/images/greaselock-logo.png"
          width={185}
          height={150}
          alt="Picture of the author"
        />
        <div className="flex items-center">
          <a
            href="#contact"
            className="text-sm text-teal no-underline font-bold tracking-wide"
          >
            Contact Us
          </a>
          <a
            href="https://www.youtube.com/@greaselock"
            target="_blank"
            className="flex align-middle items-center ml-8"
          >
            <GrYoutube size="2em" />
          </a>
        </div>
      </div>
    </header>
  );
};
