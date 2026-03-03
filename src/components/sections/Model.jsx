export default function Model() {
    const steps = [
        "Evaluación Estratégica",
        "Diseño Arquitectónico",
        "Implementación Modular",
        "Evolución Progresiva"
    ];

    return (
        <section id="modelo" className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-primary">
                        Modelo de Intervención
                    </h2>
                    <p className="mt-5 text-slate-600 leading-relaxed">
                        Un camino controlado: decisiones primero, ejecución después.
                    </p>
                </div>

                <div className="mt-14 grid md:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="card p-6">
                            <div className="text-xs tracking-[0.22em] text-slate-400">
                                FASE {String(index + 1).padStart(2, "0")}
                            </div>
                            <p className="mt-4 text-slate-800 font-medium">
                                {step}
                            </p>
                            <div className="mt-6 divider" />
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                Entregables claros, límites definidos, evolución sin ruptura.
                            </p>
                        </div>
                    ))}
                </div>

                <p className="text-slate-600 mt-16 text-center">
                    Trabajamos con un número limitado de organizaciones por año para garantizar profundidad técnica.
                </p>
            </div>
        </section>
    );
}