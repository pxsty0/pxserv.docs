import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  unstable_shouldAddLocaleToLinks: true,
});

export default withNextra({
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "tr",
  },
});
