import { BiArrowToLeft } from "react-icons/bi";

export function Information() {
  return (
    <section id="information" className="w-full h-screen px-4 lg:px-20 py-40">
      <div className="flex-col flex md:flex-row justify-between items-center ">
        <iframe
          className="w-full md:w-[400px] h-52"
          src="https://www.youtube.com/embed/LxSwWwBCuHY?si=zVYsKbhhkaAh2-EO"
          title="YouTube video player"
          frameBorder={"0"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="text-right items-center md:items-end flex flex-col">
          <h1 className="text-2xl font-extrabold flex items-center">
            عن الدعوة الى الحق
            <BiArrowToLeft className="text-purple-700 text-4xl" />
          </h1>
          <p className="text-neutral-950 text-center md:text-right text-xl mt-6 lg:max-w-[500px]">
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
