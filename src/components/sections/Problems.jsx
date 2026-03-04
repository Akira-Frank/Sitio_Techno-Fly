import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Problems() {
    const { t } = useContext(LanguageContext);

    return (
        <section id="problemas" className="py-28 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs tracking-[0.22em] text-slate-400">
                        {t.problems_kicker}
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold text-primary">
                        {t.problems_title}
                    </h2>

                    <p className="mt-5 text-slate-600 leading-relaxed">
                        {t.problems_subtitle}
                    </p>
                </div>

                <div className="mt-14 grid md:grid-cols-3 gap-6">
                    {t.problems_items.map((item, index) => (
                        <div key={index} className="card p-6">
                            <div className="text-xs tracking-[0.22em] text-slate-400">
                                {t.problems_item_prefix} {String(index + 1).padStart(2, "0")}
                            </div>
                            <p className="mt-4 text-slate-700 leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 max-w-3xl mx-auto text-center">
                    <div className="divider" />
                    <p className="mt-6 text-slate-600">
                        {t.problems_note}
                    </p>
                </div>
            </div>
        </section>
    );
}