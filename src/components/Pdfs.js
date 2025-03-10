import Link from "next/link";

export const Pdfs = () => {
  return (
    <section>
      <div className="wrapper">
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
