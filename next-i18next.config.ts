import path from "path";

const nextI18NextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  localePath: path.resolve("./locales"),
};

export default nextI18NextConfig;
