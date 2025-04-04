import Image from "next/image";

export const ProductDetails = () => {
  return (
    <section className="px-8 py-16 lg:pb-32 z-10 sm:-mt-24">
      <div className="wrapper lg:flex lg:justify-between">
        <div className="max-w-[650px] m-auto lg:max-w-none lg:w-[75%]">
          <h2 className="text-2xl mb-4 sm:text-3xl sm:mb-6">
            Keeps Grease Out
          </h2>
          <h4 className="sm:text-lg sm:font-extrabold">
            Are You Concerned About:
          </h4>
          <ul className="details box text-textGray sm:text-lg">
            <li>
              Grease build up in your ventilation system that could catch fire?
            </li>
            <li>
              Grease eroding the membrane on your roof leading to costly
              repairs?
            </li>
            <li>
              Grease costing you thousands of dollars in cleaning, chemicals,
              and labor?
            </li>
            <li>Grease destroying your livelihood?</li>
          </ul>
          <div className="relative -rotate-6">
            <p className="mt-8 mb-3 text-[26px] font-extrabold text-center">
              We are, too!
              <img
                src="/images/swipe-sm.png"
                className="relative m-auto -top-7 w-[190px] h-[18px]"
              />
            </p>
          </div>
          <h4 className="sm:text-lg sm:font-extrabold">
            The Grease Lock Filter System Will:
          </h4>
          <ul className="details check text-textGray sm:text-lg">
            <li>Reduce grease build up everywhere and increase fire safety</li>
            <li>Result in less frequent hood cleanings</li>
            <li>Reduce water consumption and the use of harmful chemicals</li>
            <li>Restore your peace of mind</li>
          </ul>
        </div>
        <div className="my-10 sm:mt-20 lg:flex">
          <img
            src="/images/demo.png"
            alt="Image showing how Grease Lock filtration sytem works."
            className="w-100 m-auto"
          />
        </div>
      </div>
    </section>
  );
};
