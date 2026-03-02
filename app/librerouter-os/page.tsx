import Link from "next/link";

export const metadata = {
    title: "LibreRouterOS + LimeApp | AlterMundi",
    description: "LibreRouterOS es el SO del LibreRouter basado en LibreMesh/OpenWrt. LimeApp permite diagnosticar y gestionar la red localmente sin internet.",
};

export default function LibreRouterOsPage() {
    return (
        <div>
            {/* Hero */}
            <section className="relative py-32" style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #0a1628 100%)" }}>
                <div className="absolute inset-0 network-bg-dark opacity-40" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <div className="inline-block tag mb-6" style={{ background: "rgba(168,85,247,0.15)", color: "#a855f7", borderColor: "rgba(168,85,247,0.3)" }}>
                        LibreRouterOS · LimeApp · Operación
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        <span style={{ background: "linear-gradient(135deg, #f4a900, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            LibreRouterOS
                        </span>
                        {" "}<span className="text-white/50 text-3xl">+</span>{" "}
                        <span style={{ background: "linear-gradient(135deg, #a855f7, #00b4d8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            LimeApp
                        </span>
                    </h1>
                    <p className="text-xl text-white/60 leading-relaxed max-w-2xl mb-8">
                        El sistema operativo del LibreRouter, construido sobre LibreMesh + OpenWrt.
                        LimeApp permite gestionar toda la red localmente, incluso sin conexión a internet.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://altermundi.net/documentacion/usar-limeapp1-4/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: "#a855f7" }}>
                            Documentación LimeApp ↗
                        </a>
                        <a href="https://foro.librerouter.org/t/lanzamiento-librerouteros-1-5/337" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderColor: "rgba(168,85,247,0.3)", color: "#a855f7" }}>
                            Release LibreRouterOS 1.5 ↗
                        </a>
                    </div>
                </div>
            </section>

            {/* LibreRouterOS */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="section-title">LibreRouterOS</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-4">
                                LibreRouterOS es el sistema operativo que viene preinstalado en el LibreRouter.
                                Está construido sobre <strong>LibreMesh + OpenWrt</strong> e integra todas las herramientas
                                necesarias para operar una red comunitaria real.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                La versión 1.5 incluye mejoras en rendimiento, herramientas de acceso remoto y
                                compatibilidad ampliada con el nuevo modo WiFi APuP.
                            </p>
                            <div className="terminal">
                                <span className="terminal-comment"># Jerarquía de configuración LibreRouterOS</span>{"\n"}
                                <span className="terminal-prompt">$</span> <span style={{ color: "#f4a900" }}>defaults</span>     → valores base del sistema{"\n"}
                                <span className="terminal-prompt">$</span> <span style={{ color: "#38b000" }}>community</span>    → perfil de la red comunitaria{"\n"}
                                <span className="terminal-prompt">$</span> <span style={{ color: "#00b4d8" }}>node</span>         → configuración local del nodo{"\n"}{"\n"}
                                <span className="terminal-comment"># Aplicar configuración completa</span>{"\n"}
                                <span className="terminal-prompt">$</span> lime-config apply{"\n"}{"\n"}
                                <span className="terminal-comment"># safereboot: seguro para no dejar nodo inaccesible</span>{"\n"}
                                <span className="terminal-prompt">$</span> safereboot
                            </div>
                        </div>
                        <div>
                            <h2 className="section-title">Herramientas de operación</h2>
                            <div className="space-y-4">
                                {[
                                    { cmd: "lime-config", desc: "Genera y aplica la configuración de red. Soporta jerarquía defaults → community → node.", color: "#00b4d8" },
                                    { cmd: "safereboot", desc: "Reinicio seguro: espera confirmación antes de aplicar. Evita dejar nodos inaccesibles en campo.", color: "#38b000" },
                                    { cmd: "shared-state", desc: "Sincronización distribuida del estado entre nodos (ahora en Rust). No requiere internet.", color: "#f4a900" },
                                    { cmd: "mesh-wide update", desc: "Actualización de firmware en TODOS los nodos de la red desde un único punto.", color: "#a855f7" },
                                ].map((item) => (
                                    <div key={item.cmd} className="p-4 rounded-xl border border-gray-100 bg-gray-50">
                                        <code className="text-sm font-bold mono" style={{ color: item.color }}>{item.cmd}</code>
                                        <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LimeApp */}
            <section className="py-24" style={{ background: "#f5f5f0" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="section-title">LimeApp — Gestión local sin internet</h2>
                        <p className="section-subtitle mx-auto max-w-xl">
                            Interfaz web embebida en cada nodo para diagnosticar, configurar y actualizar la red
                            desde cualquier dispositivo conectado a ella, sin depender de conectividad externa.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: "📊", title: "Diagnóstico de red", desc: "Ver nodos vecinos, calidad de enlaces, métricas de cada radio. Todo en tiempo real.", color: "#00b4d8" },
                            { icon: "⚙️", title: "Configuración", desc: "Cambiar nombre de red, canales, potencia de emisión. Sin línea de comandos.", color: "#38b000" },
                            { icon: "🔄", title: "Actualización", desc: "Subir firmware nuevo a uno o todos los nodos. Con safereboot integrado para no dejar nodos bloqueados.", color: "#f4a900" },
                            { icon: "🗺️", title: "Mapa de nodos", desc: "Visualización del grafo de la red: nodos activos, enlaces y rutas alternativas.", color: "#a855f7" },
                            { icon: "📶", title: "Estado de radios", desc: "Ver qué clientes están conectados, potencia de señal y estado de cada interfaz WiFi.", color: "#00b4d8" },
                            { icon: "🌐", title: "Sin internet", desc: "Funciona localmente. Si la red no tiene salida a internet, LimeApp sigue disponible.", color: "#38b000" },
                        ].map((item) => (
                            <div key={item.title} className="card p-6">
                                <div className="text-3xl mb-4">{item.icon}</div>
                                <h3 className="font-bold text-base mb-2" style={{ color: item.color }}>{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a href="https://altermundi.net/documentacion/usar-limeapp1-4/un-paseo-por-el-menu-1-4/firmware/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: "#a855f7" }}>
                            Ver documentación de firmware LimeApp ↗
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
