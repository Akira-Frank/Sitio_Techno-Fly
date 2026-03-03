import { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";
import es from "../i18n/es";
import en from "../i18n/en";

export default function LanguageProvider({ children }) {
    const getInitialLanguage = () => {
        const saved = localStorage.getItem("lang");
        if (saved) return saved;

        const browserLang = navigator.language.slice(0, 2);
        return browserLang === "en" ? "en" : "es";
    };

    const [language, setLanguage] = useState(getInitialLanguage);

    useEffect(() => {
        localStorage.setItem("lang", language);
    }, [language]);

    const translations = language === "es" ? es : en;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
            {children}
        </LanguageContext.Provider>
    );
}