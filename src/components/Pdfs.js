import Link from "next/link";

export const Pdfs = () => {
  return (
    <section className="px-8 py-20 lg:py-28 bg-gray">
      <div className="wrapper">
        <div>
          <h3 className="text-center text-blue font-extrabold text-2xl lg:text-3xl mb-10 lg:mb-14">
            More Information:
          </h3>
          <ul className="-translate-x-1 lg:flex justify-between">
            <li className="mb-5 group">
              <Link
                href="/pdfs/Grease Lock Care Guide.pdf"
                target="_blank"
                className="no-underline"
              >
                <div className="background" />
                <div className="pdf bg-white text-blue text-lg font-bold text-center w-100 px-10 py-6">
                  Care Guide
                  <img
                    src="images/arrow-right-solid.svg"
                    className="arrow duration-300 ease-in-out group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </li>
            <li className="mb-5 group">
              <Link
                href="/pdfs/Grease Lock Overview.pdf"
                target="_blank"
                className="no-underline"
              >
                <div className="background" />
                <div className="pdf bg-white text-blue text-lg font-bold text-center w-100 px-10 py-6">
                  Overview & Spec Sheet
                  <img
                    src="images/arrow-right-solid.svg"
                    className="arrow duration-300 ease-in-out group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </li>
            <li className="mb-5 group">
              <Link
                href="pdfs/Grease Lock Product Comparison Sheet.pdf"
                target="_blank"
                className="no-underline"
              >
                <div className="background" />
                <div className="pdf bg-white text-blue text-lg font-bold text-center w-100 px-10 py-6">
                  Product Comparison Sheet
                  <img
                    src="images/arrow-right-solid.svg"
                    className="arrow duration-300 ease-in-out group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </li>
            <li className="group">
              <Link
                href="pdfs/Grease Lock Sell Sheet.pdf"
                target="_blank"
                className="no-underline"
              >
                <div className="background" />
                <div className="pdf bg-white text-blue text-lg font-bold text-center w-100 px-10 py-6">
                  Sell Sheet
                  <img
                    src="images/arrow-right-solid.svg"
                    className="arrow duration-300 ease-in-out group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
