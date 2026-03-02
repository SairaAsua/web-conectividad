import Link from "next/link";

export const metadata = {
    title: "Formación y Acompañamiento | AlterMundi",
    description: "Semillero de Redes Comunitarias, FOQSI, talleres de WiFi y fibra óptica. AlterMundi acompaña comunidades a desplegar su propia red.",
};

const formacionFotos = [
    { src: "/images/proyectos/formacion/IMG_0686.jpg", alt: "Taller de redes comunitarias" },
    { src: "/images/proyectos/formacion/_DSC8032.jpg", alt: "Instalación de nodo LibreRouter" },
    { src: "/images/proyectos/formacion/IMG_1474.jpg", alt: "Trabajo en territorio" },
    { src: "/images/proyectos/formacion/IMG_7284.jpg", alt: "Actividad comunitaria" },
];

const foqsiFotos = [
    { src: "/images/proyectos/red-foqsi/Capturas fibra Quintana 24.jpg", alt: "Fibra óptica FOQSI - Quintana 2024" },
    { src: "/images/proyectos/red-foqsi/IMG_0686.jpg", alt: "Taller FOQSI" },
    { src: "/images/proyectos/red-foqsi/IMG_7284.jpg", alt: "Despliegue FOQSI" },
];

const semilleroFoto = "/images/proyectos/semillero-2022/DSC_0212.JPG";

