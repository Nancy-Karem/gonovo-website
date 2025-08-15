import Footer from "@/components/ui/footer/Footer";
import "aos/dist/aos.css";
import WithAOS from "@/components/withaos/WithAos";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ContactusContext } from "@/components/context/ContactusContext";
import { Contact } from "@/components/contactcomp/Contact";

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
      <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
        <WithAOS>
          {children}
          <ContactusContext>
            <Footer />
            <Contact />
          </ContactusContext>
        </WithAOS>
      </div>
    </NextIntlClientProvider>
  );
}
