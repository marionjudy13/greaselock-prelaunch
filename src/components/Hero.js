import Image from "next/image";

export const Hero = () => {
  return (
    <section className="w-full h-auto px-8 py-10 bg-hero-img bg-cover bg-no-repeat bg-blend-multiply bg-blue/25 z-0">
      <h1 className="text-6xl font-black mb-4">New Website Coming Soon</h1>
      <h2 className="text-lg leading-6">
        For any Grease Lock&#8482; inquiries please call{" "}
        <a href="tel:8008289638">800.828.9638</a> or email{" "}
        <a href="mailto: sales@greaselock.com">sales@greaselock.com</a>.
      </h2>
    </section>
  );
};
