import HubSpotForm from "./HubspotForm";

export const Contact = ({ targetRef }) => {
  return (
    <section
      ref={targetRef}
      className="px-8 py-24 lg:py-32 bg-gray"
      id="contact"
    >
      <div className="wrapper">
        <div className="bg-white py-10 lg:pt-20 lg:pb-16 lg:px-14">
          <h3 className="font-extrabold text-2xl lg:text-3xl ml-9 lg:mb-1">
            Contact Us
          </h3>
          <div className="-mt-4">
            <HubSpotForm />
          </div>
        </div>
      </div>

      <div className="wrapper relative">
        <img
          src="images/mac.png"
          className="hidden xl:block absolute h-[400px] bottom-[-147px] right-[-128px]"
        />
      </div>
    </section>
  );
};
