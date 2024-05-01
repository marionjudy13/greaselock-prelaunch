import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex flex-wrap w-full h-auto px-8 py-10 sm:py-44 bg-hero-img bg-cover bg-no-repeat bg-blend-multiply bg-blue/25 z-0 flex h-full">
      <div className="wrapper">
        <h1 className="text-6xl font-black mb-4 sm:mb-8 sm:text-center">
          New Website Coming Soon
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-3xl leading-6 lg:leading-snug sm:text-center sm:max-w-[500px] lg:max-w-[750px] sm:mx-auto mb-10 sm:mb-16 lg:mb-20">
          For any Grease Lock<sup>&#174;</sup> inquiries please call{" "}
          <a className="blue-border" href="tel:8008289638">
            800.828.9638
          </a>{" "}
          or email{" "}
          <a className="blue-border" href="mailto: sales@greaselock.com">
            sales@greaselock.com
          </a>
          .
        </h2>
        <div>
          <h3 className="font-black">More Information:</h3>
          <ul className="sm:flex sm:justify-between">
            <li>
              <Link
                href="/pdfs/Grease Lock Care Guide.pdf"
                target="_blank"
                className="blue-border"
              >
                Care Guide
              </Link>
            </li>
            <li>
              <Link
                href="pdfs/Grease Lock Overview & Spec Sheet.pdf"
                target="_blank"
                className="blue-border"
              >
                Overview & Spec Sheet
              </Link>
            </li>
            <li>
              <Link
                href="pdfs/Grease Lock Product Comparison Sheet.pdf"
                target="_blank"
                className="blue-border"
              >
                Product Comparison Sheet
              </Link>
            </li>
            <li>
              <Link
                href="pdfs/Grease Lock Sell Sheet.pdf"
                target="_blank"
                className="blue-border"
              >
                Sell Sheet
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