export default function FormacionPage() {
    return (
        <div>
            {/* Hero */}
            <section className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, #0e2810 0%, #0a1628 100%)" }}>
                <div className="absolute inset-0 network-bg-dark opacity-50" />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Formación y<br /><span className="gradient-verde">Acompañamiento</span>
                    </h1>
                    
                </div>
            </section>

            {/* Qué hacemos */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            
                            <h2 className="section-title">Temas en los que acompañamos</h2>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Diseño de Redes Comunitarias de internet",
                                    "Acompañamiento en diseño, ejecución y/o mantenimiento de despliegues",
                                    "Inicio de una línea de trabajo en Redes Comunitarias",
                                    "Asesoramiento a organizaciones para formar el área técnica",
                                    "Postulación al Programa Roberto Arias de ENACOM",
                                    "Asesoramiento técnico a Redes Comunitarias y a organizaciones que las apoyan",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-600 leading-relaxed">
                                        <span className="text-green-500 mt-1 shrink-0">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://enacom.gob.ar/redes-comunitarias-roberto-arias_p5049"
                                target="_blank" rel="noopener noreferrer"
                                className="btn-secondary inline-flex"
                            >
                                Programa Roberto Arias (ENACOM) ↗
                            </a>
                        </div>

                        <div className="card p-8" style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)" }}>
                            <h3 className="font-bold text-xl mb-4" style={{ color: "#38b000" }}>⚡ ¿Cómo empezar?</h3>
                            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                                <p>
                                    Es importante que el análisis y la comprensión del proyecto sean de la{" "}
                                    <strong className="text-gray-800">comunidad de la red</strong>, es decir,
                                    quienes habitan el territorio donde estará la red y la mantendrán funcionando.
                                </p>
                                <p>
                                    No alcanza con una sola persona o con un grupo reducido. La{" "}
                                    <strong className="text-gray-800">participación comunitaria</strong> será
                                    muy determinante en la capacidad de reparar y mantener la red funcionando.
                                </p>
                                <p className="font-medium" style={{ color: "#38b000" }}>
                                    Antes de consultarnos, generá un grupo de trabajo de largo plazo.
                                    AlterMundi acompaña proyectos colectivos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Semillero 2022 */}
            <section className="py-24" style={{ background: "#f5f5f0" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            
                            <h2 className="section-title">Semillero de Redes Comunitarias</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                El Semillero es un proceso de formación y acompañamiento para comunidades que quieren
                                desplegar su red y postular al Programa Roberto Arias de ENACOM. Combina organización
                                comunitaria, planificación y formación técnica.
                            </p>
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {[
                                    { n: "16", label: "Comunidades", color: "#00b4d8" },
                                    { n: "9", label: "Provincias", color: "#38b000" },
                                    { n: "2022", label: "Edición", color: "#f4a900" },
                                ].map((s) => (
                                    <div key={s.label} className="text-center p-4 card">
                                        <div className="text-2xl font-black mb-1" style={{ color: s.color }}>{s.n}</div>
                                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://altermundi.net/2022/09/16/videos-semillerorc22/" target="_blank" rel="noopener noreferrer" className="btn-green">
                                    Ver videos del Semillero →
                                </a>
                                <a href="https://altermundi.net/programa-roberto-arias-de-enacom-caracteristicas-y-requisitos/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                    Programa Roberto Arias ↗
                                </a>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <img
                                src={semilleroFoto}
                                alt="Semillero de Redes Comunitarias 2022"
                                className="w-full rounded-2xl object-cover h-64"
                                style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}
                            />
                            <div className="grid grid-cols-2 gap-3">
                                {formacionFotos.slice(0, 2).map((f, i) => (
                                    <img key={i} src={f.src} alt={f.alt} className="w-full h-32 object-cover rounded-xl" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOQSI */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 grid grid-cols-2 gap-3">
                            {foqsiFotos.map((f, i) => (
                                <img
                                    key={i}
                                    src={f.src}
                                    alt={f.alt}
                                    className={`w-full object-cover rounded-xl ${i === 0 ? "col-span-2 h-48" : "h-32"}`}
                                    style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
                                />
                            ))}
                        </div>
                        <div className="order-1 lg:order-2">
                            
                            <h2 className="section-title">Red FOQSI</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                FOQSI (Fibra Óptica de Quintana y San Isidro) nace como una necesidad concreta:
                                mejorar la conectividad real de una región serrana con infraestructura comunitaria.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Formación intensiva en telecomunicaciones (fusionado de fibra, configuración FTTH, medición de pérdidas),
                                orientada especialmente a <strong>mujeres y jóvenes</strong>. Financiada por{" "}
                                <strong>APC</strong> y apoyada por la Cooperativa de Anisacate.
                            </p>
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {[
                                    { icon: "🔌", label: "FTTH + WiFi mesh" },
                                    { icon: "👩‍🔧", label: "Inclusión de mujeres" },
                                    { icon: "🤝", label: "Apoyo cooperativa" },
                                    { icon: "💰", label: "Financiado por APC" },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 text-sm font-semibold text-gray-700">
                                        <span>{item.icon}</span> {item.label}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://altermundi.net/2024/10/15/foqsi/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                    Ver proyecto FOQSI ↗
                                </a>
                                <a href="https://altermundi.net/2024/10/15/conectando-futuros/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                    Taller Conectando Futuros ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Material formativo */}
            <section className="py-24" style={{ background: "#f5f5f0" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            
                            <h2 className="section-title">Recursos formativos</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Confiamos en la potencia de los pueblos organizados. Ponemos a disposición material
                                imprimible y audiovisual para facilitar el aprendizaje colectivo autodidacta.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Material en <strong>español, inglés y portugués</strong>. Lenguaje simple, inclusivo y no sexista.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="http://docs.altermundi.net/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                    </svg>
                                    Material imprimible
                                </a>
                                <a href="https://www.youtube.com/c/AlterMundiNet/videos" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                                    </svg>
                                    Videos en YouTube
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: "📄", title: "Documentación técnica", desc: "Guías imprimibles paso a paso para armar tu red" },
                                { icon: "🎥", title: "Videos formativos", desc: "Tutoriales y charlas sobre redes comunitarias" },
                                { icon: "🌐", title: "Foro de soporte", desc: "Comunidad activa para resolver dudas técnicas" },
                                { icon: "🤝", title: "Instancias presenciales", desc: "Talleres y acompañamiento en territorio" },
                            ].map((item) => (
                                <div key={item.title} className="card p-5">
                                    <div className="text-2xl mb-3">{item.icon}</div>
                                    <h3 className="font-semibold text-sm mb-2 text-gray-800">{item.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* LibreRouter */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="card p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)" }}>
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                
                                <h2 className="section-title">LibreRouter</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    El equipo de AlterMundi creó en <strong>2018</strong> el router{" "}
                                    <strong>LibreRouter</strong>, un equipo WiFi open hardware especialmente hecho
                                    para redes comunitarias descentralizadas.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Es compatible con cualquier otro equipo WiFi. Multi-radio, diseñado para exteriores,
                                    optimizado para el Sur Global.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a href="mailto:librerouter@altermundi.net" className="btn-primary">
                                        Solicitar cotización
                                    </a>
                                    <a href="https://foro.librerouter.org/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                        Foro de soporte ↗
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="/images/proyectos/librerouter/proyecto-librerouter-01.jpeg"
                                    alt="LibreRouter instalado"
                                    className="w-full max-w-xs rounded-2xl object-cover h-64"
                                    style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.15)" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20" style={{ background: "#0a1628" }}>
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">¿Listo para consultar?</h2>
                    
                    <Link href="/contacto" className="btn-primary">
                        Contactar a AlterMundi
                    </Link>
                </div>
            </section>
        </div>
    );
}
