"use client";

import { Select } from "nextra/components";
import { GlobeIcon } from "nextra/icons";
import { usePathname } from "next/navigation";
import { Fragment, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

type Locale = "en" | "tr";

const languageOptions: Array<{ id: Locale; name: string }> = [
  { id: "en", name: "🇬🇧 English" },
  { id: "tr", name: "🇹🇷 Türkçe" },
];

const localizedRoutes: Array<Record<Locale, string>> = [
  { en: "/", tr: "/" },
  { en: "/quick-start/", tr: "/hizli-baslangic/" },
  { en: "/arduino-library/", tr: "/arduino-kutuphanesi/" },
  {
    en: "/javascript-typescript-library/",
    tr: "/javascript-typescript-kutuphanesi/",
  },
  { en: "/rust-library/", tr: "/rust-kutuphanesi/" },
  { en: "/map-feature/", tr: "/harita-ozelligi/" },
  { en: "/ota-feature/", tr: "/ota-ozelligi/" },
  {
    en: "/realtime-connection/",
    tr: "/gercek-zamanli-baglanti/",
  },
  { en: "/rest-api/", tr: "/rest-api/" },
  { en: "/rest-api/database/", tr: "/rest-api/veritabani/" },
  {
    en: "/rest-api/database/all-data-fetching/",
    tr: "/rest-api/veritabani/tum-verileri-okuma/",
  },
  {
    en: "/rest-api/database/data-fetching/",
    tr: "/rest-api/veritabani/veri-okuma/",
  },
  {
    en: "/rest-api/database/data-saving/",
    tr: "/rest-api/veritabani/veri-kaydetme/",
  },
  {
    en: "/rest-api/database/data-toggle/",
    tr: "/rest-api/veritabani/veri-gecisi/",
  },
  {
    en: "/rest-api/database/data-removing/",
    tr: "/rest-api/veritabani/veri-kaldirma/",
  },
];

function isLocale(value: string): value is Locale {
  return languageOptions.some((language) => language.id === value);
}

function normalizeRoute(pathname: string) {
  const route = `/${pathname.split("/").slice(2).filter(Boolean).join("/")}/`;
  return route === "//" ? "/" : route;
}

export function SidebarLanguageSwitch() {
  const pathname = usePathname();
  const [targets, setTargets] = useState<HTMLElement[]>([]);
  const localeSegment = pathname.split("/")[1];
  const locale = isLocale(localeSegment) ? localeSegment : "en";

  useLayoutEffect(() => {
    setTargets(
      Array.from(
        document.querySelectorAll<HTMLElement>(".nextra-sidebar-footer"),
      ),
    );
  }, [pathname]);

  function changeLanguage(nextLocale: string) {
    if (!isLocale(nextLocale) || nextLocale === locale) {
      return;
    }

    const currentRoute = normalizeRoute(pathname);
    const routePair = localizedRoutes.find(
      (routes) => routes[locale] === currentRoute,
    );
    const nextRoute = routePair?.[nextLocale] ?? "/";

    window.location.replace(`/${nextLocale}${nextRoute}`);
  }

  const selectedLanguage = languageOptions.find(
    (language) => language.id === locale,
  )?.name;

  return targets.map((target, index) =>
    createPortal(
      <Select
        className="px-sidebar-language-switch"
        onChange={changeLanguage}
        options={languageOptions}
        selectedOption={
          <Fragment>
            <GlobeIcon height="12" />
            <span>{selectedLanguage}</span>
          </Fragment>
        }
        title={locale === "tr" ? "Dili değiştir" : "Change language"}
        value={locale}
      />,
      target,
      `sidebar-language-switch-${index}`,
    ),
  );
}
