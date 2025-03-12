import Image from "next/image";

export const ProductDetails = () => {
  return (
    <section className="px-8">
      <div className="wrapper">
        <div>
          <h2 className="text-2xl mb-4">Keeps Grease Out</h2>
          <h4 className="text-lg font-extrabold">Are You Concerned About:</h4>
          <ul className="details box">
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
          <div>
            <p className="my-10 text-2xl font-extrabold text-center">
              We are, too!
            </p>
          </div>
          <h4>The Grease Lock System Will:</h4>
          <ul className="details check">
            <li>Reduce grease build up everywhere and increase fire safety</li>
            <li>Result in less frequent hood cleanings</li>
            <li>Reduce water consumption and the use of harmful chemicals</li>
            <li>Restore your peace of mind</li>
          </ul>
        </div>
        <div className="my-10">
          <Image
            src="/images/demo.png"
            width={500}
            height={500}
            alt="Image showing how Grease Lock filtration sytem works."
          />
        </div>
      </div>
    </section>
  );
};
