import Link from "next/link";

export const metadata = {
    title: "LibreRouter | AlterMundi",
    description: "LibreRouter: router open hardware multi-radio para redes comunitarias. Diseñado desde el territorio para desplegar, administrar y sostener infraestructura propia.",
};

const specs = [
    { cat: "Configuración", val: "Triple-radio 2×2 (nodo mesh 802.11n)" },
    { cat: "CPU / SoC", val: "Atheros QCA9558" },
    { cat: "RAM", val: "128 MB DDR2" },
    { cat: "Flash", val: "16 MB NOR" },
    { cat: "Radios", val: "1× 2.4 GHz 802.11b/g/n (QCA9558) + 2× 5 GHz 802.11a/n (AR9582 mPCI)" },
    { cat: "Potencia máx.", val: "2.4 GHz: 19 dBm ±2 / 5 GHz: 27 dBm ±2 (según regulación del país)" },
    { cat: "Antenas", val: "2.4 GHz MIMO 2×2 integrada (14 dBi) + 2× antenas 5 GHz MIMO 2×2 externas (15 dBi, intemperie)" },
    { cat: "Conectores RF", val: "4× RP-SMA externos (5 GHz) + conectores UFL internos (2.4 GHz)" },
    { cat: "Ethernet", val: "2× Gigabit RJ-45" },
    { cat: "Energía", val: "PoE pasivo 12–32 V + jack DC 9–32 V + PoE pass-through" },
    { cat: "Consumo", val: "Idle 4.5 W / típico 5–8 W / máximo 14 W / máx. + passthrough 30 W" },
    { cat: "Protección", val: "8 descargadores de gas (Ethernet) + ESD 4 kV/8 kV + tornillo de grounding" },
    { cat: "Ambiente", val: "Operación 0–40 °C / almac. −40 a 70 °C / humedad 5–90%" },
    { cat: "Dimensiones", val: "300 × 205 × 76 mm · 0.85 kg (1.8 kg kit total)" },
    { cat: "Extras", val: "Watchdog ATTiny13, 8 LEDs de estado, USB 2.0, consola serial interna" },
];

const videos = [
    { label: "Conectar un equipo LibreRouter", url: "https://youtu.be/vvO6rWXxEZc", cat: "Primeros pasos" },
    { label: "Opciones de alimentación / PoE", url: "https://youtu.be/8RehCpZ2KUo", cat: "Primeros pasos" },
    { label: "Semillero 2022 – gestión con LimeApp", url: "https://www.youtube.com/watch?v=HjYbv8qkAcs", cat: "LimeApp" },
    { label: "Semillero 2022 – configuración colectiva", url: "https://www.youtube.com/watch?v=dB0ITbiludA", cat: "LimeApp" },
    { label: "Semillero 2022 – montar un nodo", url: "https://www.youtube.com/watch?v=Cw0cm1DLgvA", cat: "Montaje" },
    { label: "Semillero 2022 – ejemplo práctico", url: "https://www.youtube.com/watch?v=c-VX6YRBVLY", cat: "Montaje" },
];

