import { User } from "@/types";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function UserList({ list }: { list: User[] }) {
  const t = useTranslations("Home");
  const locale = useLocale();
  function translate(item: User, name: keyof User) {
    if (locale == "en") {
      name += "En";
    }
    return item[name];
  }
  function positionCss(positionId: number) {
    switch (positionId) {
      case 5047:
        return "text-red-400 dark:text-red-400";
      case 5048:
        return "text-blue-400 dark:text-blue-300";
      case 5050:
        return "text-green-400 dark:text-green-300";
      case 5052:
        return "text-violet-400 dark:text-violet-400 ";
      case 5068:
        return "text-yellow-500 dark:text-yellow-400 ";
      case 5087:
        return "text-yellow-500 dark:text-yellow-400 ";
      default:
        return "text-violet-500 dark:text-violet-400";
    }
  }

  return (
    <div>
      <div className="flex items-center px-5 pl-10 py-2">
        <span className="w-3/12">
          <span className="text-base uppercase text-gray-600 font-semibold dark:text-gray-400">
            {t("home_contact_info")}
          </span>
        </span>
        <span className="w-4/12">
          <span className="text-base uppercase text-gray-600 font-semibold dark:text-gray-400">
            {t("home_workplace")}
          </span>
        </span>
        <span className="w-2/12">
          <span className="text-base uppercase text-gray-600 font-semibold dark:text-gray-400">
            {t("home_phone")}
          </span>
        </span>
        <span className="w-2/12">
          <span className="text-base uppercase text-gray-600 font-semibold dark:text-gray-400">
            {t("home_mobile")}
          </span>
        </span>
        <span>
          <span className="text-base uppercase text-gray-600 font-semibold dark:text-gray-400">
            {t("home_email")}
          </span>
        </span>
      </div>

      {list.map((item, index) => (
        <div
          key={index}
          className="hover:bg-sky-50 dark:hover:bg-blue-800 cursor-pointer bg-white shadow-lg flex p-4 pl-10 items-center mb-5 rounded-lg dark:bg-slate-800"
        >
          <div className="w-3/12" key={item.Id}>
            <div className="flex items-center">
              <Image
                src="/profile.png"
                alt="avatar"
                width={40}
                height={40}
                className="h-10 rounded-full"
              />
              <div className="ml-4">
                <span className="capitalize text-gray-800 dark:text-white font-bold">
                  {item.Name}{" "}
                </span>

                <span
                  className={
                    "block text-base font-bold " + positionCss(item.PosittionId)
                  }
                >
                  {translate(item, "PosittionName")}
                </span>
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <span className="text-base block font-bold text-gray-600 dark:text-slate-400">
              {translate(item, "DepartmentName")}
            </span>
            <span className="text-base block font-bold text-gray-600 dark:text-slate-400">
              {translate(item, "UnitName")}
            </span>
          </div>
          <div className="w-2/12">
            <span className="capitalize text-gray-600 text-sm font-bold dark:text-slate-400">
              {item.PhoneBranch}
            </span>
            <span className="capitalize block text-gray-600 text-sm font-bold dark:text-slate-400">
              {item.Phone ? +item.Phone : ""}
            </span>
          </div>
          <div className="w-1/12">
            <span className="capitalize text-gray-600 text-sm font-bold dark:text-slate-400">
              {item.Mobile}
            </span>
          </div>
          <div>
            <span className="text-gray-600 font-bold text-sm dark:text-slate-400">
              {item.Email}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
