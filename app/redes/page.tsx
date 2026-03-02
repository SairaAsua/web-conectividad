import Link from "next/link";
import { redesAcompanadas } from "@/lib/data";

export const metadata = {
    title: "Redes Comunitarias | AlterMundi",
    description: "Qué son las redes comunitarias libres, sus principios, cómo se gobiernan y por qué no son 'internet gratis'. Más de 20 redes en Argentina.",
};

const extraRedes = [
    { name: "MolinosComunitaria", loc: "Córdoba", desc: "Protagonista de 'Comunidades Haciendo Internet – Nuevas Redes' (2021).", color: "#f4a900", icon: "⚙️" },
    { name: "ElValleReinicia", loc: "Argentina", desc: "Red comunitaria documentada en el documental 'Nuevas Redes' (2021).", color: "#a855f7", icon: "🏞️" },
    { name: "LibreGrandeNet", loc: "Córdoba", desc: "Red con LibreMesh. Parte de las 10 nuevas redes visibilizadas en 2020.", color: "#00b4d8", icon: "🌐" },
    { name: "Río Los Sauces", loc: "Córdoba", desc: "Red comunitaria autogestionada con tecnología libre.", color: "#38b000", icon: "🌊" },
    { name: "MonteNet", loc: "Buenos Aires", desc: "Red comunitaria documentada en 'Nuevas Redes' (2021).", color: "#f4a900", icon: "🌲" },
    { name: "Barrio Yapeyú / Isla Maciel", loc: "Córdoba / CABA", desc: "Talleres y despliegues para La Poderosa (2021). Urban mesh en contexto popular.", color: "#a855f7", icon: "🏙️" },
];

