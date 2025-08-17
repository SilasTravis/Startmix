import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../public/locales/en/main.json";
import ru from "../public/locales/ru/main.json";
import uz from "../public/locales/uz/main.json";

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  uz: { translation: uz },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ru", // default when nothing detected
    supportedLngs: ["en", "ru", "uz"],
    debug: false,
    interpolation: { escapeValue: false },

    // DO NOT set `lng` here; it overrides detection.

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      // If you use a custom key, uncomment:
      // lookupLocalStorage: "myAppLng",
    },

    initImmediate: false,
  });

export default i18n;
