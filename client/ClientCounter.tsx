"use client";

import { useTranslations } from "next-intl";

export default function ClientCounter() {
  const t = useTranslations("Index");

  return <div>{t("home_title")}</div>;
}
