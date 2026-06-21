import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { resources } from "./resources.js";

const savedLanguage = window.localStorage.getItem("portfolioLanguage");
const browserLanguage = navigator.language?.slice(0, 2);
const initialLanguage = savedLanguage || (["en", "uk", "pl"].includes(browserLanguage) ? browserLanguage : "en");

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
