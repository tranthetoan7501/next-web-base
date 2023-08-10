import { useLocale, NextIntlClientProvider, useMessages } from "next-intl";
import ClientNavBar from "./ClientNavBar";

export default function NavBar() {
  const locale = useLocale();
  const messages = useMessages();
  if (!messages) return null;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ClientNavBar />
    </NextIntlClientProvider>
  );
}
