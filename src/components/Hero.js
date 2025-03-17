import Image from "next/image";

export const Hero = () => {
  return (
    <section className="block w-full h-auto px-4 pt-14 sm:py-20 lg:py-20 bg-new-hero bg-center bg-cover bg-no-repeat z-0 border-b-white border-b-2">
      <div className="wrapper lg:flex lg:items-center">
        <div className="text-center mb-2 sm:mb-4 lg:w-[60%]">
          <img
            src="/images/greaselock-logo.png"
            alt="Grease Lock Filter System Logo"
            className="m-auto mb-5 max-w-2xs lg:mb-6"
          />
          <h1 className="font-extrabold">
            <span className="block text-[3.75vw] sm:text-2xl lg:mb-1 leading-none">
              Grease Management Reimagined:
            </span>
            <span className="block relative text-[6.5vw] sm:text-[40px] lg:text-5xl italic px-2 sm:px-4 z-10 h1">
              Cleaner, Smarter, Better
              <img
                src="/images/swipe-lg.png"
                className="block relative m-auto -top-9 w-[660px] h-[40px] z-0"
              />
            </span>
          </h1>
          <p className="font-normal text-base text-textGray sm:text-xl sm:max-w-[650px] sm:m-auto lg:max-w-none lg:text-[22px] lg:leading-[1.35] hero-text">
            A patented, disposable filter pad and metal frame with a built in
            baffle on back. Grease Lock<sup>®</sup> features unique fire
            resistant fiber that creates exceptional grease
            filtration&nbsp;efficiency.
          </p>
        </div>
        <div className="lg:w-[40%] lg:pt-4">
          <img
            src="/images/labeled-filter.png"
            alt="Labeled Filter System"
            className="max-w-xs lg:max-w-sm m-auto"
          />
        </div>
      </div>
    </section>
  );
};
