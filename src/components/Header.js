import Image from "next/image";
import GrYoutube from "@meronex/icons/gr/GrYoutube";

export const Header = () => {
  return (
    <header className="relative shadow-md shadow-black/25 layout-padding py-4 z-10">
      <div className="wrapper flex justify-between">
        <Image
          src="/images/greaselock-tradesmark.png"
          width={150}
          height={150}
          alt="Picture of the author"
        />
        <a
          href="https://www.youtube.com/@greaselock"
          target="_blank"
          className="flex align-middle items-center"
        >
          <GrYoutube size="2em" />
        </a>
      </div>
    </header>
  );
};
