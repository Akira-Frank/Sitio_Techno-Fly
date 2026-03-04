export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200/70">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between">
                    <span className="text-xs text-slate-500">
                        © 2026 Techno-Fly
                    </span>

                    <span className="text-xs tracking-[0.18em] text-slate-400">
                        ARQUITECTURA DIGITAL ESTRATÉGICA
                    </span>
                </div>

                <div className="mt-8 divider" />

                <p className="mt-6 text-[11px] leading-relaxed text-slate-500 max-w-3xl">
                    Boutique técnica enfocada en arquitectura digital para operaciones críticas.
                    Diseñamos estructura, control y evolución sostenible.
                </p>
            </div>
        </footer>
    );
}