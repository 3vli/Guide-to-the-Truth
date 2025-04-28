import { BiArrowToLeft } from "react-icons/bi";
import { FcStart } from "react-icons/fc";

export function Information() {
  return (
    <section id="information" className="w-full h-screen px-20 py-40">
      <div className="flex justify-between items-center ">
        <iframe
          width="500"
          height="280"
          src="https://www.youtube.com/embed/LxSwWwBCuHY?si=zVYsKbhhkaAh2-EO"
          title="YouTube video player"
          frameBorder={"0"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="text-right items-end flex flex-col">
          <h1 className="text-2xl font-extrabold flex items-center">
            عن الدعوة الى الحق
            <BiArrowToLeft className="text-purple-700 text-4xl" />
          </h1>
          <p className="text-neutral-950 text-lg mt-6 max-w-[500px]">
            مرحبًا بكم في سيرفر الدعوة إلى الحق، مساحة دعوية تجمع بين طلب العلم
            الشرعي والتناصح في الله، على منهج أهل السنة والجماعة. نقرأ ونتدارس
            معًا كتب العقيدة، والحديث الشريف، والسيرة النبوية، والفقه الإسلامي،
            مع الحرص على العمل بما نتعلمه، والأمر بالمعروف والنهي عن المنكر،
            بالحكمة والموعظة الحسنة.
          </p>
        </div>
      </div>
    </section>
  );
}
