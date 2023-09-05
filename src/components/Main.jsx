import star from "../assets/img/star.png";
import apple from "../assets/img/apple.png";
import playStore from "../assets/img/playStore.png";

import smarthphone from "../assets/img/smarthphone.png";

export function Main() {
  return (
    <section className="flex">
      <div className="mt-32 ml-[135px]">
        <p className="text-white uppercase text-sm">Invest in your future</p>
        <h1 className="text-6xl text-white font-bold leading-tight">
          <span className="text-dejaGray inline-flex flex-row">Saving &</span>{" "}
          <img src={star} alt="star" width={45} className="inline mb-2" />
          <br />
          investing are <br /> made{" "}
          <span className="text-[#C3FF9D]">simple.</span>
        </h1>
      </div>

      <div className="mt-[42px] ml-[470px] absolute">
        <img src={smarthphone} width={420} alt="smarthphone" />
      </div>

      <div className="w-[400px]">
        <div className="flex h-full items-center ml-96 gap-24">
          <p className="text-dejaGray text-xs">
            Active users <br />
            <span className="text-white font-bold text-lg">5000+</span>
          </p>
          <p className="text-dejaGray text-xs">
            Download <br />
            <span className="text-white font-bold text-lg">100K</span>
          </p>

          <p className="w-[300px] absolute mt-60 text-dejaGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            nesciunt repellat ea ipsam et dolorem consectetur unde voluptatibus
            perferendis. Maxime.
          </p>

          <p className="w-[300px] absolute mt-[440px] text-white uppercase text-sm font-medium">
            Download now on:
          </p>
        </div>

        <div className="w-[300px] absolute mt-[7%] ml-[28%]">
        <button className="w-32 h-12 rounded-md bg-white ml-2 mr-4 cursor-pointer">
            <span className="text-dejaGray text-xs">Avaible on</span> <br />{" "}
            <span className="flex items-center font-medium">
              <img src={apple} width={20} alt="Play Store" className="ml-2 mr-1 h-full"/>
            App Store
            </span>{" "}
          </button>

          <button className="w-32 h-12 rounded-md bg-white cursor-pointer">
            <span className="text-dejaGray text-xs">Avaible on</span> <br />{" "}
            <span className="flex items-center font-medium">
              <img src={playStore} width={20} alt="Play Store" className="ml-2 mr-1 h-full"/>
            Play Store
            </span>{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
