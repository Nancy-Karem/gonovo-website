import Footer from "@/components/ui/footer/Footer";
import { ContactusContext } from "@/components/context/ContactusContext";
import "aos/dist/aos.css";
import WithAOS from "@/components/withaos/WithAos";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <ContactusContext>
        <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
          <WithAOS>
            {children}
            <Footer />
          </WithAOS>
        </div>
      </ContactusContext>
    </NextIntlClientProvider>
  );
}
