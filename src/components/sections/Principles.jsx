import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Principles() {
    const { t } = useContext(LanguageContext);

    return (
        <section
            id="principios"
            className="relative py-28 bg-slate-950 text-white overflow-hidden"
        >
            <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.10),transparent_40%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />

            <div className="relative max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs tracking-[0.22em] text-white/50">
                        {t.principles_kicker}
                    </p>

                    <h2 className="mt-5 text-3xl font-semibold text-white">
                        {t.principles_title}
                    </h2>

                    <p className="mt-5 text-white/65 leading-relaxed">
                        {t.principles_subtitle}
                    </p>
                </div>

                <div className="mt-14 grid md:grid-cols-3 gap-6">
                    {t.principles_items.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-white/10 bg-white/5 p-6"
                        >
                            <div className="text-xs tracking-[0.22em] text-white/45">
                                {t.principles_item_prefix} {String(index + 1).padStart(2, "0")}
                            </div>
                            <p className="mt-4 text-white/85 leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}