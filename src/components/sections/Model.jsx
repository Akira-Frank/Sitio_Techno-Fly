import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Model() {
    const { t } = useContext(LanguageContext);

    return (
        <section id="modelo" className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs tracking-[0.22em] text-slate-400">
                        {t.model_kicker}
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold text-primary">
                        {t.model_title}
                    </h2>

                    <p className="mt-5 text-slate-600 leading-relaxed">
                        {t.model_subtitle}
                    </p>
                </div>

                <div className="mt-14 grid md:grid-cols-4 gap-6">
                    {t.model_steps.map((step, index) => (
                        <div key={index} className="card p-6">
                            <div className="text-xs tracking-[0.22em] text-slate-400">
                                {t.model_step_prefix} {String(index + 1).padStart(2, "0")}
                            </div>

                            <p className="mt-4 text-slate-900 font-semibold">
                                {step}
                            </p>

                            <div className="mt-6 divider" />

                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                {t.model_step_note}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 max-w-3xl mx-auto text-center">
                    <div className="divider" />
                    <p className="mt-6 text-slate-600">
                        {t.model_note}
                    </p>
                </div>
            </div>
        </section>
    );
}