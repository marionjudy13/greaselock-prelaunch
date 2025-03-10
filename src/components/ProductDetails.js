import Image from "next/image";

export const ProductDetails = () => {
  return (
    <section>
      <div className="wrapper">
        <div>
          <h2>Keeps Grease Out</h2>
          <h3>Are You Concerned About:</h3>
          <ul>
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
          <p>We are too!</p>
          <h3>The Grease Lock System Will:</h3>
          <ul>
            <li>Reduce grease build up everywhere and increase fire safety</li>
            <li>Result in less frequent hood cleanings</li>
            <li>Reduce water consumption and the use of harmful chemicals</li>
            <li>Restore your peace of mind</li>
          </ul>
        </div>
        <div>
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
