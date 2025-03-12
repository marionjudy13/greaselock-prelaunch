import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-wrap w-full h-auto px-8 pt-14 pb-10 sm:py-44 bg-new-hero bg-center bg-cover bg-no-repeat z-0 border-b-white border-b-2">
      <div className="wrapper md:flex">
        <div className="text-center mb-2">
          <Image
            src="/images/greaselock-logo.png"
            width={175}
            height={500}
            alt="Grease Lock Filter System Logo"
            className="m-auto mb-5 max-w-2xs"
          />
          <h1 className="text-[3.5vw] font-extrabold mb-3">
            Grease Management Reimagined:
            <br />
            <span className="inline text-[6vw] italic bg-[url(/images/swipe-lg.png)] bg-contain px-2 mt-8">
              Cleaner, Smarter, Better
            </span>
          </h1>
          <p className="font-normal">
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
