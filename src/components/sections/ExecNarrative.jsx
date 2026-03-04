import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function ExecNarrative() {
    const { t } = useContext(LanguageContext);

    return (
        <section id="riesgo" className="py-28 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <p className="text-xs tracking-[0.22em] text-slate-400">
                            {t.exec_kicker}
                        </p>

                        <h2 className="mt-5 text-3xl font-semibold text-primary">
                            {t.exec_title}
                        </h2>

                        <p className="mt-6 text-slate-600 leading-relaxed">
                            {t.exec_text}
                        </p>

                        <div className="mt-10 card p-6">
                            <p className="text-sm text-slate-700 leading-relaxed">
                                <span className="font-semibold text-slate-900">
                                    {t.exec_quote1}
                                </span>
                            </p>
                        </div>

                        <div className="mt-6 card p-6">
                            <p className="text-sm text-slate-700 leading-relaxed">
                                {t.exec_quote2}
                            </p>
                        </div>
                    </div>

                    <div className="card p-6">
                        <p className="text-xs tracking-[0.22em] text-slate-400">
                            {t.exec_list_kicker}
                        </p>

                        <ul className="mt-6 space-y-3 text-sm text-slate-700 leading-relaxed list-disc pl-5">
                            {t.exec_list.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        <div className="mt-8 divider" />

                        <p className="mt-6 text-sm text-slate-600 leading-relaxed">
                            {t.exec_mexico_text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}