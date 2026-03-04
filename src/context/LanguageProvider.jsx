import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import es from "../i18n/es";
import en from "../i18n/en";

const STORAGE_KEY = "lang";

export default function LanguageProvider({ children }) {
    const getInitialLanguage = () => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === "es" || saved === "en") return saved;
        } catch {
            // ignore storage errors (private mode, blocked, etc.)
        }

        const browserLang = (navigator.language || "es").slice(0, 2);
        return browserLang === "en" ? "en" : "es";
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
        document.documentElement.lang = language === "en" ? "en" : "es-MX";
    }, [language]);

    const t = useMemo(() => (language === "es" ? es : en), [language]);

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