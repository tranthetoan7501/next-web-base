"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function SearchBar({
  content,
  searchHandler,
}: {
  content: string;
  searchHandler: (content: string) => void;
}) {
  const t = useTranslations("Home");
  const [value, setValue] = useState<string>(content);
  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const onEnterEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchHandler(value);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center p-2 py-6 m-h-screen w-full">
        <div className="bg-white items-center justify-between w-3/5 flex rounded-full shadow-lg p-2 mb-5 dark:bg-yellow-300">
          <input
            className="font-bold uppercase rounded-full w-full h-10 py-4 pl-4 text-gray-700 dark:bg-yellow-400 dark:text-blue-900 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
            type="text"
            v-model="searchValue"
            value={value}
            onChange={onInput}
            onKeyDown={onEnterEvent}
            placeholder={t("home_search")}
          />

          <div
            className="bg-sky-600 p-2 hover:bg-sky-400 cursor-pointer mx-2 rounded-full"
            onClick={() => searchHandler(value)}
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
