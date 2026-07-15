import { useLanguage } from "../../../context/LanguageContext";

function FlagGT() {
  return (
    <svg width="16" height="11" viewBox="0 0 24 16">
      <rect width="8" height="16" fill="#4997D0" />
      <rect x="8" width="8" height="16" fill="#fff" />
      <rect x="16" width="8" height="16" fill="#4997D0" />
    </svg>
  );
}

function FlagUS() {
  return (
    <svg width="16" height="11" viewBox="0 0 24 16">
      <rect width="24" height="16" fill="#B22234" />
      <rect y="1.6" width="24" height="1.6" fill="#fff" />
      <rect y="4.8" width="24" height="1.6" fill="#fff" />
      <rect y="8" width="24" height="1.6" fill="#fff" />
      <rect y="11.2" width="24" height="1.6" fill="#fff" />
      <rect y="14.4" width="24" height="1.6" fill="#fff" />
      <rect width="10" height="8.8" fill="#3C3B6E" />
    </svg>
  );
}

export function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  const isEn = language === "en";

  return (
    <button
      className={`lang-toggle ${isEn ? "lang-toggle--en" : ""}`}
      onClick={toggleLanguage}
      aria-label="Cambiar idioma / Switch language"
    >
      <span className="lang-toggle-thumb" />
      <span className="lang-toggle-option">
        <span className="lang-toggle-flag">
          <FlagGT />
        </span>
        <span className="lang-toggle-code">ES</span>
      </span>
      <span className="lang-toggle-option">
        <span className="lang-toggle-flag">
          <FlagUS />
        </span>
        <span className="lang-toggle-code">EN</span>
      </span>
    </button>
  );
}