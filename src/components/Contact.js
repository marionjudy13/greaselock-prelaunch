import HubSpotForm from "./HubspotForm";

export const Contact = () => {
  return (
    <section className="px-8 py-20 bg-gray">
      <div className="wrapper">
        <div className="bg-white pt-10">
          <h3 className="font-extrabold text-2xl ml-9">Contact Us</h3>
          <HubSpotForm />
        </div>
      </div>
    </section>
  );
};
