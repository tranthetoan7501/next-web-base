import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import Counter from "@/client/Counter";
export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <Counter />
      <Link href="/" locale="en">
        ENGLISH
      </Link>
      <Link href="/" locale="vn">
        VIETNAMESE
      </Link>
      <div>{t("home_title")}</div>
    </>
  );
}
