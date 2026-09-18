import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function CTA() {
    const { t, language } = useContext(LanguageContext);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // TODO: Reemplaza "TU_ID_AQUI" con el ID real que te dé Formspree
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/TU_ID_AQUI";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Recolectar datos del formulario
        const formData = new FormData(e.target);
        
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });
            
            if (response.ok) {
                setIsSubmitted(true);
            } else {
                console.error("Error al enviar el formulario");
                // Si la URL es la de prueba, de igual forma mostramos éxito para que veas la animación
                if (FORMSPREE_ENDPOINT.includes("TU_ID_AQUI")) {
                    setIsSubmitted(true);
                    console.log("Formulario simulado con éxito (URL de prueba).");
                }
            }
        } catch (error) {
            console.error("Error de red", error);
            if (FORMSPREE_ENDPOINT.includes("TU_ID_AQUI")) {
                setIsSubmitted(true);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" className="py-24 bg-slate-950 text-white border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column: Copy */}
                    <div className="max-w-xl">
                        <p className="text-xs tracking-[0.22em] text-white/50">
                            {t.cta_kicker}
                        </p>

                        <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
                            {t.cta_final_title}
                        </h2>

                        <p className="mt-6 text-lg text-white/65 leading-relaxed">
                            {t.cta_text}
                        </p>

                        <div className="mt-8 flex items-center gap-4 text-sm text-white/50">
                            <svg className="w-5 h-5 text-[#0F5A59]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Sesión estratégica de 45 minutos.</span>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                        {isSubmitted ? (
                            <div className="text-center py-16">
                                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-white mb-2">{t.cta_form_success}</h3>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                                            {t.cta_form_name} *
                                        </label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name"
                                            required
                                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0F5A59] transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                                            {t.cta_form_email} *
                                        </label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email"
                                            required
                                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0F5A59] transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="block text-sm font-medium text-slate-300">
                                            {t.cta_form_company} *
                                        </label>
                                        <input 
                                            type="text" 
                                            id="company" 
                                            name="company"
                                            required
                                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0F5A59] transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="role" className="block text-sm font-medium text-slate-300">
                                            {t.cta_form_role}
                                        </label>
                                        <input 
                                            type="text" 
                                            id="role" 
                                            name="role"
                                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0F5A59] transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="industry" className="block text-sm font-medium text-slate-300">
                                        {t.cta_form_industry} *
                                    </label>
                                    <select 
                                        id="industry" 
                                        name="industry"
                                        required
                                        defaultValue=""
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0F5A59] transition-colors appearance-none"
                                    >
                                        <option value="" disabled>{t.cta_form_industry_placeholder}</option>
                                        {t.cta_form_industries?.map((ind, i) => (
                                            <option key={i} value={ind}>{ind}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="challenge" className="block text-sm font-medium text-slate-300">
                                        {t.cta_form_challenge} *
                                    </label>
                                    <select 
                                        id="challenge" 
                                        name="challenge"
                                        required
                                        defaultValue=""
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0F5A59] transition-colors appearance-none"
                                    >
                                        <option value="" disabled>{t.cta_form_challenge_placeholder}</option>
                                        {t.cta_form_challenges?.map((chal, i) => (
                                            <option key={i} value={chal}>{chal}</option>
                                        ))}
                                    </select>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`w-full btn btn-primary py-4 mt-4 flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : null}
                                    {isSubmitting ? (t.language === 'en' ? 'Sending...' : 'Enviando...') : t.cta_form_submit}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}