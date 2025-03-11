import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex flex-wrap w-full h-auto px-8 py-16 sm:py-44 bg-new-hero bg-center bg-cover bg-no-repeat z-0">
      <div className="wrapper md:flex">
        <div className="text-center mb-2">
          <Image
            src="/images/greaselock-logo.png"
            width={200}
            height={500}
            alt="Grease Lock Filter System Logo"
            className="m-auto mb-4 max-w-2xs"
          />
          <h1 className="text-md font-extrabold mb-3">
            Grease Management Reimagined:
            <br />
            <span className="inline text-2xl bg-[url(/images/swipe-lg.png)] bg-contain px-2 mt-8">
              Cleaner, Smarter, Better
            </span>
          </h1>
          <p className="font-light">
            A patented, disposable filter pad and metal frame with a built in
            baffle on back. Grease Lock® features unique fire resistant fiber
            that creates exceptional grease filtration efficiency.
          </p>
        </div>
        <div>
          <Image
            src="/images/labeled-filter.png"
            width={350}
            height={500}
            alt="Labeled Filter System"
            className="m-auto"
          />
        </div>
      </div>
    </section>
  );
};
