import { useLayoutEffect, useState } from "react";
import { localStorageDetector } from "typesafe-i18n/detectors";
import TypesafeI18n from "@/i18n/i18n-react";
import { detectLocale } from "../i18n/i18n-util";
import { loadLocaleAsync } from "../i18n/i18n-util.async";
import type { ContextProvider } from "@/contexts/types";

const detectedLocale = detectLocale(localStorageDetector);

export const I18nContextProvider: ContextProvider = ({ children }) => {
  const [wasLoaded, setWasLoaded] = useState(false);

  const langDir = detectedLocale === "he" ? "rtl" : "ltr";

  useLayoutEffect(() => {
    loadLocaleAsync(detectedLocale)
      .then(() => {
        setWasLoaded(true);
      })
      .catch(() => {
        //TODO: handle error
        setWasLoaded(true);
      });
  }, []);

  if (!wasLoaded) return null;

  return (
    <TypesafeI18n locale={detectedLocale}>
      <div dir={langDir}>{children}</div>
    </TypesafeI18n>
  );
};
