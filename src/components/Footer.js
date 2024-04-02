import GrYoutube from "@meronex/icons/gr/GrYoutube";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-6 lg:w-full">
      <div className="layout-padding mb-14">
        <div className="wrapper sm:flex">
          <div className="mb-8 sm:mb-0 sm:w-1/2">
            <h3>Find Us</h3>
            <p className="text-sm font-light">
              35 North Street; Suite 50 <br />
              Canandaigua, NY 14424 USA
            </p>
          </div>
          <div className="sm:w-1/2">
            <h3>Contact Us Today To Learn More</h3>
            <p className="text-sm  font-light">
              Email{" "}
              <a
                className="text-lightBlue font-bold"
                href="mailto: sales@greaselock.com"
              >
                sales@greaselock.com
              </a>{" "}
              or call{" "}
              <a className="text-lightBlue font-bold" href="tel:8008289638">
                800.828.9638
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white layout-padding py-4">
        <div className="wrapper">
          <div className="flex justify-between items-center w-full">
            <p className="text-black text-xs font-semibold">
              Copyright © 2024 GREASE LOCK&#8482;
            </p>
            <a href="https://www.youtube.com/@greaselock" target="_blank">
              <GrYoutube size="2em" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
