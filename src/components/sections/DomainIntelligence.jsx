import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function DomainIntelligence() {
    const { t } = useContext(LanguageContext);

    return (
        <section id="inteligencia" className="py-28 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-5">
                        <p className="text-xs tracking-[0.22em] text-slate-400">
                            {t.domain_intelligence_kicker}
                        </p>

                        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-primary">
                            {t.domain_intelligence_title}
                        </h2>

                        <p className="mt-6 text-slate-600 leading-relaxed">
                            {t.domain_intelligence_text}
                        </p>

                        <div className="mt-10 divider" />

                        <p className="mt-6 text-sm text-slate-600 leading-relaxed">
                            {t.domain_intelligence_note}
                        </p>
                    </div>

                    <div className="md:col-span-7">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {t.domain_intelligence_examples.map((item) => (
                                <div key={item.title} className="card p-6">
                                    <p className="text-xs tracking-[0.22em] text-slate-400">
                                        {t.domain_intelligence_item_kicker}
                                    </p>

                                    <h3 className="mt-3 text-slate-900 font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 rounded-xl border border-slate-200/70 bg-white p-6">
                            <p className="text-sm text-slate-700 leading-relaxed">
                                <span className="font-semibold text-slate-900">
                                    {t.domain_intelligence_quote}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}