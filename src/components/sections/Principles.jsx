export default function Principles() {
    const items = [
        "Separación entre operación y analítica",
        "Interoperabilidad estructurada",
        "Escalabilidad progresiva",
        "Visibilidad en tiempo real",
        "Gobierno de datos",
        "Trazabilidad integral"
    ];

    return (
        <section id="principios" className="relative py-28 bg-slate-950 text-white overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.10),transparent_40%)]" />

            <div className="relative max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-white">
                        Principios de Arquitectura
                    </h2>
                    <p className="mt-5 text-white/65 leading-relaxed">
                        Reglas de diseño para operar con precisión bajo presión.
                    </p>
                </div>

                <div className="mt-14 grid md:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6">
                            <div className="text-xs tracking-[0.22em] text-white/45">
                                PRINCIPIO {String(index + 1).padStart(2, "0")}
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