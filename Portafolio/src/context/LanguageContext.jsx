import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children, defaultLanguage = "es" }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook de acceso: const { language, setLanguage, t } = useLanguage();
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de un <LanguageProvider>");
  }
  return ctx;
};