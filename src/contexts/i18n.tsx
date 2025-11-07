import { useEffect, useState } from "react";
import { initLocalStorageDetector } from "typesafe-i18n/detectors";
import TypesafeI18n from "@/i18n/i18n-react";
import { detectLocale } from "../i18n/i18n-util";
import {  loadLocaleAsync } from "../i18n/i18n-util.async";
import type { ContextProvider } from "@/contexts/types";
import { useI18nContext } from "@/i18n/i18n-react";

const LOCALE_KEY = "locale";

const localStorageDetector = initLocalStorageDetector(LOCALE_KEY);

const detectedLocale = detectLocale(localStorageDetector);

const InnerContext: ContextProvider = ({ children }) => {

  const [wasLoaded, setWasLoaded] = useState(false);
  const translation = useI18nContext();

  useEffect(() => {
    loadLocaleAsync(translation.locale)
      .then(() => {
        setWasLoaded(true);
        translation.setLocale(translation.locale);
        localStorage.setItem(LOCALE_KEY, translation.locale);
      })
      .catch(() => {
        setWasLoaded(true);
      });
  }, [translation]);

  if (!wasLoaded) return null;

  const langDir = translation.locale === "he" ? "rtl" : "ltr";

  return <div dir={langDir}>{children}</div>;
};

export const I18nContextProvider: ContextProvider = ({ children }) => {
  return (
    <TypesafeI18n locale={detectedLocale}>
      <InnerContext>{children}</InnerContext>
    </TypesafeI18n>
  );
};
