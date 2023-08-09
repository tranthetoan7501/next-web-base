"use client";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-300 dark:bg-slate-800 z-30">
      <div className="flex justify-between items-center w-[92%] mx-auto">
        <div className="flex items-center h-16">
          <Image
            className="w-16 h-10 cursor-pointer"
            width={500}
            height={500}
            src={require(`@/public/${"ivb_logo_color.svg"}`)}
            alt="..."
          />
        </div>
        <div className="nav-links duration-500 md:static absolute bg-yellow-300 dark:bg-slate-800 md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <div className="flex md:flex-row flex-col md:items-center gap-2 text-sky-700 text-2xl font-bold dark:text-yellow-300">
            Contact list
          </div>
        </div>
        <div className="flex items-center gap-6"></div>
      </div>
    </div>
  );
}
