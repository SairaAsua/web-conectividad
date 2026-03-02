import Link from "next/link";
import { siteInfo } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-24">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00b4d8, #38b000)" }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="font-black text-xl">Alter<span style={{ color: "#00b4d8" }}>Mundi</span></span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            La pata tecnológica de otro mundo posible. ONG argentina de software libre y redes comunitarias.
                        </p>
                        <p className="text-gray-500 text-xs">Fundada en 2011 · Córdoba, Argentina</p>
                    </div>

                    {/* Tecnología */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Tecnología</h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: "LibreMesh", href: "/libremesh" },
                                { label: "LibreRouter (hardware)", href: "/librerouter" },
                                { label: "LibreRouterOS + LimeApp", href: "/librerouter-os" },
                                { label: "I+D 2024–2026", href: "/id" },
                            ].map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Comunidad */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Comunidad</h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: "Redes Comunitarias", href: "/redes" },
                                { label: "Formación y Acompañamiento", href: "/formacion" },
                                { label: "Incidencia Pública", href: "/incidencia" },
                                { label: "Recursos", href: "/recursos" },
                                { label: "Blog", href: "/blog" },
                            ].map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links externos */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Recursos</h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: "Foro LibreRouter", href: siteInfo.forum },
                                { label: "GitHub LibreMesh", href: siteInfo.github },
                                { label: "GitLab LibreRouter", href: siteInfo.gitlab },
                                { label: "Documentación", href: siteInfo.docs },
                                { label: "YouTube", href: siteInfo.youtube },
                                { label: "libremesh.org", href: siteInfo.libremesh },
                            ].map((l) => (
                                <li key={l.label}>
                                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {l.label} ↗
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs">© 2026 AlterMundi — Todos los derechos reservados</p>
                    <a
                        href="http://creativecommons.org/licenses/by-sa/4.0/deed.es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
                    >
                        Licencia Creative Commons BY-SA 4.0
                    </a>
                </div>
            </div>
        </footer>
    );
}
