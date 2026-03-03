export default function Problems() {
    const items = [
        "Inventarios inconsistentes entre almacenes",
        "Procesos manuales paralelos al sistema",
        "Integraciones improvisadas",
        "Reportes tardíos o poco confiables",
        "Escasa trazabilidad operativa",
        "Decisiones basadas en información fragmentada"
    ];

    return (
        <section className="py-28 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-primary">
                        Síntomas comunes en operaciones en expansión
                    </h2>
                    <p className="mt-5 text-slate-600 leading-relaxed">
                        Indicadores de que el sistema dejó de ser estructura y pasó a ser “parches”.
                    </p>
                </div>

                <div className="mt-14 grid md:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="card p-6">
                            <div className="text-xs tracking-[0.22em] text-slate-400">
                                SEÑAL {String(index + 1).padStart(2, "0")}
                            </div>
                            <p className="mt-4 text-slate-700 leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-slate-600 mt-16">
                    Estos síntomas no son tecnológicos. Son estructurales.
                </p>
            </div>
        </section>
    );
}