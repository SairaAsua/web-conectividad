import Link from "next/link";
import { siteInfo } from "@/lib/data";

export const metadata = {
    title: "Recursos | AlterMundi",
    description: "Repos, documentación, foro, videos, papers y prensa de AlterMundi sobre redes comunitarias libres.",
};

const resources = [
    {
        category: "Sitios principales",
        color: "#00b4d8",
        icon: "🌐",
        items: [
            { label: "altermundi.net", href: "https://altermundi.net/", desc: "Sitio principal de AlterMundi" },
            { label: "libremesh.org", href: "https://libremesh.org/", desc: "Sitio oficial de LibreMesh" },
            { label: "librerouter.org", href: "https://librerouter.org/", desc: "Sitio oficial de LibreRouter" },
            { label: "docs.altermundi.net", href: "http://docs.altermundi.net/", desc: "Documentación técnica imprimible" },
        ],
    },
    {
        category: "Código fuente",
        color: "#38b000",
        icon: "💻",
        items: [
            { label: "lime-packages (GitHub)", href: "https://github.com/libremesh/lime-packages", desc: "Paquetes LibreMesh sobre OpenWrt" },
            { label: "Paquetes disponibles", href: "https://libremesh.org/packages/", desc: "Lista de paquetes y funcionalidades" },
            { label: "Guía de desarrollo", href: "https://libremesh.org/es_development.html", desc: "Cómo contribuir al proyecto" },
            { label: "gitlab.com/librerouter", href: "https://gitlab.com/librerouter", desc: "Hardware, LibreRouterOS, tests" },
        ],
    },
    {
        category: "Foro y soporte",
        color: "#f4a900",
        icon: "💬",
        items: [
            { label: "Foro LibreRouter", href: "https://foro.librerouter.org/", desc: "Comunidad de soporte técnico" },
            { label: "Cómo empezar con un LibreRouter", href: "https://foro.librerouter.org/t/como-empezar-a-usar-un-librerouter/148", desc: "Guía de primeros pasos" },
            { label: "Lanzamiento LibreRouterOS 1.5", href: "https://foro.librerouter.org/t/lanzamiento-librerouteros-1-5/337", desc: "Release notes y descargas" },
            { label: "Nueva herramienta: Acceso remoto", href: "https://foro.librerouter.org/t/nueva-herramienta-acceso-remoto/219", desc: "Herramienta de diagnóstico remoto" },
        ],
    },
    {
        category: "Documentación técnica",
        color: "#a855f7",
        icon: "📄",
        items: [
            { label: "¿Cómo es un LibreRouter?", href: "https://altermundi.net/documentation/how-is-a-librerouter/", desc: "Características del hardware" },
            { label: "Conectar un LibreRouter", href: "https://altermundi.net/documentation/connecting-a-librerouter-device/", desc: "Guía de conexión paso a paso" },
            { label: "Usar LimeApp 1.4", href: "https://altermundi.net/documentacion/usar-limeapp1-4/", desc: "Manual de la interfaz de gestión" },
            { label: "Firmware (LimeApp)", href: "https://altermundi.net/documentacion/usar-limeapp1-4/un-paseo-por-el-menu-1-4/firmware/", desc: "Actualización de firmware" },
        ],
    },
    {
        category: "Videos",
        color: "#ef4444",
        icon: "🎥",
        items: [
            { label: "Canal AlterMundiNet (YouTube)", href: siteInfo.youtube, desc: "Videos formativos y documentales" },
            { label: "Semillero 2022 — videos", href: "https://altermundi.net/altermundi/semillero-2022-videos/", desc: "Encuentros virtuales del Semillero" },
            { label: "LibreRouter: the router of community networks", href: "https://media.freifunk.net/v/librerouter-the-router-of-community-networks", desc: "Charla Freifunk sobre el proyecto" },
        ],
    },
    {
        category: "Prensa y artículos",
        color: "#0ea5e9",
        icon: "📰",
        items: [
            { label: "LibreRouter Fase II (AlterMundi)", href: "https://altermundi.net/2018/11/01/librerouter-fase-ii/", desc: "Lanzamiento de la segunda fase" },
            { label: "Internet Society — LibreRouter", href: "https://www.internetsociety.org/es/blog/2018/12/librerouter-un-enrutador-inalambrico-multiradio-para-redes-comunitarias/", desc: "Cobertura de ISOC" },
            { label: "FRIDA — LibreRouter inicial", href: "https://programafrida.net/archivos/project/router-libre", desc: "Proyecto original 2016" },
            { label: "FRIDA — LibreRouter V2.0", href: "https://programafrida.net/archivos/project/librerouter-v2-0-evolucionando-la-soberania-tecnologica", desc: "Evolución de la soberanía tecnológica" },
        ],
    },
    {
        category: "Política pública",
        color: "#f4a900",
        icon: "🏛️",
        items: [
            { label: "Programa Roberto Arias (ENACOM)", href: "https://enacom.gob.ar/redes-comunitarias-roberto-arias_p5049", desc: "Programa nacional de redes comunitarias" },
            { label: "WSIS Prizes 2023 (ITU)", href: "https://www.itu.int/net4/wsis/stocktaking/Prizes/2025/Details/16703330062093867", desc: "Reconocimiento internacional al modelo argentino" },
        ],
    },
];

