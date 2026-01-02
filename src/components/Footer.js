import GrYoutube from "@meronex/icons/gr/GrYoutube";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-6 lg:w-full">
      <div className="wrapper mb-5">
        <img src="/images/greaselock-logo.png" className="w-44 bottom-0 left-0" />
      </div>
      <div className="layout-padding mb-14">
        <div className="wrapper sm:flex">
          <div className="mb-8 sm:mb-0 sm:w-1/2">
            <h5 className="font-bold mb-3">Find Us</h5>
            <p className="text-sm font-normal tracking-wider">
              35 North Street; Suite 50 <br />
              Canandaigua, NY 14424 USA
            </p>
          </div>
          <div className="sm:w-1/2">
            <h5 className="font-bold mb-3">Contact Us Today To Learn More</h5>
            <p className="text-sm font-normal tracking-wider">
              Email{" "}
              <a className="text-teal font-bold" href="mailto: sales@greaselock.com">
                sales@greaselock.com
              </a>{" "}
              or call{" "}
              <a className="text-teal font-bold" href="tel:8008289638">
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
              Copyright © {new Date().getFullYear()} GREASE LOCK<sup>&#174;</sup>
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
