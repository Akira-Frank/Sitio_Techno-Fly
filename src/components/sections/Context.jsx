import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Context() {
    const { t } = useContext(LanguageContext);

    return (
        <section className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs tracking-[0.22em] text-slate-400">
                        {t.context_kicker}
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold text-primary">
                        {t.context_title}
                    </h2>

                    <p className="mt-6 text-slate-600 leading-relaxed">
                        {t.context_text}
                    </p>
                </div>

                <div className="mt-14 max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
                    <div className="card p-6 text-left">
                        <div className="text-xs tracking-[0.22em] text-slate-400">
                            {t.context_card1_label}
                        </div>
                        <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                            {t.context_card1_text}
                        </p>
                    </div>

                    <div className="card p-6 text-left">
                        <div className="text-xs tracking-[0.22em] text-slate-400">
                            {t.context_card2_label}
                        </div>
                        <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                            {t.context_card2_text}
                        </p>
                    </div>

                    <div className="card p-6 text-left">
                        <div className="text-xs tracking-[0.22em] text-slate-400">
                            {t.context_card3_label}
                        </div>
                        <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                            {t.context_card3_text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}