import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex flex-wrap w-full h-auto px-8 py-10 sm:py-44 bg-hero-img bg-cover bg-no-repeat z-0 flex h-full">
      <div className="wrapper">
        <div>
          <Image
            src="/images/greaselock-logo.png"
            width={200}
            height={500}
            alt="Picture of the author"
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
            width={200}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
};
