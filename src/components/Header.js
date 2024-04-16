import Image from "next/image";

export const Header = () => {
  return (
    <header className="relative shadow-md shadow-black/25 layout-padding py-4 z-10">
      <div className="wrapper">
        <Image
          src="/images/greaselock-tradesmark.png"
          width={150}
          height={150}
          alt="Picture of the author"
        />
      </div>
    </header>
  );
};
