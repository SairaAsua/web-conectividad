import Link from "next/link";
import { videos } from "@/lib/data";

export const metadata = {
    title: "Videos | AlterMundi",
    description: "Documentales, conversatorios y charlas técnicas sobre redes comunitarias, LibreRouter y conectividad comunitaria.",
};

const videosByCategory: Record<string, typeof videos> = {};
for (const v of videos) {
    if (!videosByCategory[v.category]) videosByCategory[v.category] = [];
    videosByCategory[v.category].push(v);
}

// Semillero 2022 playlist items (manually curated from the post)
const semilleroVideos = [
    { title: "Introducción: ¿qué son las redes comunitarias?", ytId: "placeholder-1", desc: "Marco teórico del Semillero 2022" },
    { title: "Soberanía tecnológica y gobernanza comunitaria", ytId: "placeholder-2", desc: "Organización y toma de decisiones" },
    { title: "LibreRouter: instalación y primeros pasos", ytId: "placeholder-3", desc: "Taller técnico de configuración" },
    { title: "Financiamiento: Programa Roberto Arias (ENACOM)", ytId: "placeholder-4", desc: "Cómo postularse y qué cubre" },
    { title: "Testimonios: redes de 9 provincias", ytId: "placeholder-5", desc: "Voces de las 16 comunidades participantes" },
    { title: "LimeApp: diagnóstico y administración local", ytId: "placeholder-6", desc: "Cómo gestionar tu red sin internet" },
];

export default function VideosPage() {
    return (
        <div>
            {/* Hero */}
            <section className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2a1e 100%)" }}>
                <div className="absolute inset-0 network-bg-dark opacity-50" />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        <span className="gradient-celeste">Comunidades</span><br />haciendo Internet
                    </h1>
                    
                </div>
            </section>

            {/* Serie documental principal */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        
                        <h2 className="section-title">Comunidades haciendo Internet</h2>
                        
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Cap 1 — QuintanaLibre */}
                        <div className="card overflow-hidden group">
                            <div className="relative">
                                <img
                                    src="https://img.youtube.com/vi/DcOAePVwafs/maxresdefault.jpg"
                                    alt="Documental QuintanaLibre"
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                            <polygon points="5,3 19,12 5,21" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: "#00b4d8" }}>
                                        Capítulo 1 · 2020
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-black text-xl mb-2" style={{ color: "#00b4d8" }}>
                                    Experiencia QuintanaLibre
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    La historia de cómo <strong>más de 70 familias</strong> en José de la Quintana, Córdoba,
                                    construyeron y sostienen su propia red comunitaria con un enlace de <strong>15 km</strong>
                                    a una localidad sin señal telefónica.
                                </p>
                                <a
                                    href="https://www.youtube.com/watch?v=DcOAePVwafs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary text-sm"
                                >
                                    ▶ Ver documental
                                </a>
                            </div>
                        </div>

                        {/* Cap 2 — Nuevas Redes */}
                        <div className="card overflow-hidden group">
                            <div className="relative">
                                <img
                                    src="https://img.youtube.com/vi/fnHJfDJwEiY/maxresdefault.jpg"
                                    alt="Documental Nuevas Redes"
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                            <polygon points="5,3 19,12 5,21" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: "#38b000" }}>
                                        Capítulo 2 · 2021
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-black text-xl mb-2" style={{ color: "#38b000" }}>
                                    Nuevas Redes
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Testimonios de <strong>GranjaLibre, MolinosComunitaria, MonteNet, LibreGrandeNet y ElValleReinicia</strong>.
                                    Cinco redes, cinco historias, una sola tecnología libre.
                                </p>
                                <a
                                    href="https://www.youtube.com/watch?v=fnHJfDJwEiY"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-green text-sm"
                                >
                                    ▶ Ver documental
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Semillero 2022 */}
            <section className="py-24" style={{ background: "#f5f5f0" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        
                        <h2 className="section-title">Semillero de Redes Comunitarias 2022</h2>
                        
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {semilleroVideos.map((v, i) => (
                            <div key={i} className="card p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0"
                                        style={{ background: "linear-gradient(135deg, #00b4d8, #38b000)" }}>
                                        {i + 1}
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{v.desc}</span>
                                </div>
                                <h3 className="font-bold text-sm text-gray-800 leading-snug">{v.title}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <a
                            href="https://altermundi.net/altermundi/semillero-2022-videos/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Ver toda la playlist del Semillero 2022 ↗
                        </a>
                    </div>
                </div>
            </section>

            {/* Conversatorios y charlas */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        
                        <h2 className="section-title">Más videos</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "LibreRouter, the router of community networks",
                                desc: "Charla técnica 2019: el diseño del LibreRouter, motivaciones y aprendizajes del proceso. Presentada en Freifunk.",
                                ytId: "XHXNkiTJFME",
                                year: "2019",
                                color: "#a855f7",
                                label: "Charla técnica · Freifunk",
                            },
                            {
                                title: "Redes de Internet Comunitarias para organizaciones rurales",
                                desc: "Conversatorio 2021: cómo las organizaciones rurales pueden crear y sostener sus propias redes.",
                                ytId: "6KD_f7DIzFE",
                                year: "2021",
                                color: "#f4a900",
                                label: "Conversatorio · 2021",
                            },
                        ].map((v) => (
                            <a
                                key={v.ytId}
                                href={`https://www.youtube.com/watch?v=${v.ytId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card group overflow-hidden flex flex-col md:flex-row"
                            >
                                <div className="relative shrink-0 md:w-48">
                                    <img
                                        src={`https://img.youtube.com/vi/${v.ytId}/hqdefault.jpg`}
                                        alt={v.title}
                                        className="w-full h-36 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                            <polygon points="5,3 19,12 5,21" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: v.color }}>{v.label}</span>
                                    <h3 className="font-bold text-base text-gray-800 leading-snug mb-2">{v.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA YouTube */}
            <section className="py-20" style={{ background: "#0a1628" }}>
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">Más en YouTube</h2>
                    
                    <a
                        href="https://www.youtube.com/c/AlterMundiNet/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                        </svg>
                        Canal de YouTube ↗
                    </a>
                </div>
            </section>
        </div>
    );
}
