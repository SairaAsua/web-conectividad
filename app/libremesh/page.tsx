import Link from "next/link";

export const metadata = {
    title: "LibreMesh | AlterMundi",
    description: "LibreMesh: firmware y paquetes sobre OpenWrt para desplegar redes mesh comunitarias con soporte multi-radio y perfiles por comunidad.",
};

export default function LibreMeshPage() {
    return (
        <div>
            {/* Hero */}
            <section className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1628 0%, #001a2e 100%)" }}>
                <div className="absolute inset-0 network-bg-dark opacity-60" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #00b4d8, transparent)", transform: "translate(30%, -30%)" }} />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <div className="inline-block tag tag-dark mb-6">Software · Firmware · OpenWrt</div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        <span className="gradient-celeste">LibreMesh</span>
                    </h1>
                    <p className="text-xl text-white/60 leading-relaxed max-w-2xl mb-8">
                        Conjunto de paquetes y herramientas para desplegar redes mesh sobre <strong className="text-white/90">OpenWrt</strong>,
                        con soporte multi-radio y perfiles por comunidad. Nacido en 2013 de activistas de redes libres.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://libremesh.org/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            libremesh.org ↗
                        </a>
                        <a href="https://github.com/libremesh/lime-packages" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}>
                            GitHub ↗
                        </a>
                    </div>
                </div>
            </section>

            {/* Qué es */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="section-title">¿Qué es LibreMesh?</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-4">
                                LibreMesh (LiMe) es un firmware libre para routers WiFi basado en OpenWrt, diseñado específicamente
                                para facilitar el despliegue de <strong>redes mesh comunitarias</strong>.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                En lugar de configurar cada nodo por separado, LibreMesh permite definir un <strong>perfil de red por comunidad</strong>
                                y desplegarlo en múltiples nodos. Los nodos se conectan entre sí automáticamente (mesh) usando protocolos de enrutamiento libre.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Es mantenido por una comunidad global de desarrolladores y es el núcleo de LibreRouterOS.
                            </p>
                            <div className="terminal">
                                <span className="terminal-comment"># Instalar LibreMesh (sobre OpenWrt)</span>{"\n"}
                                <span className="terminal-prompt">$</span> opkg update{"\n"}
                                <span className="terminal-prompt">$</span> opkg install lime-system lime-proto-batadv{"\n"}
                                <span className="terminal-prompt">$</span> lime-config apply{"\n"}
                                <span className="terminal-comment"># Nodo activo en la red mesh ✓</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-bold text-xl mb-6">Componentes principales</h3>
                            {[
                                { pkg: "lime-system", desc: "Core del sistema: configuración unificada y jerarquía de defaults → community → node.", color: "#00b4d8" },
                                { pkg: "lime-proto-batadv", desc: "Protocolo de enrutamiento batman-adv para redes mesh distribuidas.", color: "#38b000" },
                                { pkg: "lime-proto-babeld", desc: "Alternativa a batman-adv: babeld para redes más grandes.", color: "#f4a900" },
                                { pkg: "lime-app (LimeApp)", desc: "Interfaz web para diagnóstico y gestión local sin internet.", color: "#a855f7" },
                                { pkg: "shared-state", desc: "Daemon de coordinación distribuida (ahora reescrito en Rust).", color: "#00b4d8" },
                                { pkg: "network-profiles", desc: "Perfiles de configuración por comunidad: cada red tiene su identidad.", color: "#38b000" },
                            ].map((item) => (
                                <div key={item.pkg} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
                                    <code className="text-xs font-bold px-2 py-1 rounded self-start shrink-0 mono" style={{ background: `${item.color}15`, color: item.color }}>
                                        {item.pkg}
                                    </code>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Cómo funciona el mesh */}
            <section className="py-24" style={{ background: "var(--azul-noche)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="section-title section-title-dark text-center mb-4">Cómo funciona una red mesh</h2>
                    <p className="section-subtitle-dark section-subtitle text-center mx-auto max-w-xl">
                        Cada nodo es a la vez cliente y repetidor. Sin un punto central que falle.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { step: "01", title: "Cada nodo es igual", desc: "No hay un 'servidor central'. Cada router corre LibreMesh y puede enrutar tráfico hacia cualquier otro nodo.", icon: "📡" },
                            { step: "02", title: "Auto-descubrimiento", desc: "Los nodos se detectan entre sí y construyen la tabla de enrutamiento automáticamente. No requiere configuración manual.", icon: "🔍" },
                            { step: "03", title: "Resiliencia", desc: "Si un nodo falla, el tráfico se redirige por otro camino. La red sigue funcionando mientras haya conectividad alternativa.", icon: "🛡️" },
                        ].map((item) => (
                            <div key={item.step} className="card-dark p-7">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#00b4d8" }}>{item.step}</span>
                                <h3 className="text-white font-bold text-lg mt-2 mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Historia y links */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="section-title">Historia del proyecto</h2>
                            <div className="space-y-4 text-gray-600">
                                <p><strong>2013:</strong> LibreMesh nace como proyecto global de activistas que buscaban una solución común para redes libres.</p>
                                <p><strong>2017:</strong> Reconocimiento con Shuttleworth Flash Grant. Crecimiento de la comunidad dev.</p>
                                <p><strong>2022:</strong> Grant ARDC &ldquo;LibreRouterOS: Mesh-wide vision&rdquo;. Mejoras en LimeApp y gestión distribuida.</p>
                                <p><strong>2024:</strong> Modo APuP (Access Point Micro Peering) aprobado en OpenWRT. Cambia el paradigma de compatibilidad.</p>
                                <p><strong>2025:</strong> Shared State reescrito en Rust. Testbeds con Wi-Fi 6. Virtual mesh en QEMU.</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="section-title">Recursos</h2>
                            <ul className="space-y-3">
                                {[
                                    { label: "libremesh.org — sitio oficial", href: "https://libremesh.org/" },
                                    { label: "lime-packages — GitHub", href: "https://github.com/libremesh/lime-packages" },
                                    { label: "Documentación de paquetes", href: "https://libremesh.org/packages/" },
                                    { label: "Guía de desarrollo", href: "https://libremesh.org/es_development.html" },
                                    { label: "Foro LibreRouter (soporte)", href: "https://foro.librerouter.org/" },
                                ].map((l) => (
                                    <li key={l.label}>
                                        <a href={l.href} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group">
                                            <span className="text-gray-700 font-medium text-sm">{l.label}</span>
                                            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">↗</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <Link href="/librerouter" className="btn-green">Ver el hardware: LibreRouter →</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
