import Image from "next/image";

export const Hero = () => {
  return (
    <section className="w-full h-auto px-8 py-10 sm:py-44 bg-hero-img bg-cover bg-no-repeat bg-blend-multiply bg-blue/25 z-0 flex h-full">
      <div className="wrapper">
        <h1 className="text-6xl font-black mb-4 sm:mb-8 sm:text-center">
          New Website Coming Soon
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-3xl leading-6 lg:leading-snug sm:text-center sm:max-w-[500px] lg:max-w-[750px] sm:m-auto">
          For any Grease Lock<sup>&#174;</sup> inquiries please call{" "}
          <a href="tel:8008289638">800.828.9638</a> or email{" "}
          <a href="mailto: sales@greaselock.com">sales@greaselock.com</a>.
        </h2>
      </div>
    </section>
  );
};
