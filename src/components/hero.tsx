import book1 from "../assets/image 2.png";
export function Hero() {
  return (
    <main id="hero" className="w-full h-screen px-20 my-5">
      <div className="flex justify-between items-center ">
        <img className="relative top-24" src={book1} alt="" />
        <p className="text-5xl font-bold text-right space-y-20 max-w-[800px]">
          صفحة دعوية تهدف إلى الأمر بالمعروف والنهي عن المنكر <br /> والتعريف
          بقواعد الإسلام <br /> ونشر الفوائد وجزانا الله وإياكم خيراً
        </p>
      </div>
          <div className="w-full h-20 shadow-lg bg-neutral-300 rounded-2xl relative top-20 items-center justify-evenly text-4xl flex opacity-80">
              <h1>سيرة</h1>
              <h1>حديث</h1>
              <h1>فقه</h1>
              <h1>توحيد</h1>
              <h1>تفسير</h1>
              <h1>:الدروس</h1>
      </div>
    </main>
  );
}
