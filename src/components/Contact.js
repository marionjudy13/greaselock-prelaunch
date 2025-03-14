import HubSpotForm from "./HubspotForm";

export const Contact = () => {
  return (
    <section className="px-8 py-24 lg:py-32 bg-gray">
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
    </section>
  );
};
