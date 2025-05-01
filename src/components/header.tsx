import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import logo from "../assets/img1.png";
export function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="w-full py-6 pt-10 px-5 lg:px-20 bg-neutral-200 flex justify-between items-center ">
      <div className="absolute -top-32 left-2 w-56 h-40 bg-neutral-300 rounded-full flex items-center justify-center shadow-lg">
        {/* <!-- Discord Button -- */}
        <a
          href="https://discord.gg/CnJP9xAVfs"
          target="_blank"
          className="bg-blue-600 flex text-white gap-2 items-center text-sm px-2 py- mt-32 rounded-[8px] hover:bg-blue-900 transition"
        >
          <FaDiscord className="text-sm" />
          Join Discord
        </a>
      </div>{" "}
      <BiMenu
        className={"flex text-neutral-900 lg:hidden text-4xl cursor-pointer"}
        onClick={() => {
          setToggle(!toggle);
        }}
      />
      <nav
        className={
          toggle
            ? "h-40 w-40 absolute left-1/4 top-32 text-center items-center justify-center gap-3 rounded-2xl flex flex-col bg-neutral-400 "
            : "hidden lg:flex gap-20 text-xl"
        }
      >
        <a
          className="decoration-0 hover:scale-110 hover:-translate-y-1 transition  text-neutral-950"
          href=""
        >
          الكتب
        </a>{" "}
        <a
          className="decoration-0 hover:scale-110 hover:-translate-y-1 transition  text-neutral-950"
          href="#information"
        >
          تفاصيل السيرفر
        </a>
        <a
          className="decoration-0 hover:scale-110 hover:-translate-y-1 transition  text-neutral-950"
          href="#hadeeth"
        >
          الحديث
        </a>
        <a
          className="decoration-0 hover:scale-110 hover:-translate-y-1 transition  text-neutral-950"
          href="#hero"
        >
          صفحة الرئيسية
        </a>
      </nav>
      <img className="w-20 h-fit" src={logo} alt="" />
    </header>
  );
}
