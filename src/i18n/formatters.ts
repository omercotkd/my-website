import type { FormattersInitializer } from "typesafe-i18n";
import type { Locales, Formatters } from "./i18n-types";

export const initFormatters: FormattersInitializer<Locales, Formatters> = (
  locale: Locales
) => {
  const formatters: Formatters = {
    testFormatter: () => {
      return `This is a test formatter for locale: ${locale}`;
    },
  };

  return formatters;
};
