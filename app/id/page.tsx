import Link from "next/link";

export const metadata = {
    title: "I+D | AlterMundi",
    description: "Investigación y desarrollo de AlterMundi en redes mesh: testbeds, virtual mesh, APuP, Shared State en Rust (2024-2026).",
};

export default function IDPage() {
    return (
        <div>
            {/* Hero dark terminal */}
            <section className="relative py-32" style={{ background: "var(--azul-noche)" }}>
                <div className="absolute inset-0 network-bg-dark opacity-40" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <div className="inline-block tag tag-dark mb-6">Laboratorio · 2024–2026</div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Investigación<br />y <span className="gradient-celeste">Desarrollo</span>
                    </h1>
                    <p className="text-xl text-white/60 leading-relaxed max-w-2xl mb-8">
                        Estado del arte de las redes mesh de código abierto. Proyectos financiados por ARDC
                        que están cambiando cómo se despliegan las redes comunitarias en el mundo.
                    </p>
                    <div className="terminal max-w-lg">
                        <span className="terminal-comment"># Proyecto ARDC "New Wi-Fi for mesh networks"</span>{"\n"}
                        <span className="terminal-prompt">$</span> status: <span style={{ color: "#38b000" }}>ACTIVO</span>{"\n"}
                        <span className="terminal-prompt">$</span> APuP:   <span style={{ color: "#38b000" }}>aprobado en OpenWRT ✓</span>{"\n"}
                        <span className="terminal-prompt">$</span> Shared-State: <span style={{ color: "#f4a900" }}>reescrito en Rust</span>{"\n"}
                        <span className="terminal-prompt">$</span> testbeds: <span style={{ color: "#00b4d8" }}>hidden-node + Wi-Fi 6</span>
                    </div>
                </div>
            </section>

            {/* Proyectos ARDC */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="section-title mb-4">Proyectos ARDC</h2>
                    <p className="section-subtitle max-w-2xl">
                        Amateur Radio Digital Communications (ARDC) financió dos grants importantes para mejorar el stack de redes mesh.
                    </p>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            {
                                year: "May 2022",
                                title: "LibreRouterOS: Mesh-wide vision",
                                desc: "Mejoras en gestión distribuida, LimeApp y la capacidad de aplicar cambios a toda la red desde un único punto.",
                                items: ["Gestión mesh-wide", "Mejoras en LimeApp", "Shared State (primera versión en C++20)", "Actualización firmware en todos los nodos"],
                                color: "#00b4d8",
                            },
                            {
                                year: "Nov 2024",
                                title: "The new Wi-Fi for mesh networks",
                                desc: "Investigación aplicada: nuevo modo WiFi APuP, testbeds, virtual mesh y reescritura de Shared State en Rust.",
                                items: ["Modo APuP aprobado en OpenWRT", "Testbeds: hidden node + Wi-Fi 6", "Virtual mesh (QEMU + vwifi)", "Shared State reescrito en Rust"],
                                color: "#38b000",
                            },
                        ].map((item) => (
                            <div key={item.year} className="card p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest" style={{ background: `${item.color}15`, color: item.color }}>{item.year}</span>
                                </div>
                                <h3 className="font-black text-xl text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.desc}</p>
                                <ul className="space-y-2">
                                    {item.items.map((i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                            <span className="w-4 h-4 rounded-full flex items-center justify-center text-xs" style={{ background: `${item.color}20`, color: item.color }}>✓</span>
                                            {i}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Avances técnicos detallados */}
            <section className="py-24" style={{ background: "#f5f5f0" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="section-title text-center mb-4">Avances técnicos (Reporte Oct 2025)</h2>
                    <p className="section-subtitle text-center mx-auto max-w-xl">
                        Del reporte técnico ARDC con los avances concretos del proyecto.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: "🧪",
                                title: "Testbeds",
                                color: "#00b4d8",
                                content: "Escenario &ldquo;hidden node&rdquo; real con tres nodos. Bancos con Wi-Fi 6 para probar mejoras de compatibilidad bajo condiciones controladas.",
                            },
                            {
                                icon: "🕸️",
                                title: "Virtual Mesh",
                                color: "#38b000",
                                content: "Paquete vwifi_cli_package + libremesh-virtual-mesh: simula redes mesh completas en QEMU. Permite testear cambios sin hardware físico.",
                            },
                            {
                                icon: "📶",
                                title: "AP-UP Fix (batman-adv)",
                                color: "#f4a900",
                                content: "Corrección del problema de MAC única por interfaz en batman-adv. Mejora la compatibilidad del modo APuP con hardware variado.",
                            },
                            {
                                icon: "🦀",
                                title: "Shared State → Rust",
                                color: "#a855f7",
                                content: "La columna vertebral de coordinación de LibreMesh fue reescrita en Rust: Lua → C++20 → Rust. Mayor velocidad y menor footprint en embebidos.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="card p-6">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="font-bold text-base mb-3" style={{ color: item.color }}>{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Battlemesh y presentaciones */}
            <section className="py-24" style={{ background: "var(--azul-noche)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="section-title section-title-dark">Battlemesh 2024</h2>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                Evento que reúne a los principales desarrolladores y entusiastas de redes mesh a nivel global.
                                AlterMundi presentó los avances del proyecto ARDC con gran impacto.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Las innovaciones en APuP y la gestión mesh-wide fueron reconocidas como disruptivas en el
                                campo de las redes comunitarias de código abierto. El viaje fue posible gracias al
                                <strong className="text-white"> Member Exchange Travel Fund de APC</strong>.
                            </p>
                            <a href="https://battlemesh.org/BattleMeshV16" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                Ver Battlemesh 2024 ↗
                            </a>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-white font-bold text-xl mb-6">Perspectivas futuras</h3>
                            {[
                                { icon: "🤖", title: "IA para optimización", desc: "Integración de análisis de datos e inteligencia artificial para optimizar el rendimiento de redes distribuidas." },
                                { icon: "📱", title: "Observabilidad", desc: "Nuevas herramientas de monitoreo y data collection para entender mejor el comportamiento de las redes en campo." },
                                { icon: "🌍", title: "Escalabilidad global", desc: "Soluciones que funcionen para redes de 10 nodos o de 1000, siempre con software libre." },
                            ].map((item) => (
                                <div key={item.title} className="card-dark p-5 flex gap-4 items-start">
                                    <span className="text-2xl shrink-0">{item.icon}</span>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                                        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
