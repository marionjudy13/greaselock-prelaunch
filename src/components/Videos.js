import Link from "next/link";

export const Videos = () => {
  return (
    <section className="px-8 py-20 lg:px-14">
      <div className="max-w-[650px] m-auto lg:max-w-none">
        <h3 className="text-center text-blue font-extrabold text-2xl mb-10">
          Watch &amp; Learn More:
        </h3>
        <ul className="lg:flex videos-container">
          <li className="mb-7 video-container lg:mb-0">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uE33KBe50h4?si=dAAYxUFmzcy5MbgC"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h4 className="text-base text-center mt-2">
              Welcome To Grease Lock
            </h4>
          </li>
          <li className="mb-7 video-container lg:mb-0">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/39j0cg3BGkw?si=E_r7xLk-F2V7dekZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h4 className="text-base text-center mt-2">
              Introduction to Grease Lock
            </h4>
          </li>
          <li className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WIg8jAe_gLs?si=3QJjGWfPFa78OAac"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h4 className="text-base text-center mt-2">
              Installation Instructions
            </h4>
          </li>
        </ul>
      </div>
    </section>
  );
};
