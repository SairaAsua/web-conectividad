import Link from "next/link";
import { carc } from "@/lib/data";

export const metadata = {
    title: "Incidencia y Política Pública | AlterMundi",
    description: "El rol de AlterMundi en marcos regulatorios para redes comunitarias en Argentina: VARC, RUPECO, Roberto Arias, CARC, IGF y UIT-D.",
};

export default function IncidenciaPage() {
    return (
        <div>
            {/* Hero */}
            <section className="relative py-32" style={{ background: "linear-gradient(135deg, #1a1200 0%, #0a1628 100%)" }}>
                <div className="absolute inset-0 network-bg-dark opacity-40" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        <span style={{ background: "linear-gradient(135deg, #f4a900, #e05c00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            Incidencia
                        </span>
                        {" "}Pública
                    </h1>
                    
                </div>
            </section>

            {/* Argentina — Logros y programas */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="section-title">En Argentina</h2>
                            <div className="space-y-6 text-gray-600">
                                <p className="text-lg leading-relaxed">
                                    AlterMundi <strong>contribuyó activamente</strong> a la aprobación del primer programa nacional
                                    que financia redes comunitarias mediante el <strong>Fondo de Servicio Universal</strong>.
                                    Y obtuvo la primera licencia ENACOM de operador de red comunitaria en el país.
                                </p>
                                <div className="field-card" style={{ borderLeftColor: "#f4a900" }}>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#f4a900" }}>🏛️ 1ª Licencia ENACOM — 2018</p>
                                    <p className="text-gray-700 mb-2">AlterMundi obtuvo la <strong>primera licencia de operador de red comunitaria de internet</strong> en Argentina, expedida por ENACOM.</p>
                                    <a href="https://altermundi.net/2018/12/20/altermundi-obtiene-licencia-de-operador-de-red-comunitaria-de-internet-en-argentina/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold" style={{ color: "#f4a900" }}>
                                        Ver nota ↗
                                    </a>
                                </div>
                                <div className="field-card" style={{ borderLeftColor: "#00b4d8" }}>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#00b4d8" }}>📋 Programa Roberto Arias — ENACOM</p>
                                    <p className="text-gray-700 mb-2">El primer programa público nacional que provee financiamiento para desplegar redes comunitarias con el Fondo de Servicio Universal. AlterMundi acompaña la postulación.</p>
                                    <a href="https://altermundi.net/programa-roberto-arias-de-enacom-caracteristicas-y-requisitos/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold" style={{ color: "#00b4d8" }}>
                                        Ver guía de requisitos ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-bold text-xl mb-6">Hitos de incidencia</h3>
                            {[
                                { year: "2018", desc: "AlterMundi obtiene la 1ª licencia ENACOM de operador de red comunitaria en Argentina.", color: "#00b4d8" },
                                { year: "2019", desc: "LibreRouter homologado en Argentina por ENTIN + ENACOM. 1ª CARC.", color: "#38b000" },
                                { year: "2021–22", desc: "Contribución al diseño del Programa Roberto Arias de ENACOM: Fondo de Servicio Universal.", color: "#f4a900" },
                                { year: "2023", desc: "Participación en la UIT-D (Ginebra) y premio WSIS 2023 (ITU).", color: "#a855f7" },
                            ].map((item) => (
                                <div key={item.year} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <span className="font-black text-sm shrink-0 w-16" style={{ color: item.color }}>{item.year}</span>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* VARC + RUPECO */}
            <section className="py-24" style={{ background: "#f5f5f0" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        
                        <h2 className="section-title">VARC y RUPECO</h2>
                        
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="card p-8">
                            <div className="text-4xl mb-4">📄</div>
                            <h3 className="font-bold text-xl mb-2" style={{ color: "#f4a900" }}>Licencia VARC</h3>
                            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                La <strong>VARC (Vinculación entre Áreas de Red Comunitaria)</strong> es la licencia de ENACOM
                                que habilita a una organización a operar una red comunitaria de internet en Argentina.
                                AlterMundi guía el proceso de solicitud paso a paso.
                            </p>
                            <ul className="space-y-2 text-gray-500 text-sm mb-6">
                                <li className="flex gap-2"><span style={{ color: "#f4a900" }}>›</span>Requisitos previos y documentación necesaria</li>
                                <li className="flex gap-2"><span style={{ color: "#f4a900" }}>›</span>Pasos del trámite ante ENACOM</li>
                                <li className="flex gap-2"><span style={{ color: "#f4a900" }}>›</span>Plazos y seguimiento del expediente</li>
                            </ul>
                            <a href="https://altermundi.net/como-solicitar-una-licencia-varc-de-redes-comunitarias/" target="_blank" rel="noopener noreferrer" className="btn-yellow text-sm inline-flex">
                                Cómo solicitar licencia VARC ↗
                            </a>
                        </div>
                        <div className="card p-8">
                            <div className="text-4xl mb-4">📋</div>
                            <h3 className="font-bold text-xl mb-2" style={{ color: "#38b000" }}>Registro RUPECO</h3>
                            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                El <strong>RUPECO (Registro Único de Prestadores Comunitarios)</strong> es el primer paso para
                                que una organización sea reconocida como operadora de red comunitaria. AlterMundi acompaña
                                el proceso desde el inicio.
                            </p>
                            <ul className="space-y-2 text-gray-500 text-sm mb-6">
                                <li className="flex gap-2"><span style={{ color: "#38b000" }}>›</span>Quién puede registrarse</li>
                                <li className="flex gap-2"><span style={{ color: "#38b000" }}>›</span>Documentación requerida</li>
                                <li className="flex gap-2"><span style={{ color: "#38b000" }}>›</span>Diferencia entre RUPECO y VARC</li>
                            </ul>
                            <a href="https://altermundi.net/como-solicitar-el-registro-en-el-rupeco/" target="_blank" rel="noopener noreferrer" className="btn-green text-sm inline-flex">
                                Cómo registrarse en RUPECO ↗
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CARC */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            
                            <h2 className="section-title">{carc.title.split("—")[0].trim()}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">{carc.desc}</p>
                            <div className="space-y-4 mb-8">
                                {carc.editions.map((ed) => (
                                    <div key={ed.year} className="field-card" style={{ borderLeftColor: "#38b000" }}>
                                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#38b000" }}>
                                            🏕️ {ed.title} — {ed.year}
                                        </p>
                                        <p className="text-gray-700 text-sm leading-relaxed mb-2">{ed.desc}</p>
                                        <a href={ed.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold" style={{ color: "#38b000" }}>
                                            Ver más ↗
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <a href={carc.site} target="_blank" rel="noopener noreferrer" className="btn-green">
                                Sitio CARC ↗
                            </a>
                        </div>
                        <div className="card p-8" style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)" }}>
                            <h3 className="font-bold text-xl mb-4" style={{ color: "#38b000" }}>¿Qué es la CARC?</h3>
                            <ul className="space-y-4 text-gray-600 text-sm">
                                {[
                                    { icon: "🗺️", text: "Encuentro de redes territoriales de toda Argentina" },
                                    { icon: "🔧", text: "Talleres técnicos: WiFi, fibra óptica, mesh, planificación" },
                                    { icon: "📜", text: "Declaración conjunta y agenda política colectiva" },
                                    { icon: "🎥", text: "Espacio de presentación y difusión de documentales" },
                                    { icon: "🤝", text: "Articulación con organizaciones regionales e internacionales" },
                                ].map((item) => (
                                    <li key={item.text} className="flex gap-3">
                                        <span className="text-xl shrink-0">{item.icon}</span>
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internacional — IGF + UIT-D */}
            <section className="py-24" style={{ background: "#f5f5f0" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="section-title">En el mundo</h2>
                        
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* IGF — Nicolás */}
                        <div className="card p-8">
                            <div className="text-4xl mb-4">🌐</div>
                            <h3 className="font-bold text-xl mb-2" style={{ color: "#00b4d8" }}>IGF — Internet Governance Forum (ONU)</h3>
                            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                <strong>Nicolás Echániz</strong> participó como orador en el IGF (Naciones Unidas) en 2016, 2018 y 2022,
                                llevando el debate sobre infraestructura comunitaria, blockchain e inversión eficiente a la agenda global.
                            </p>
                            <div className="space-y-2">
                                {[
                                    { label: "IGF 2016", url: "https://igf2016.sched.com/speaker/nicoechaniz" },
                                    { label: "IGF 2018 — Scaling Community Networks", url: "https://www.intgovforum.org/en/content/igf-2018-ws-279-scaling-community-networks-exploring-blockchain-and-efficient-investment" },
                                    { label: "IGF 2022 — Internet as a Commons", url: "https://www.intgovforum.org/en/content/igf-2022-day-0-event-17-internet-commons-forum-internet-as-a-commons" },
                                ].map((l) => (
                                    <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
                                        className="block text-xs font-bold" style={{ color: "#00b4d8" }}>
                                        {l.label} ↗
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* UIT-D — Jésica */}
                        <div className="card p-8">
                            <div className="text-4xl mb-4">📡</div>
                            <h3 className="font-bold text-xl mb-2" style={{ color: "#38b000" }}>UIT-D (Naciones Unidas)</h3>
                            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                <strong>Jésica Giudice</strong> representó a AlterMundi en la Unión Internacional de Telecomunicaciones
                                (Ginebra, 2023) por invitación de APC, compartiendo la experiencia argentina en paneles ITU SG1.
                            </p>
                            <a href="https://altermundi.net/2023/05/15/altermundi-en-la-union-internacional-de-telecomunicaciones-uit-d/" target="_blank" rel="noopener noreferrer"
                                className="text-sm font-bold" style={{ color: "#38b000" }}>
                                Ver nota completa ↗
                            </a>
                        </div>

                        {/* WSIS Prize */}
                        <div className="card p-8">
                            <div className="text-4xl mb-4">🏆</div>
                            <h3 className="font-bold text-xl mb-2" style={{ color: "#f4a900" }}>WSIS Prizes 2023</h3>
                            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                El caso argentino de licencias para redes comunitarias fue reconocido con un
                                <strong> Premio WSIS 2023</strong> por la ITU, visibilizando el modelo ante la comunidad global.
                            </p>
                            <a href="https://www.itu.int/net4/wsis/stocktaking/Prizes/2025/Details/16703330062093867" target="_blank" rel="noopener noreferrer"
                                className="btn-yellow text-sm inline-flex">
                                Ver en ITU ↗
                            </a>
                        </div>
                    </div>

                    {/* Copy de participación global */}
                    <div className="mt-12 card p-8 text-center max-w-3xl mx-auto">
                        <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                            &ldquo;Participamos activamente en espacios internacionales de gobernanza de internet y
                            conectividad comunitaria. Llevamos la voz de las redes territoriales al debate global:
                            cómo se construye infraestructura común, cómo se defiende el derecho a la comunicación
                            y cómo se sostienen tecnologías libres.&rdquo;
                        </blockquote>
                        <p className="text-gray-400 text-sm mt-4">— AlterMundi</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="section-title mb-4">¿Querés postularte al Roberto Arias?</h2>
                    
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/formacion" className="btn-primary">Ver Formación y Acompañamiento</Link>
                        <Link href="/contacto" className="btn-yellow">Contactar</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
