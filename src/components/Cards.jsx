import card1 from "../assets/img/card1.svg";
import card2 from "../assets/img/card2.svg";

export function Cards() {
  return (
    <section className="h-[300px] w-full mt-44 grid grid-cols-4">
      <div className="bg-white px-10 flex flex-col items-center justify-center text-center">
        <img src={card1} width={40} alt="" className="self-start mx-5 mb-6" />
        <p className="self-start mx-5 mb-6 font-bold text-lg">Send Money</p>
        <span className="text-justify mx-5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          exercitationem aspernatur quis.
        </span>
      </div>

      <div className="bg-[#C3FF9D] px-10 flex flex-col items-center justify-center text-center">
        <img src={card1} width={40} alt="" className="self-start mx-5 mb-6" />
        <p className="self-start mx-5 mb-6 font-bold text-lg">Send Money</p>
        <span className="text-justify mx-5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          exercitationem aspernatur quis.
        </span>
      </div>

      <div className="bg-white px-10 flex flex-col items-center justify-center text-center">
        <img src={card2} width={40} alt="" className="self-start mx-5 mb-6" />
        <p className="self-start mx-5 mb-6 font-bold text-lg">Send Money</p>
        <span className="text-justify mx-5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          exercitationem aspernatur quis.
        </span>
      </div>

      <div className="bg-[#615DF2] px-10 flex flex-col items-center justify-center text-center text-white">
        <img src={card2} width={40} alt="" className="self-start mx-5 mb-6" />
        <p className="self-start mx-5 mb-6 font-bold text-lg">Send Money</p>
        <span className="text-justify mx-5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          exercitationem aspernatur quis.
        </span>
      </div>
    </section>
  );
}
