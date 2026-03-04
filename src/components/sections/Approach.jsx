import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Approach() {
    const { t } = useContext(LanguageContext);

    return (
        <section id="enfoque" className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
                <div className="md:sticky md:top-24">
                    <p className="text-xs tracking-[0.22em] text-slate-400">
                        {t.approach_kicker}
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold text-primary">
                        {t.approach_title}
                    </h2>

                    <p className="mt-6 text-slate-600 leading-relaxed">
                        {t.approach_text}
                    </p>

                    <div className="mt-10 divider" />
                    <p className="mt-6 text-sm text-slate-600 leading-relaxed">
                        {t.approach_note}
                    </p>
                </div>

                <div className="grid gap-6">
                    {t.approach_items.map((it) => (
                        <div key={it.title} className="card p-6">
                            <div className="text-xs tracking-[0.22em] text-slate-400">
                                {t.approach_item_kicker}
                            </div>
                            <h3 className="mt-3 text-slate-900 font-semibold">
                                {it.title}
                            </h3>
                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                {it.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}