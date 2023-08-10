"use client";
import Image from "next/image";
import Link from "next-intl/link";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import SwitchTheme from "./SwitchTheme";

export default function NavBar() {
  const locale = useLocale();
  const t = useTranslations("Home");
  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-300 dark:bg-slate-800 z-30">
      <div className="flex justify-between items-center w-[92%] mx-auto">
        <div className="flex items-center h-16">
          <Image
            className="w-16 h-10 cursor-pointer"
            width={500}
            height={500}
            src={"/ivb_logo_color.svg"}
            alt="..."
          />
        </div>
        <div className="nav-links duration-500 md:static absolute bg-transparent md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <div className="font-black text-xl text-sky-700 dark:text-yellow-300">
            {t("home_title")}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/home" locale={locale == "en" ? "vn" : "en"}>
            <Image
              className="h-10 rounded-full"
              width={42}
              height={42}
              src={locale == "en" ? "/EN.png" : "/VN.png"}
              alt="..."
            />
          </Link>
          <SwitchTheme />
        </div>
      </div>
    </div>
  );
}
