import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer.jsx";
import Hero from "../components/sections/Hero";
import Context from "../components/sections/Context";
import Problems from "../components/sections/Problems";
import Approach from "../components/sections/Approach";
import Model from "../components/sections/Model";
import Principles from "../components/sections/Principles";
import CTA from "../components/sections/CTA";

export default function Landing() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Navbar />

            {/* Navbar is fixed (h-16), so we offset the page content */}
            <main className="pt-16">
                <Hero />
                <Context />
                <Problems />
                <Approach />
                <Model />
                <Principles />
                <CTA />
            </main>

            <Footer />
        </div>
    );
}