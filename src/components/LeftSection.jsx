import star from "../assets/img/star.png";
import smarthphone from "../assets/img/smarthphone.png";

export function LeftSection() {
  return (
    <section>
      <div className="mt-32 ml-[135px]">
        <p className="text-white">Invest in your future</p>
        <h1 className="text-6xl text-white font-bold leading-tight">
          <span className="text-[#CBCAF7] inline-flex flex-row">Saving &</span>{" "}
          <img src={star} alt="star" width={45} className="inline mb-2" />
          <br />
          investing are <br /> made{" "}
          <span className="text-[#C3FF9D]">simple</span>
        </h1>
      </div>
      <div className="inline-block mb-20">
        <img src={smarthphone} alt="smarthphone" />
      </div>
    </section>
  );
}
