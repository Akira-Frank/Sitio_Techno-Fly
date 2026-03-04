import sloganTechnoFly from "../../assets/slogan-technofly.png";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200/70">
            <div className="max-w-6xl mx-auto px-6 py-10">

                {/* 1. SECCIÓN SUPERIOR: Alineación vertical con "items-center" */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
                    <img
                        src={sloganTechnoFly}
                        alt="Moviendo el presente, desarrollando el futuro"
                        // Redujimos el tamaño a h-10 (40px) y h-12 (48px) para que sea sutil
                        className="h-10 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition"
                    />

                    <span className="text-xs tracking-[0.18em] text-slate-400 text-center md:text-right">
                        ARQUITECTURA DIGITAL ESTRATÉGICA
                    </span>
                </div>

                {/* Línea divisoria principal */}
                <div className="mt-8 border-t border-slate-100 w-full" />

                {/* 2. SECCIÓN INFERIOR: Toque turquesa y texto centrado */}
                <div className="mt-8 flex flex-col items-center justify-center">
                    {/* Centramos el acento turquesa arriba del texto */}
                    <div className="h-px w-16 bg-techno-dark opacity-40 mb-5"></div>

                    <p className="text-[11px] leading-relaxed text-slate-500 max-w-2xl text-center">
                        Boutique técnica enfocada en arquitectura digital para operaciones críticas. <br className="hidden md:block" />
                        Diseñamos estructura, control y evolución sostenible.
                    </p>
                </div>

            </div>
        </footer>
    );
}