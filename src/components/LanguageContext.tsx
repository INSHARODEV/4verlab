"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>("ar"); // Default to Arabic as requested

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang) {
            setLanguageState(savedLang);
        }
    }, []);

    const dir = language === "ar" ? "rtl" : "ltr";

    // Update HTML attributes when language changes
    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = dir;
    }, [language, dir]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, dir }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