export default function RedesPage() {
    return (
        <div>
            {/* Hero */}
            <section className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, #0e2810 0%, #0a1628 100%)" }}>
                <div className="absolute inset-0 network-bg-dark opacity-50" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        
                        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                            Qué son las<br /><span className="gradient-verde">Redes Comunitarias</span>
                        </h1>
                        
                    </div>
                    {/* Foto real del hero */}
                    <div className="hidden md:block">
                        <img
                            src="/images/hero/hero-mapa-red-01.svg.jpg"
                            alt="Diagrama de red mesh comunitaria"
                            className="rounded-2xl w-full h-72 object-cover opacity-80"
                            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                        />
                    </div>
                </div>
            </section>

            {/* Definición */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="section-title">Definición</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                Una red comunitaria es infraestructura de telecomunicaciones <strong>propiedad de la comunidad</strong>,
                                gestionada colectivamente y diseñada para poder ser <em>aprendida, replicada y sostenida</em> por quienes la usan.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                A diferencia de los servicios comerciales, la red no es un &ldquo;servicio barato&rdquo;: es
                                <strong> soberanía tecnológica aplicada</strong>. Las personas que la construyen también la reparan,
                                la administran y toman las decisiones sobre ella.
                            </p>
                            <div className="terminal">
                                <span className="terminal-comment"># Principios alineados (AlterMundi)</span>{"\n"}
                                <span className="terminal-prompt">$</span> propiedad_colectiva     → la infraestructura pertenece a la comunidad{"\n"}
                                <span className="terminal-prompt">$</span> gestion_social         → decisiones en asamblea{"\n"}
                                <span className="terminal-prompt">$</span> diseno_accesible       → sin conocimiento técnico previo{"\n"}
                                <span className="terminal-prompt">$</span> participacion_abierta  → cualquiera puede aprender y contribuir
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    icon: "✅", label: "ES una red comunitaria", color: "#38b000",
                                    items: ["Propiedad colectiva", "Gobierno democrático", "Diseñada para aprenderse", "Sin fin de lucro", "Autonomía técnica local"],
                                },
                                {
                                    icon: "❌", label: "NO es una red comunitaria", color: "#ef4444",
                                    items: ["Un servicio de ISP &ldquo;barato&rdquo;", "Una red donada sin transferencia", "Dependiente de un solo técnico externo", "Sin participación de la comunidad"],
                                },
                            ].map((item) => (
                                <div key={item.label} className="card p-6" style={{ borderLeft: `4px solid ${item.color}` }}>
                                    <h3 className="font-bold text-base mb-3" style={{ color: item.color }}>{item.icon} {item.label}</h3>
                                    <ul className="space-y-1.5">
                                        {item.items.map((i) => (
                                            <li key={i} className="text-gray-600 text-sm flex gap-2">
                                                <span style={{ color: item.color }}>›</span>
                                                <span dangerouslySetInnerHTML={{ __html: i }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Casos reales — redes emblemáticas */}
            <section className="py-24" style={{ background: "#f5f5f0" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="section-title text-center mb-4">Redes emblemáticas</h2>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {redesAcompanadas.map((item) => (
                            <div key={item.name} className="field-card" style={{ borderLeftColor: item.color }}>
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="font-black text-lg mb-1" style={{ color: item.color }}>{item.name}</h3>
                                <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-widest">{item.loc}</p>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                                {(item.video || item.link) && (
                                    <a href={item.video || item.link} target="_blank" rel="noopener noreferrer"
                                        className="text-xs font-bold" style={{ color: item.color }}>
                                        {item.video ? "▶ Ver documental ↗" : "→ Ver más ↗"}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Más redes */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="section-title text-center mb-4">Más redes acompañadas</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {extraRedes.map((red) => (
                            <div key={red.name} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <span className="text-2xl shrink-0">{red.icon}</span>
                                <div>
                                    <h3 className="font-bold text-sm mb-0.5" style={{ color: red.color }}>{red.name}</h3>
                                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-widest font-semibold">{red.loc}</p>
                                    <p className="text-gray-600 text-xs leading-relaxed">{red.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <p className="text-gray-400 text-sm">
                            Y muchas más: LibreGrandeNet, Gallinato Libre, Lesser Libre, Comunidad Río Salado, Red Perilagos, Internet Comunitario Rinconada, RedVuelta...
                        </p>
                        <a href="https://altermundi.net/2020/09/29/nuevas-redes/" target="_blank" rel="noopener noreferrer"
                            className="text-sm font-bold mt-2 inline-block" style={{ color: "#00b4d8" }}>
                            Ver nota completa de nuevas redes (2020) ↗
                        </a>
                    </div>
                </div>
            </section>

            {/* CARC */}
            <section className="py-24" style={{ background: "#f5f5f0" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            
                            <h2 className="section-title">Cumbre Argentina de Redes Comunitarias</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                La CARC es un espacio de encuentro, formación y articulación para redes comunitarias en Argentina.
                                Debates técnicos y políticos, agenda colectiva para &ldquo;internet desde los territorios&rdquo;.
                            </p>
                            <div className="field-card" style={{ borderLeftColor: "#38b000" }}>
                                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#38b000" }}>🏕️ 1ª CARC — 2019</p>
                                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                                    Piloto mesh con 3 LibreRouters, taller de fibra óptica, estreno del documental QuintanaLibre,
                                    declaración conjunta de redes comunitarias argentinas.
                                </p>
                                <a href="https://altermundi.net/2020/01/18/cumbre-argentina-de-redes-comunitarias-internet-desde-los-territorios/" target="_blank" rel="noopener noreferrer"
                                    className="text-sm font-bold" style={{ color: "#38b000" }}>
                                    Ver más ↗
                                </a>
                            </div>
                        </div>
                        <div className="card p-8" style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)" }}>
                            <h3 className="font-bold text-xl mb-6" style={{ color: "#38b000" }}>¿Qué pasa en la CARC?</h3>
                            <ul className="space-y-4">
                                {[
                                    "🗺️ Mapeo y encuentro de redes de todo el país",
                                    "🔧 Talleres prácticos: WiFi, fibra óptica, mesh, planificación",
                                    "📜 Construcción de declaración y agenda política colectiva",
                                    "🎥 Presentación de documentales y experiencias",
                                    "🤝 Articulación con Rhizomática, LocNet, ORCAL y otras redes regionales",
                                ].map((item) => (
                                    <li key={item} className="text-gray-700 text-sm flex gap-3">
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cómo empezar */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="section-title mb-4">¿Cómo arranca una red comunitaria?</h2>
                    
                    <div className="grid md:grid-cols-4 gap-4 mb-12">
                        {[
                            { n: "01", label: "Grupo de trabajo colectivo", desc: "Mínimo 4–5 personas comprometidas a largo plazo." },
                            { n: "02", label: "Mapear el territorio", desc: "Qué casas, qué distancias, qué obstáculos." },
                            { n: "03", label: "Aprender el stack", desc: "LibreMesh + LibreRouter: diseñado para no especialistas." },
                            { n: "04", label: "Acompañamiento AlterMundi", desc: "Formación, soporte técnico y comunidad global." },
                        ].map((step) => (
                            <div key={step.n} className="card p-5 text-left">
                                <span className="text-3xl font-black block mb-3" style={{ color: "#00b4d8" }}>{step.n}</span>
                                <h3 className="font-bold text-sm mb-2">{step.label}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/formacion" className="btn-primary">Ver Formación y Acompañamiento</Link>
                        <Link href="/librerouter" className="btn-secondary">Conocer el LibreRouter</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
