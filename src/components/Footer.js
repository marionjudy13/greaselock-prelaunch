import GrYoutube from "@meronex/icons/gr/GrYoutube";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-6">
      <div className="layout-padding mb-14">
        <div className="mb-8">
          <h3>Find Us</h3>
          <p>
            35 North Street; Suite 50 <br />
            Canandaigua, NY 14424 USA
          </p>
        </div>
        <div>
          <h3>Contact Us Today To Learn More</h3>
          <p>
            For any Grease Lock&#8482; inquiries please call{" "}
            <a className="text-lightBlue" href="tel:8008289638">
              800.828.9638
            </a>{" "}
            or email{" "}
            <a className="text-lightBlue" href="mailto: sales@greaselock.com">
              sales@greaselock.com
            </a>
          </p>
        </div>
      </div>
      <div className="bg-white layout-padding py-4">
        <div className="flex justify-between w-full">
          <p className="text-black text-xs font-semibold">
            Copyright © 2024 GREASE LOCK&#8482;
          </p>
          <a href="https://www.youtube.com/@greaselock" target="_blank">
            <GrYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};
