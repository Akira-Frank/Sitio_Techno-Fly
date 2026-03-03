import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Hero() {
    const { t } = useContext(LanguageContext);

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
            {/* subtle technical grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:64px_64px]" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
                <div className="max-w-3xl">
                    <p className="text-xs tracking-[0.22em] text-white/60">
                        ARQUITECTURA • CONTROL • EVOLUCIÓN
                    </p>

                    <h1 className="mt-5 text-5xl md:text-6xl font-light leading-[1.05] tracking-tight">
                        Arquitectura Digital
                        <br />
                        <span className="text-blue-300 font-medium">
                            para Operaciones Logísticas Críticas
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
                        {t.hero_subtitle}
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-3">
                        <button className="btn btn-primary">
                            {t.hero_cta_primary}
                        </button>

                        <button className="btn btn-ghost">
                            {t.hero_cta_secondary}
                        </button>
                    </div>

                    <div className="mt-10 divider border-white/10" />
                    <p className="mt-6 text-xs text-white/55 max-w-2xl">
                        Intervenciones de alta precisión: menos “features”, más estructura.
                    </p>
                </div>
            </div>
        </section>
    );
}