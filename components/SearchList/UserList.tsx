import { User } from "@/types";
import Image from "next/image";
export default function UserList({ list }: { list: User[] }) {
  return (
    <>
      <div>
        <div className="flex items-center px-5 pl-10 py-2">
          <span className="w-3/12">
            <span className="text-base uppercase text-gray-600 font-semibold dark:text-gray-400">
              Contact info
            </span>
          </span>
          <span className="w-4/12">
            <span className="text-base uppercase text-gray-600 font-semibold dark:text-gray-400">
              Workplace
            </span>
          </span>
          <span className="w-2/12">
            <span className="text-base uppercase text-gray-600 font-semibold dark:text-gray-400">
              Phone
            </span>
          </span>
          <span className="w-2/12">
            <span className="text-base uppercase text-gray-600 font-semibold dark:text-gray-400">
              Mobile
            </span>
          </span>
          <span>
            <span className="text-base uppercase text-gray-600 font-semibold dark:text-gray-400">
              Email
            </span>
          </span>
        </div>

        {list.map((item, index) => (
          <>
            <div
              key={index}
              className="hover:bg-sky-50 dark:hover:bg-blue-800 cursor-pointer bg-white shadow-lg flex p-4 pl-10 items-center mb-5 rounded-lg dark:bg-slate-800"
            >
              <div className="w-3/12">
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

                    <span className="block text-base font-bold ">
                      {item.PosittionName}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-4/12">
                <span className="text-base block font-bold text-gray-600 dark:text-slate-400">
                  {item.DepartmentName}
                </span>
                <span className="text-base block font-bold text-gray-600 dark:text-slate-400">
                  {item.UnitName}
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
          </>
        ))}
      </div>
    </>
  );
}
