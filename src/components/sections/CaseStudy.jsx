import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function CaseStudy() {
    const { t } = useContext(LanguageContext);

    return (
        <section id="caso" className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs tracking-[0.22em] text-slate-400">
                        {t.case_kicker}
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold text-primary">
                        {t.case_title}
                    </h2>

                    <p className="mt-5 text-slate-600 leading-relaxed">
                        {t.case_subtitle}
                    </p>
                </div>

                <div className="mt-14 grid lg:grid-cols-3 gap-6">
                    <div className="card p-6">
                        <div className="text-xs tracking-[0.22em] text-slate-400">
                            {t.case_col1_title}
                        </div>
                        <ul className="mt-5 space-y-3 text-sm text-slate-700 leading-relaxed list-disc pl-5">
                            {t.case_col1_items.map((x) => (
                                <li key={x}>{x}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="card p-6">
                        <div className="text-xs tracking-[0.22em] text-slate-400">
                            {t.case_col2_title}
                        </div>
                        <ul className="mt-5 space-y-3 text-sm text-slate-700 leading-relaxed list-disc pl-5">
                            {t.case_col2_items.map((x) => (
                                <li key={x}>{x}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="card p-6">
                        <div className="text-xs tracking-[0.22em] text-slate-400">
                            {t.case_col3_title}
                        </div>
                        <ul className="mt-5 space-y-3 text-sm text-slate-700 leading-relaxed list-disc pl-5">
                            {t.case_col3_items.map((x) => (
                                <li key={x}>{x}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="rounded-xl border border-slate-200/70 bg-slate-50 p-8 text-center">
                        <p className="text-sm text-slate-700 leading-relaxed">
                            <span className="font-semibold text-slate-900">
                                {t.case_quote}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}