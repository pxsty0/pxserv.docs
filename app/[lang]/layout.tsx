import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { LastUpdated, Layout, Navbar } from "nextra-theme-docs";
import { SidebarLanguageSwitch } from "../sidebar-language-switch";
import "nextra-theme-docs/style.css";
import "../styles.css";

const locales = ["en", "tr"] as const;

const translations = {
  en: {
    brandSuffix: "Documentation",
    description:
      "Documentation for PxServ APIs, SDKs, real-time connections, OTA updates, and example IoT projects.",
    editPage: "Edit this page on GitHub",
    lastUpdated: "Last updated",
    backToTop: "Scroll to top",
    tocTitle: "On This Page",
    feedback: "Question? Give us feedback",
    dark: "Dark",
    light: "Light",
    system: "System",
    search: "Search documentation…",
  },
  tr: {
    brandSuffix: "Dokümantasyon",
    description:
      "PxServ API, SDK, gerçek zamanlı bağlantı, OTA ve örnek IoT projeleri dokümantasyonu.",
    editPage: "Bu sayfayı GitHub’da düzenle",
    lastUpdated: "Son güncelleme",
    backToTop: "Başa dön",
    tocTitle: "Bu Sayfada",
    feedback: "Bir sorunuz mu var? Geri bildirim gönderin",
    dark: "Koyu",
    light: "Açık",
    system: "Sistem",
    search: "Dokümantasyonda ara…",
  },
} as const;

type Locale = (typeof locales)[number];

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const metadata: Metadata = {
  title: {
    default: "PxServ Docs",
    template: "%s | PxServ Docs",
  },
  description: translations.tr.description,
  icons: {
    icon: [{ url: "/images/shared/logo.webp", type: "image/webp" }],
    shortcut: "/images/shared/logo.webp",
  },
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: requestedLocale } = await params;
  const lang = isLocale(requestedLocale) ? requestedLocale : "en";
  const text = translations[lang];

  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: 198, saturation: 88 }} />
      <body suppressHydrationWarning>
        <SidebarLanguageSwitch />
        <Layout
          docsRepositoryBase="https://github.com/pxsty0/pxserv.docs-v2/tree/main"
          editLink={text.editPage}
          feedback={{ content: text.feedback }}
          navbar={
            <Navbar
              logo={
                <span className="pxserv-logo">
                  <img
                    className="pxserv-logo__image"
                    src="/images/shared/logo.webp"
                    alt=""
                    width="28"
                    height="28"
                  />
                  <span>PxServ</span>
                  <span className="pxserv-logo__suffix">{text.brandSuffix}</span>
                </span>
              }
              logoLink={`/${lang}/`}
              projectLink="https://github.com/pxsty0/pxserv.docs-v2"
            />
          }
          pageMap={await getPageMap(`/${lang}`)}
          lastUpdated={<LastUpdated>{text.lastUpdated}</LastUpdated>}
          darkMode={false}
          nextThemes={{ forcedTheme: "dark", defaultTheme: "dark" }}
          search={<Search placeholder={text.search} />}
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true }}
          themeSwitch={{
            dark: text.dark,
            light: text.light,
            system: text.system,
          }}
          toc={{ backToTop: text.backToTop, title: text.tocTitle }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
