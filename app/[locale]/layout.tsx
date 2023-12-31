import NavBar from "@/components/NavBar";

import "./globals.css";
import { Inter } from "next/font/google";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Providers from "@/app/[locale]/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contact list",
  description: "Generated by create next app",
  image: "ivb_logo_color.svg",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className="max-w-screen-2xl m-auto  min-h-screen w-screen">
            <NavBar />
            <div className="pt-20 p-10 h-100 bg-gray-100 dark:bg-blue-900">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