export default function LibreRouterPage() {
    return (
        <div>
            {/* ── HERO ── */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
                {/* Foto real de fondo */}
                <img
                    src="/images/proyectos/librerouter/C0110T01.JPG"
                    alt="Nodo LibreRouter instalado en exterior en territorio"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ zIndex: 0 }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(135deg, rgba(13,32,16,0.92) 0%, rgba(10,22,40,0.85) 100%)",
                        zIndex: 1,
                    }}
                />
                <div className="absolute inset-0 network-bg-dark opacity-30" style={{ zIndex: 2 }} />

                <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
                    <div className="inline-block tag mb-6" style={{ background: "rgba(56,176,0,0.15)", color: "#38b000", borderColor: "rgba(56,176,0,0.3)" }}>
                        Open Hardware · Multi-radio · Sur Global
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                        <span className="gradient-verde">LibreRouter</span>
                    </h1>
                    <p className="text-xl text-white/70 leading-relaxed max-w-2xl mb-4">
                        Router inalámbrico multi-radio de <strong className="text-white">hardware abierto</strong>, diseñado
                        específicamente para redes comunitarias: libres, descentralizadas y gestionadas por quienes las construyen.
                    </p>
                    <p className="text-white/50 leading-relaxed max-w-2xl mb-10 text-base">
                        No es &ldquo;solo un router&rdquo;: es hardware + software + documentación + soporte, para que una comunidad
                        pueda desplegar, administrar, expandir y sostener su propia infraestructura de comunicación.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://librerouter.org/" target="_blank" rel="noopener noreferrer" className="btn-green">
                            librerouter.org ↗
                        </a>
                        <a href="https://foro.librerouter.org/" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderColor: "rgba(56,176,0,0.3)", color: "#38b000" }}>
                            Foro de soporte ↗
                        </a>
                        <a href="mailto:librerouter@altermundi.net" className="btn-yellow">
                            Cotizar
                        </a>
                    </div>
                </div>
            </section>

            {/* ── POR QUÉ EXISTE ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block tag tag-green mb-6">El origen</div>
                            <h2 className="section-title">¿Por qué un router especial?</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-4">
                                Durante años, las redes comunitarias del mundo se sostuvieron <em>adaptando routers hogareños
                                comerciales</em>. Esa estrategia funcionó… hasta que quedó claro que{" "}
                                <strong>dependíamos de decisiones industriales y regulatorias ajenas</strong>: bloqueos a
                                reemplazar el software de fábrica, discontinuidad de componentes, hardware no pensado para
                                intemperie ni distancias largas.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                La respuesta fue colectiva: <strong>diseñar un equipo propio, desde el territorio</strong>,
                                con software libre, documentación pública y herramientas para que cualquier comunidad pueda
                                desplegar su pedacito de Internet. LibreRouter nació en alianza con la{" "}
                                <em>Community Networks Special Interest Group</em> de Internet Society y el apoyo del programa
                                <em> Beyond the Net</em>, con articulaciones con APC y el ecosistema global de redes comunitarias.
                            </p>

                            {/* Cita destacada */}
                            <blockquote className="border-l-4 pl-4 mb-8 italic text-gray-600 text-sm"
                                style={{ borderColor: "#38b000" }}>
                                &ldquo;Open-source hardware WiFi router designed for the specific needs of community networks.&rdquo;
                                <span className="block text-gray-400 mt-1 not-italic text-xs">— Internet Society, 2018</span>
                            </blockquote>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "3 radios WiFi", icon: "📶", desc: "2× 5 GHz (mesh) + 1× 2.4 GHz (clientes)" },
                                    { label: "Open hardware", icon: "🔓", desc: "Diseño abierto y documentado" },
                                    { label: "Outdoor", icon: "🌦️", desc: "Caja robusta para intemperie real" },
                                    { label: "PoE + pass-through", icon: "⚡", desc: "Un nodo puede alimentar al siguiente" },
                                ].map((item) => (
                                    <div key={item.label} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                        <span className="text-2xl block mb-1">{item.icon}</span>
                                        <p className="font-bold text-sm text-gray-800">{item.label}</p>
                                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Foto comunidad montando */}
                        <div className="relative">
                            <img
                                src="/images/proyectos/librerouter/DSC_2208.JPG"
                                alt="Jornada comunitaria de montaje de un nodo LibreRouter en altura"
                                className="w-full rounded-2xl object-cover h-[28rem]"
                                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-3">
                                <p className="text-white text-xs font-semibold">🏕️ Jornada comunitaria de montaje en territorio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CÓMO FUNCIONA (3 radios) ── */}
            <section className="py-24" style={{ background: "#f5f5f0" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="section-title">¿Cómo funciona la malla?</h2>
                        <p className="section-subtitle mx-auto max-w-2xl">
                            LibreRouter está pensado como <strong>nodo de malla (mesh)</strong>: crece nodo a nodo, sin depender
                            de una central única.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "📡",
                                color: "#00b4d8",
                                title: "2× 5 GHz → Malla",
                                desc: "Dos radios de 5 GHz con antenas sectoriales se enlazan automáticamente con otros nodos LibreRouter dentro de alcance, formando la malla entre nodos.",
                                detail: "MIMO 2×2 · 15 dBi · intemperie",
                            },
                            {
                                icon: "📱",
                                color: "#38b000",
                                title: "1× 2.4 GHz → Clientes",
                                desc: "El radio de 2.4 GHz crea el punto de acceso WiFi local para que celulares y computadoras de la comunidad se conecten a la red.",
                                detail: "802.11b/g/n · antena integrada · 14 dBi",
                            },
                            {
                                icon: "🔄",
                                color: "#f4a900",
                                title: "Rutas alternativas",
                                desc: "Si un nodo falla o se apaga, el resto busca automáticamente otro camino para que los datos lleguen a destino. Sin punto único de falla.",
                                detail: "batman-adv / babeld · autoconfigurable",
                            },
                        ].map((item) => (
                            <div key={item.title} className="card p-7 text-center">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl"
                                    style={{ background: `${item.color}15`, border: `2px solid ${item.color}30` }}>
                                    {item.icon}
                                </div>
                                <h3 className="font-black text-lg mb-3" style={{ color: item.color }}>{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                                <span className="text-xs font-bold px-3 py-1 rounded-full"
                                    style={{ background: `${item.color}12`, color: item.color }}>
                                    {item.detail}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── KIT COMPLETO ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Foto kit */}
                        <div className="relative">
                            <img
                                src="/images/proyectos/librerouter/proyecto-librerouter-01.jpeg"
                                alt="Kit LibreRouter: dispositivo, antenas, cables coaxiales y soportes"
                                className="w-full rounded-2xl object-cover h-80"
                                style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}
                            />
                        </div>
                        <div>
                            <div className="inline-block tag tag-green mb-6">Kit listo para desplegar</div>
                            <h2 className="section-title">Qué trae un LibreRouter</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                La idea de &ldquo;kit&rdquo; importa: no es un router suelto, sino un conjunto pensado
                                para instalación real en territorio.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "1 × dispositivo LibreRouter (en caja apta intemperie)",
                                    "2 × antenas sectoriales de 5 GHz (MIMO 2×2, 15 dBi)",
                                    "4 × cables coaxiales (pigtails) para conectar antenas",
                                    "Soportes articulados para montaje de antenas",
                                    "Tornillo de puesta a tierra / grounding",
                                    "8 descargadores de gas en puertos Ethernet",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white mt-0.5"
                                            style={{ background: "#38b000" }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-3">
                                <a href="mailto:librerouter@altermundi.net" className="btn-green">Solicitar cotización</a>
                                <a href="https://foro.librerouter.org/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Foro ↗</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PUERTOS Y ENERGÍA ── */}
            <section className="py-24" style={{ background: "#f5f5f0" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block tag mb-6">Hardware para el territorio</div>
                            <h2 className="section-title">Puertos, conectores y energía</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                LibreRouter contempla escenarios reales: PoE, pasamuros, descarga a tierra, expansión.
                                La durabilidad y el montaje prolijo no son &ldquo;detalles&rdquo;: en redes comunitarias,
                                lo que falla suele ser la instalación, no la idea.
                            </p>
                            <div className="space-y-3">
                                {[
                                    { icon: "🔌", label: "4× RP-SMA externos", desc: "Para antenas 5 GHz (2 por antena, MIMO 2×2)" },
                                    { icon: "📡", label: "Antena 2.4 GHz integrada", desc: "Dentro de la caja, cobertura local sin cable adicional" },
                                    { icon: "🌐", label: "2 puertos Gigabit RJ-45", desc: "WAN + LAN" },
                                    { icon: "⚡", label: "PoE pasivo + pass-through", desc: "Un nodo puede alimentar a otro (12–32 V)" },
                                    { icon: "🛡️", label: "Protección eléctrica", desc: "8 descargadores de gas + ESD 4 kV/8 kV + grounding" },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100">
                                        <span className="text-xl shrink-0">{item.icon}</span>
                                        <div>
                                            <p className="font-bold text-sm text-gray-800">{item.label}</p>
                                            <p className="text-gray-500 text-xs">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Diagrama de puertos */}
                        <div>
                            <img
                                src="/images/proyectos/librerouter/royecto-librerouter-diagrama-puertos.png"
                                alt="Diagrama de puertos y alimentación PoE del LibreRouter"
                                className="w-full rounded-2xl object-contain bg-white p-4"
                                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}
                            />
                            <p className="text-center text-xs text-gray-400 mt-3">Diagrama oficial de puertos y conectores — LibreRouter LR1</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FICHA TÉCNICA ── */}
            <section className="py-24" style={{ background: "var(--azul-noche)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="inline-block tag tag-dark mb-4">Especificaciones técnicas</div>
                        <h2 className="section-title section-title-dark">Ficha técnica — LibreRouter LR1</h2>
                        <p className="text-gray-400 text-sm max-w-xl mx-auto">
                            Datos del modelo LR1 (PDF oficial v7.5). El proyecto evoluciona: consultá el foro para revisiones actualizadas.
                        </p>
                    </div>
                    <div className="card-dark rounded-2xl overflow-hidden max-w-4xl mx-auto">
                        <table className="w-full">
                            <tbody>
                                {specs.map((row, i) => (
                                    <tr key={row.cat} className={i % 2 === 0 ? "bg-white/3" : ""}>
                                        <td className="px-6 py-3 text-xs font-bold uppercase tracking-widest w-44 shrink-0"
                                            style={{ color: "#00b4d8" }}>
                                            {row.cat}
                                        </td>
                                        <td className="px-6 py-3 text-gray-300 text-sm leading-relaxed">
                                            {row.val}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="text-center mt-6">
                        <a href="https://gitlab.com/librerouter/boards/-/wikis/files/LibreRouter_Specifications_v7.5.pdf"
                            target="_blank" rel="noopener noreferrer"
                            className="text-sm font-bold" style={{ color: "#00b4d8" }}>
                            Descargar PDF de especificaciones v7.5 ↗
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SOFTWARE: LibreRouterOS + LimeApp ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block tag tag-green mb-6">Software libre preinstalado</div>
                            <h2 className="section-title">LibreRouterOS + LimeApp</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                LibreRouter viene listo con un sistema basado en <strong>OpenWrt + LibreMesh</strong>
                                (LibreRouterOS). La meta: que una comunidad <em>sin especialistas en redes</em> pueda
                                desplegar y mantener una red, aprendiendo en el proceso.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="field-card" style={{ borderLeftColor: "#00b4d8" }}>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#00b4d8" }}>
                                        🔧 Autoconfiguración
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Nodos nuevos pueden autoconfigurarse tomando información de los nodos ya existentes.
                                        Sumar un nodo no requiere una sesión de ingeniería cada vez.
                                    </p>
                                </div>
                                <div className="field-card" style={{ borderLeftColor: "#a855f7" }}>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#a855f7" }}>
                                        📱 LimeApp — gestión sin internet
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Aplicación web liviana para medir, diagnosticar y administrar la red{" "}
                                        <strong>localmente, sin conexión a Internet</strong>, directamente desde el
                                        celular conectado al nodo.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Link href="/librerouter-os" className="btn-primary">
                                    Ver LibreRouterOS + LimeApp →
                                </Link>
                                <a href="https://altermundi.net/documentacion/usar-limeapp1-4/"
                                    target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                    Manual LimeApp 1.4 ↗
                                </a>
                            </div>
                        </div>

                        {/* Mockup LimeApp */}
                        <div className="flex justify-center">
                            <img
                                src="/images/proyectos/librerouter/mockup.png"
                                alt="Capturas de LimeApp: alineación, estado del nodo y mediciones"
                                className="w-full max-w-sm rounded-2xl object-contain"
                                style={{ boxShadow: "0 20px 60px rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.15)" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INSTALACIÓN ── */}
            <section className="py-24" style={{ background: "#f5f5f0" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Foto entrega/instalación */}
                        <div className="relative">
                            <img
                                src="/images/proyectos/librerouter/_DSC8032.jpg"
                                alt="Entrega y revisión comunitaria de un kit LibreRouter antes del despliegue"
                                className="w-full rounded-2xl object-cover h-80"
                                style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-3">
                                <p className="text-white text-xs font-semibold">📦 Revisión del kit antes del despliegue</p>
                            </div>
                        </div>
                        <div>
                            <div className="inline-block tag mb-6">Instalación en territorio</div>
                            <h2 className="section-title">Guías paso a paso</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                La documentación insiste en algo básico: <strong>leer el instructivo completo antes de
                                alimentar el equipo</strong>. Instalación, protección eléctrica y descarga a tierra son
                                parte del stack, no apéndices.
                            </p>
                            <div className="space-y-3 mb-8">
                                {[
                                    { n: "01", label: "Conectar el dispositivo", link: "https://altermundi.net/documentacion/conectar-un-equipo-librerouter/", desc: "Antenas → PoE → acceso LimeApp en 10.13.0.1" },
                                    { n: "02", label: "Configurar la red", link: "https://altermundi.net/documentacion/configurar-un-nuevo-equipo-librerouter/", desc: "Nombre de red, canales, nodos vecinos, lime-config" },
                                    { n: "03", label: "Montar el nodo", link: "https://altermundi.net/documentacion/montar-un-nodo-librerouter/", desc: "Soporte, grounding, pasamuros, altura y alineación" },
                                    { n: "04", label: "Mantenimiento real", link: "https://foro.librerouter.org/t/como-empezar-a-usar-un-librerouter/148", desc: "safereboot, jerarquía de configs, actualización mesh-wide" },
                                ].map((item) => (
                                    <a key={item.n} href={item.link} target="_blank" rel="noopener noreferrer"
                                        className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all group">
                                        <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0 text-white"
                                            style={{ background: "#38b000" }}>{item.n}</span>
                                        <div>
                                            <p className="font-bold text-sm text-gray-800 group-hover:underline">{item.label} ↗</p>
                                            <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VIDEOS ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Aprendé con videos</h2>
                        <p className="section-subtitle mx-auto max-w-xl">
                            Tutoriales del Semillero 2022 y guías oficiales para instalar, configurar y operar tu nodo.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {videos.map((v) => (
                            <a key={v.label} href={v.url} target="_blank" rel="noopener noreferrer"
                                className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all group bg-white">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                                    style={{ background: "#38b00015" }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#38b000">
                                        <polygon points="5,3 19,12 5,21" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest block mb-0.5"
                                        style={{ color: "#38b000" }}>{v.cat}</span>
                                    <p className="text-gray-700 text-sm font-semibold leading-snug group-hover:underline">{v.label} ↗</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EVOLUCIÓN V2.0 ── */}
            <section className="py-20" style={{ background: "#f5f5f0" }}>
                <div className="max-w-4xl mx-auto px-6">
                    <div className="card p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20"
                            style={{ background: "#38b000", transform: "translate(50%, -50%)" }} />
                        <div className="relative z-10">
                            <div className="inline-block tag tag-green mb-6">Tecnología viva</div>
                            <h2 className="section-title mb-4">LibreRouter V2.0</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                LibreRouter es un proyecto vivo. <strong>LibreRouter V2.0</strong> (financiado por FRIDA 2021)
                                plantea actualizar la tecnología para:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Enfrentar la escasez de componentes de la versión anterior",
                                    "Mejorar rendimiento y eficiencia energética",
                                    "Incorporar aprendizajes de años de despliegues reales",
                                    "Sostener la soberanía tecnológica de las redes comunitarias",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white mt-0.5"
                                            style={{ background: "#38b000" }}>→</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <a href="https://programafrida.net/archivos/project/librerouter-v2-0-evolucionando-la-soberania-tecnologica"
                                target="_blank" rel="noopener noreferrer" className="btn-green">
                                Ver LibreRouter V2.0 en FRIDA ↗
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── RECURSOS ── */}
            <section className="py-24" style={{ background: "var(--azul-noche)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="section-title section-title-dark text-center mb-12">Documentación y recursos</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Documentación AlterMundi",
                                color: "#00b4d8",
                                icon: "📄",
                                links: [
                                    { label: "¿Cómo es un LibreRouter?", url: "https://altermundi.net/documentacion/como-es-un-librerouter/" },
                                    { label: "Conectar un equipo", url: "https://altermundi.net/documentacion/conectar-un-equipo-librerouter/" },
                                    { label: "Montar un nodo", url: "https://altermundi.net/documentacion/montar-un-nodo-librerouter/" },
                                    { label: "Usar LimeApp 1.4", url: "https://altermundi.net/documentacion/usar-limeapp1-4/" },
                                ],
                            },
                            {
                                title: "Repositorios y código",
                                color: "#38b000",
                                icon: "💻",
                                links: [
                                    { label: "GitLab LibreRouter (hardware, OS, docs)", url: "https://gitlab.com/librerouter" },
                                    { label: "GitHub lime-packages (LibreMesh)", url: "https://github.com/libremesh/lime-packages" },
                                    { label: "GitHub lime-app (LimeApp)", url: "https://github.com/libremesh/lime-app" },
                                    { label: "Specs v7.5 (PDF oficial)", url: "https://gitlab.com/librerouter/boards/-/wikis/files/LibreRouter_Specifications_v7.5.pdf" },
                                ],
                            },
                            {
                                title: "Comunidad y contexto",
                                color: "#f4a900",
                                icon: "💬",
                                links: [
                                    { label: "Foro LibreRouter", url: "https://foro.librerouter.org/" },
                                    { label: "Internet Society — artículo LibreRouter", url: "https://www.internetsociety.org/blog/2018/12/librerouter-a-multi-radio-wireless-router-for-community-networks/" },
                                    { label: "FRIDA — LibreRouter V2.0", url: "https://programafrida.net/archivos/project/librerouter-v2-0-evolucionando-la-soberania-tecnologica" },
                                    { label: "libremesh.org", url: "https://libremesh.org/" },
                                ],
                            },
                        ].map((group) => (
                            <div key={group.title} className="card-dark p-6">
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-2xl">{group.icon}</span>
                                    <h3 className="font-black text-base" style={{ color: group.color }}>{group.title}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {group.links.map((l) => (
                                        <li key={l.label}>
                                            <a href={l.url} target="_blank" rel="noopener noreferrer"
                                                className="flex items-start gap-2 hover:opacity-80 transition-opacity">
                                                <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: group.color }} />
                                                <span className="text-gray-300 text-sm hover:underline">{l.label} ↗</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="section-title mb-4">¿Querés desplegar tu red con LibreRouter?</h2>
                    <p className="section-subtitle mx-auto max-w-xl">
                        Antes de escribirnos, formá un grupo de trabajo colectivo. AlterMundi acompaña proyectos comunitarios.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/formacion" className="btn-primary">Ver Formación y Acompañamiento</Link>
                        <Link href="/librerouter-os" className="btn-secondary">LibreRouterOS + LimeApp →</Link>
                        <a href="mailto:librerouter@altermundi.net" className="btn-yellow">Cotizar</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
