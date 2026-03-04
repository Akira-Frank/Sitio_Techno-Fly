import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import logoTechnoFly from "../../assets/logo-technofly.png";

export default function Navbar() {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
            <div className="h-1 w-full bg-[#0F5A59]"></div>

            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                <a
                    href="#"
                    className="flex items-center transition hover:opacity-80"
                    aria-label="Techno-Fly (Home)"
                >
                    {/* 2. USA LA VARIABLE 'logoTechnoFly' SIN COMILLAS */}
                    <img
                        src={logoTechnoFly}
                        alt="Techno-Fly Ingenio Mexicano"
                        // Cambiamos h-10 por h-[70px] o h-14 para hacerlo más grande
                        className="h-[70px] w-auto object-contain py-1"
                    />
                </a>

                <div className="hidden md:flex items-center gap-3 text-xs text-slate-500">
                    <button
                        type="button"
                        onClick={() => setLanguage("es")}
                        className={`px-2 py-1 rounded-md transition ${
                            language === "es"
                                ? "text-slate-900 bg-slate-100"
                                : "hover:text-slate-900 hover:bg-slate-100/60"
                        }`}
                        aria-pressed={language === "es"}
                    >
                        ES
                    </button>
                    <span className="text-slate-300">/</span>
                    <button
                        type="button"
                        onClick={() => setLanguage("en")}
                        className={`px-2 py-1 rounded-md transition ${
                            language === "en"
                                ? "text-slate-900 bg-slate-100"
                                : "hover:text-slate-900 hover:bg-slate-100/60"
                        }`}
                        aria-pressed={language === "en"}
                    >
                        EN
                    </button>
                </div>
            </div>
        </nav>
    );
}