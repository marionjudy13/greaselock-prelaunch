import HubSpotForm from "./HubspotForm";

export const Contact = () => {
  return (
    <section className="px-8 py-24 bg-gray">
      <div className="wrapper">
        <div className="bg-white pt-10 lg:py-20 lg:px-14">
          <h3 className="font-extrabold text-2xl ml-9">Contact Us</h3>
          <div className="-mt-4">
            <HubSpotForm />
          </div>
        </div>
      </div>
    </section>
  );
};
