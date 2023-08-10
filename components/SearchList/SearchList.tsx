import { useLocale, NextIntlClientProvider, useMessages } from "next-intl";
import ClientSearchList from "./ClientSearchList";
import { UserListData } from "@/types";

export default function SearchList({ data }: { data: UserListData }) {
  const locale = useLocale();
  const messages = useMessages();
  if (!messages) return null;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ClientSearchList data={data} />
    </NextIntlClientProvider>
  );
}
