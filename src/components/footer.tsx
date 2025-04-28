import logo from "../assets/img1.png";
import { SocialMedia } from "./social";

export function Footer() {
  return (
    <footer className="w-full h-1/2 mt-40 bg-neutral-300 px-20 py-20 ">
      <div className="flex justify-between items-center">
        <p className="text-center w-[600px] font-extrabold">
          مرحبًا بكم في سيرفر الدعوة إلى الحق، مجلس علمي دعوي على منهج أهل السنة
          والجماعة، نسعى فيه لطلب العلم الشرعي الصحيح من مصادره الموثوقة، والعمل
          به، والدعوة إليه بالحكمة والموعظة الحسنة.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">الدعوة الى الحق</h1>
            <img className="w-24" src={logo} alt="" />
          </div>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}
