import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Industries() {
    const { t } = useContext(LanguageContext);

    return (
        <section id="industrias" className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs tracking-[0.22em] text-slate-400">
                        {t.industries_kicker}
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold text-primary">
                        {t.industries_title}
                    </h2>

                    <p className="mt-5 text-slate-600 leading-relaxed">
                        {t.industries_subtitle}
                    </p>
                </div>

                <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.industries_items.map((it) => (
                        <article key={it.title} className="card p-6 text-left">
                            <div className="text-xs tracking-[0.22em] text-slate-400">
                                {t.industries_item_kicker}
                            </div>

                            <h3 className="mt-3 text-slate-900 font-semibold">
                                {it.title}
                            </h3>

                            <div className="mt-6 space-y-4">
                                <div>
                                    <p className="text-xs tracking-[0.22em] text-slate-400">
                                        {t.industries_pains_label}
                                    </p>
                                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                                        {it.pains}
                                    </p>
                                </div>

                                <div className="divider" />

                                <div>
                                    <p className="text-xs tracking-[0.22em] text-slate-400">
                                        {t.industries_fix_label}
                                    </p>
                                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                                        {it.fix}
                                    </p>
                                </div>

                                <div className="divider" />

                                <div>
                                    <p className="text-xs tracking-[0.22em] text-slate-400">
                                        {t.industries_result_label}
                                    </p>
                                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                                        {it.result}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 max-w-3xl mx-auto text-center">
                    <div className="divider" />
                    <p className="mt-6 text-slate-600">
                        {t.industries_note}
                    </p>
                </div>
            </div>
        </section>
    );
}