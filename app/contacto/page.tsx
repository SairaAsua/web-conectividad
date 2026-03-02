"use client";
import { useState } from "react";
import { siteInfo } from "@/lib/data";

export default function ContactoPage() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(siteInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            {/* Header */}
            <div className="mb-16 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00c896]/10 border border-[#00c896]/20 text-[#00c896] text-xs font-medium mb-6">
                    📬 Contacto
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Ponete en contacto</h1>
                <p className="text-[#8ea8c3] text-lg leading-relaxed">
                    ¿Tenés una comunidad o proyecto de red comunitaria? ¿Querés saber más sobre LibreRouter?
                    Escribinos y te respondemos.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Contact cards */}
                <div className="space-y-6">
                    {/* Email general */}
                    <div className="card p-6 group">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#00c896]/10 border border-[#00c896]/20 flex items-center justify-center text-[#00c896] shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-bold mb-1">Email general</h3>
                                <p className="text-[#8ea8c3] text-sm mb-3">Para consultas generales, formación y acompañamiento.</p>
                                <div className="flex items-center gap-3">
                                    <a href={`mailto:${siteInfo.email}`} className="text-[#00c896] font-medium hover:underline">
                                        {siteInfo.email}
                                    </a>
                                    <button
                                        onClick={handleCopy}
                                        className="text-[#8ea8c3] hover:text-white transition-colors text-xs"
                                        title="Copiar"
                                    >
                                        {copied ? "✓ Copiado" : "Copiar"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LibreRouter */}
                    <div className="card p-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#4fc3f7]/10 border border-[#4fc3f7]/20 flex items-center justify-center text-[#4fc3f7] shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-bold mb-1">LibreRouter</h3>
                                <p className="text-[#8ea8c3] text-sm mb-3">Cotizaciones y consultas sobre el router para redes comunitarias.</p>
                                <a href="mailto:librerouter@altermundi.net" className="text-[#4fc3f7] font-medium hover:underline">
                                    {siteInfo.emailLibreRouter}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Talleres */}
                    <div className="card p-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 border border-[#a78bfa]/20 flex items-center justify-center text-[#a78bfa] shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.58a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-bold mb-1">Inscripción a talleres</h3>
                                <p className="text-[#8ea8c3] text-sm mb-3">Para anotarte en talleres presenciales de redes WiFi y fibra óptica.</p>
                                <a href={`https://wa.me/54${siteInfo.whatsapp.replace(/-/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-[#a78bfa] font-medium hover:underline">
                                    WhatsApp: {siteInfo.whatsapp}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* YouTube */}
                    <div className="card p-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#fb923c]/10 border border-[#fb923c]/20 flex items-center justify-center text-[#fb923c] shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-bold mb-1">YouTube</h3>
                                <p className="text-[#8ea8c3] text-sm mb-3">Nuestra serie documental y videos formativos.</p>
                                <a href={siteInfo.youtube} target="_blank" rel="noopener noreferrer" className="text-[#fb923c] font-medium hover:underline">
                                    Canal AlterMundiNet ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resources & note */}
                <div className="space-y-6">
                    <div className="card p-8 bg-gradient-to-br from-[#00c896]/5 to-transparent border-[#00c896]/20">
                        <h3 className="text-white font-bold text-xl mb-4">Antes de escribirnos 👋</h3>
                        <div className="space-y-3 text-[#8ea8c3] text-sm leading-relaxed">
                            <p>
                                AlterMundi acompaña <strong className="text-white">proyectos colectivos</strong>.
                                Antes de consultarnos por formación y acompañamiento, te pedimos que:
                            </p>
                            <ul className="space-y-2">
                                {[
                                    "Formes un grupo de trabajo comprometido a largo plazo",
                                    "Tengas identificada la zona/comunidad donde sería la red",
                                    "Hayas revisado el material disponible en docs.altermundi.net",
                                ].map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-[#00c896] shrink-0">›</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="card p-8">
                        <h3 className="text-white font-bold text-xl mb-6">Recursos útiles</h3>
                        <ul className="space-y-4">
                            {[
                                { label: "Documentación técnica", href: "http://docs.altermundi.net/", icon: "📄" },
                                { label: "Foro LibreRouter", href: "https://foro.librerouter.org/", icon: "💬" },
                                { label: "Programa Roberto Arias (ENACOM)", href: "https://enacom.gob.ar/redes-comunitarias-roberto-arias_p5049", icon: "🏛️" },
                                { label: "Videos formativos (YouTube)", href: siteInfo.youtube, icon: "🎥" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-[#8ea8c3] hover:text-white transition-colors group"
                                    >
                                        <span>{item.icon}</span>
                                        <span className="text-sm group-hover:text-[#00c896] transition-colors">{item.label} ↗</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card p-6 text-center">
                        <p className="text-[#8ea8c3] text-sm mb-2">Licencia del contenido</p>
                        <a
                            href="http://creativecommons.org/licenses/by-sa/4.0/deed.es"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#00c896] text-sm font-medium hover:underline"
                        >
                            Creative Commons BY-SA 4.0 Internacional
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
