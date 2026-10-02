import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import es from "../i18n/es";
import en from "../i18n/en";
import de from "../i18n/de";

const STORAGE_KEY = "lang";

export default function LanguageProvider({ children }) {
    const getInitialLanguage = () => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === "es" || saved === "en" || saved === "de") return saved;
        } catch {
            // ignore storage errors (private mode, blocked, etc.)
        }

        const browserLang = (navigator.language || "es").slice(0, 2);
        if (browserLang === "en") return "en";
        if (browserLang === "de") return "de";
        return "es";
    };

    const [language, setLanguage] = useState(getInitialLanguage);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, language);
        } catch {
            // ignore storage errors
        }
    }, [language]);

    useEffect(() => {
        if (language === "en") document.documentElement.lang = "en";
        else if (language === "de") document.documentElement.lang = "de";
        else document.documentElement.lang = "es-MX";
    }, [language]);

    const t = useMemo(() => {
        if (language === "en") return en;
        if (language === "de") return de;
        return es;
    }, [language]);

    const value = useMemo(
        () => ({ language, setLanguage, t }),
        [language, t]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}