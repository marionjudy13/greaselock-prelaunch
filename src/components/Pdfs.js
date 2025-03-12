import Link from "next/link";

export const Pdfs = () => {
  return (
    <section className="px-8 py-20 bg-gray">
      <div className="wrapper">
        <div>
          <h3 className="text-center text-blue font-extrabold text-2xl mb-8">
            More Information:
          </h3>
          <ul className="-translate-x-1">
            <li className="mb-5 group">
              <div className="background" />
              <div className="pdf bg-white text-blue text-lg font-bold text-center w-100 px-10 py-6">
                <Link
                  href="/pdfs/Grease Lock Care Guide.pdf"
                  target="_blank"
                  className="no-underline"
                >
                  Care Guide
                </Link>
                <img
                  src="images/arrow-right-solid.svg"
                  className="arrow duration-300 ease-in-out group-hover:translate-x-1"
                />
              </div>
            </li>
            <li className="mb-5 group">
              <div className="background" />
              <div className="pdf bg-white text-blue text-lg font-bold text-center w-100 px-10 py-6">
                <Link
                  href="pdfs/Grease Lock Overview & Spec Sheet.pdf"
                  target="_blank"
                  className="no-underline"
                >
                  Overview & Spec Sheet
                </Link>
                <img
                  src="images/arrow-right-solid.svg"
                  className="arrow duration-300 ease-in-out group-hover:translate-x-1"
                />
              </div>
            </li>
            <li className="mb-5 group">
              <div className="background" />
              <div className="pdf bg-white text-blue text-lg font-bold text-center w-100 px-10 py-6">
                <Link
                  href="pdfs/Grease Lock Product Comparison Sheet.pdf"
                  target="_blank"
                  className="no-underline"
                >
                  Product Comparison Sheet
                </Link>
                <img
                  src="images/arrow-right-solid.svg"
                  className="arrow duration-300 ease-in-out group-hover:translate-x-1"
                />
              </div>
            </li>
            <li className="group">
              <div className="background" />
              <div className="pdf bg-white text-blue text-lg font-bold text-center w-100 px-10 py-6">
                <Link
                  href="pdfs/Grease Lock Sell Sheet.pdf"
                  target="_blank"
                  className="no-underline"
                >
                  Sell Sheet
                </Link>
                <img
                  src="images/arrow-right-solid.svg"
                  className="arrow duration-300 ease-in-out group-hover:translate-x-1"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
