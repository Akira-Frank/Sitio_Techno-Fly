import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function CTA() {
    const { t } = useContext(LanguageContext);

    return (
        <section id="contacto" className="py-28 bg-slate-950 text-white text-center">
            <div className="max-w-3xl mx-auto px-6">
                <p className="text-xs tracking-[0.22em] text-white/50">
                    {t.cta_kicker}
                </p>

                <h2 className="mt-5 text-3xl font-semibold">
                    {t.cta_final_title}
                </h2>

                <p className="mt-5 text-white/65 leading-relaxed">
                    {t.cta_text}
                </p>

                <div className="mt-10 flex items-center justify-center">
                    <a
                        href="mailto:[TU_CORREO]@dominio.com?subject=Strategic%20Assessment%20-%20Techno-Fly"
                        className="btn btn-primary"
                    >
                        {t.cta_final_button}
                    </a>
                </div>

                <p className="text-xs text-white/50 mt-6">
                    {t.cta_note}
                </p>
            </div>
        </section>
    );
}