export default function RecursosPage() {
    return (
        <div>
            {/* Hero */}
            <section className="relative py-32" style={{ background: "linear-gradient(135deg, #0a1628 0%, #101028 100%)" }}>
                <div className="absolute inset-0 network-bg-dark opacity-30" />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-block tag tag-dark mb-6">Documentación · Repos · Videos · Prensa</div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                        <span className="gradient-full">Recursos</span>
                    </h1>
                    <p className="text-xl text-white/60 leading-relaxed max-w-xl mx-auto">
                        Todo lo que necesitás para conocer, desplegar y contribuir al ecosistema de redes comunitarias libres.
                    </p>
                </div>
            </section>

            {/* Recursos agrupados */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {resources.map((group) => (
                            <div key={group.category} className="card p-7">
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-2xl">{group.icon}</span>
                                    <h2 className="font-black text-lg" style={{ color: group.color }}>{group.category}</h2>
                                </div>
                                <ul className="space-y-3">
                                    {group.items.map((item) => (
                                        <li key={item.label}>
                                            <a href={item.href} target="_blank" rel="noopener noreferrer"
                                                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                                <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: group.color }} />
                                                <div>
                                                    <p className="font-semibold text-sm text-gray-800 group-hover:underline">{item.label} ↗</p>
                                                    <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                                                </div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Material pendiente */}
            <section className="py-20" style={{ background: "#f5f5f0" }}>
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="section-title text-center mb-4">Checklist de contenido para la web</h2>
                    <p className="section-subtitle text-center mx-auto max-w-xl">
                        Para que la web tenga &ldquo;piel&rdquo;, conviene reunir este material del equipo:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { icon: "📸", label: "10–20 fotos de nodos instalados", desc: "Caja, antenas, PoE, altura, paisaje real." },
                            { icon: "👥", label: "5–10 fotos de talleres", desc: "Semillero, capacitaciones en territorio." },
                            { icon: "📱", label: "5 screenshots de LimeApp", desc: "Diagnóstico, actualización firmware, mapa." },
                            { icon: "🗺️", label: "1 diagrama del stack", desc: "LibreMesh → LibreRouterOS → LimeApp → Comunidad." },
                            { icon: "📍", label: "1 mapa de red real", desc: "Nodos y enlaces de QuintanaLibre o FOQSI." },
                            { icon: "📖", label: "3 micro-historias", desc: "Familias conectadas, km de enlace, impacto real." },
                        ].map((item) => (
                            <div key={item.label} className="card p-5">
                                <span className="text-3xl block mb-3">{item.icon}</span>
                                <h3 className="font-bold text-sm mb-1.5 text-gray-800">{item.label}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="py-12 text-center bg-white">
                <Link href="/contacto" className="btn-primary">¿Tenés material para compartir? Contactanos</Link>
            </div>
        </div>
    );
}
