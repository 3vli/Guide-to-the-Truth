import { BsQuote } from "react-icons/bs";

export function Hadeeth() {
  return (
    <section
      id="hadeeth"
      className="w-full h-1/4 px-5 lg:px-20 py-40 bg-neutral-300"
    >
      <div className="flex justify-center items-center text-center">
        <BsQuote className="opacity-60 absolute text-8xl md:text-[400px] text-neutral-400" />
      </div>
      <div className="flex z-10 flex-col justify-center relative -top-32 text-center">
        <h3 className="text-neutral-700 text-2xl z-20 mb-5 md:mb-10">
          قال رسول الله ﷺ
        </h3>
        <h1 className=" text-3xl md:text-4xl lg:text-6xl  z-20 text-purple-500 space-y-10">
          مَن سلَكَ طريقًا يلتَمِسُ فيهِ علمًا <br /> ؛ سَهَّلَ اللَّهُ لَهُ بهِ
          طريقًا إلى الجنَّةِ
        </h1>
        <h3 className="mt-5 md:mt-10 text-2xl">رواه مسلم</h3>
      </div>
    </section>
  );
}
