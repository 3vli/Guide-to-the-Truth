import { BsDiscord, BsInstagram, BsYoutube } from "react-icons/bs";

export function SocialMedia() {
    return (
      <div className="flex gap-4 -mt-6">
        <BsDiscord
          className="cursor-pointer text-4xl hover:scale-110 transition-all text-blue-800"
          onClick={() => {
        window.open("https://discord.gg/CnJP9xAVfs");
          }}
        />
        <BsInstagram
          className="cursor-pointer text-4xl hover:scale-110 transition-all text-pink-800"
          onClick={() => {
        window.open("https://www.instagram.com/ald3oahllhaq/profilecard/?igsh=M2F4N3F1ZDMyY3Q=")
          }}
        />
        <BsYoutube
          className="cursor-pointer text-4xl hover:scale-110 transition-all text-red-800"
          onClick={() => {
        window.open("https://youtube.com/@ald3oall7?si=96BpTlgjfpjfjAXv");
          }}
        />
      </div>
    );
}