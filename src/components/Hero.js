import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex flex-wrap w-full h-auto px-8 py-10 sm:py-44 bg-new-hero bg-cover bg-no-repeat z-0">
      <div className="wrapper md:flex">
        <div className="text-center">
          <Image
            src="/images/greaselock-logo.png"
            width={200}
            height={500}
            alt="Grease Lock Filter System Logo"
            className="m-auto"
          />
          <h1>Grease Management Reimagined: Cleaner, Smarter, Better</h1>
          <p>
            A patented, disposable filter pad and metal frame with a built in
            baffle on back. Grease Lock® features unique fire resistant fiber
            that creates exceptional grease filtration efficiency.
          </p>
        </div>
        <div>
          <Image
            src="/images/labeled-filter.png"
            width={300}
            height={500}
            alt="Labeled Filter System"
            className="m-auto"
          />
        </div>
      </div>
    </section>
  );
};
