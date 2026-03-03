import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function CTA() {
    const { t } = useContext(LanguageContext);

    return (
        <section className="py-28 bg-slate-950 text-white text-center">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-semibold">
                    {t.cta_final_title}
                </h2>

                <p className="mt-5 text-white/65 leading-relaxed">
                    Si hay fricción, variación o pérdida de trazabilidad, lo vemos como un problema de arquitectura.
                </p>

                <div className="mt-10">
                    <button className="btn btn-primary">
                        {t.cta_final_button}
                    </button>
                </div>

                <p className="text-xs text-white/50 mt-6">
                    Evaluación inicial sujeta a análisis previo.
                </p>
            </div>
        </section>
    );
}