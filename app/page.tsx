import Link from "next/link";
import Image from "next/image";
import { posts, timeline, stack, siteInfo, stats, partners, videos, redesAcompanadas, equipo } from "@/lib/data";

export default function HomePage() {
  const recentPosts = posts.slice(0, 3);

  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO — VIDEO BACKGROUND
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Video de fondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/images/hero/hero-comunidad-techos-01.mp4" type="video/mp4" />
        </video>

        {/* Overlay oscuro gradiente */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(10,22,40,0.88) 0%, rgba(15,42,30,0.80) 60%, rgba(10,22,40,0.85) 100%)",
            zIndex: 1,
          }}
        />

        {/* Network pattern encima del overlay */}
        <div className="absolute inset-0 network-bg-dark opacity-40" style={{ zIndex: 2 }} />

        {/* Color blobs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-10 translate-x-1/3 -translate-y-1/4"
          style={{ background: "radial-gradient(circle, #00b4d8, transparent)", zIndex: 2 }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-8 -translate-x-1/4 translate-y-1/4"
          style={{ background: "radial-gradient(circle, #38b000, transparent)", zIndex: 2 }} />

        <div className="relative max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 max-w-4xl" style={{ zIndex: 3 }}>
          {/* Text */}
          <div>
            

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white mb-6">
              Hacemos{" "}
              <span className="gradient-celeste">Internet</span>
              <br />
              con las{" "}
              <span className="gradient-verde">comunidades.</span>
            </h1>

            

            <div className="flex flex-wrap gap-4">
              <Link href="/redes" className="btn-primary">
                Explorar el Stack
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a href={siteInfo.forum} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}>
                Sumate al Foro ↗
              </a>
            </div>

            {/* 3 pilares */}
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                { label: "Comunidad", color: "#00b4d8" },
                { label: "Tecnología libre", color: "#38b000" },
                { label: "Soberanía", color: "#f4a900" },
              ].map((p) => (
                <span key={p.label} className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                  style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}40` }}>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #f5f5f0)", zIndex: 4 }} />
      </section>

      

      {/* ══════════════════════════════════════════════
          STACK TECNOLÓGICO
      ══════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "#f5f5f0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">El stack completo</h2>
            
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stack.map((item, i) => (
              <Link href={item.link} key={item.id} className="card p-6 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider"
                    style={{ background: `${item.color}15`, color: item.color }}>
                    {`0${i + 1}`}
                  </span>
                </div>
                <h3 className="font-black text-xl mb-1 group-hover:transition-colors" style={{ color: item.color }}>
                  {item.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">{item.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: item.color }}>
                  Ver más <span>→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Stack diagram */}
          <div className="mt-12 card p-8">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Diagrama del Stack</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              {[
                { label: "LibreMesh", sub: "firmware/paquetes OpenWrt", color: "#00b4d8" },
                { label: "→", sub: "", color: "#999" },
                { label: "LibreRouterOS", sub: "SO integrado", color: "#38b000" },
                { label: "→", sub: "", color: "#999" },
                { label: "LimeApp", sub: "gestión local", color: "#a855f7" },
                { label: "→", sub: "", color: "#999" },
                { label: "Comunidad", sub: "autonomía real", color: "#f4a900" },
              ].map((item, i) => (
                item.label === "→" ? (
                  <span key={i} className="text-2xl font-light" style={{ color: item.color }}>→</span>
                ) : (
                  <div key={i} className="text-center px-4 py-2 rounded-xl" style={{ background: `${item.color}10`, border: `1px solid ${item.color}30` }}>
                    <div className="font-bold text-sm" style={{ color: item.color }}>{item.label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.sub}</div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ¿QUÉ ES UNA RED COMUNITARIA?
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              
              <h2 className="section-title">No es &ldquo;internet gratis&rdquo;.<br />Es soberanía tecnológica.</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Propiedad colectiva", icon: "🏘️" },
                  { label: "Gestión social", icon: "🤝" },
                  { label: "Diseño accesible", icon: "🔧" },
                  { label: "Participación abierta", icon: "🌐" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/redes" className="btn-green">
                Aprender más sobre redes comunitarias
              </Link>
            </div>
            <div className="space-y-4">
              <div className="field-card">
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#00b4d8" }}>🏔️ Caso real — José de la Quintana, Córdoba</p>
                <p className="text-gray-700 font-semibold">QuintanaLibre conecta más de <span style={{ color: "#38b000" }}>70 familias</span> y mantiene un enlace de <span style={{ color: "#38b000" }}>15 km</span> a una localidad sin señal, gestionado por la propia comunidad hace más de <span style={{ color: "#38b000" }}>13 años</span>.</p>
              </div>
              <div className="field-card" style={{ borderLeftColor: "#38b000" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#38b000" }}>📡 Red FOQSI — Quintana y San Isidro</p>
                <p className="text-gray-700 font-semibold">Red de fibra óptica comunitaria en despliegue, financiada por APC. Con talleres gratuitos para mujeres y jóvenes, combinando WiFi y FTTH.</p>
              </div>
              <div className="field-card" style={{ borderLeftColor: "#f4a900" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#f4a900" }}>🏛️ Política pública</p>
                <p className="text-gray-700 font-semibold">AlterMundi contribuyó a la aprobación del primer programa nacional que financia redes comunitarias mediante el Fondo de Servicio Universal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          REDES ACOMPAÑADAS
      ══════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "#f5f5f0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            
            <h2 className="section-title">Redes comunitarias reales</h2>
            
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {redesAcompanadas.map((red) => (
              <div key={red.name} className="card p-6 group hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{red.icon}</span>
                  <span className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{ background: `${red.color}15`, color: red.color }}>
                    LibreRouter
                  </span>
                </div>
                <h3 className="font-black text-lg mb-1" style={{ color: red.color }}>{red.name}</h3>
                <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-widest">{red.loc}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{red.desc}</p>
                {(red.video || red.link) && (
                  <a
                    href={red.video || red.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold inline-flex items-center gap-1"
                    style={{ color: red.color }}
                  >
                    {red.video ? "▶ Ver documental" : "→ Ver más"}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/redes" className="btn-green">Ver todas las redes →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TIMELINE HISTÓRICO
      ══════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "var(--azul-noche)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title section-title-dark">Años de compromiso y trabajo</h2>
            
          </div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #00b4d8, #38b000, #f4a900)" }} />

            <div className="space-y-8">
              {timeline.map((item, i) => {
                const color = item.color === "celeste" ? "#00b4d8" : item.color === "verde" ? "#38b000" : "#f4a900";
                const isRight = i % 2 === 0;
                return (
                  <div key={item.year} className={`relative flex items-center gap-8 ${isRight ? "md:flex-row" : "md:flex-row-reverse"} pl-12 md:pl-0`}>
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10 text-sm font-black"
                      style={{ background: color, color: "white", boxShadow: `0 0 20px ${color}60` }}>
                    </div>

                    {/* Content */}
                    <div className={`md:w-1/2 ${isRight ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                      <div className="card-dark p-5 inline-block text-left">
                        <span className="text-2xl font-black block mb-1" style={{ color }}>{item.year}</span>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.event}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          I+D ACTUAL
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              
              <h2 className="section-title">Laboratorio de redes mesh</h2>
              
              {/* ASN data */}
              <div className="terminal mb-6">
                <span className="terminal-comment"># AlterMundi opera infraestructura real</span>{"\n"}
                <span className="terminal-prompt">$</span> whois AS264607{"\n"}
                <span style={{ color: "#f4a900" }}>ASN: AS264607</span>{"\n"}
                <span className="terminal-comment"># Registro LACNIC — "Vinimos a cambiar internet"</span>{"\n"}
                <span className="terminal-prompt">$</span> ping altermundi.net → OK ✓
              </div>
              <Link href="/id" className="btn-primary">
                Ver toda la I+D →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "🧪",
                  title: "Testbeds",
                  desc: "Escenario &ldquo;hidden node&rdquo; y bancos con Wi-Fi 6 para probar mejoras reales.",
                  color: "#00b4d8",
                },
                {
                  icon: "🕸️",
                  title: "Virtual Mesh",
                  desc: "Simulación de redes mesh en QEMU (vwifi_cli_package + libremesh-virtual-mesh).",
                  color: "#38b000",
                },
                {
                  icon: "📶",
                  title: "APuP (Wi-Fi)",
                  desc: "Nuevo modo Wi-Fi para mesh aprobado en OpenWRT. Más compatibilidad, menos hardware costoso.",
                  color: "#f4a900",
                },
                {
                  icon: "🦀",
                  title: "Shared State en Rust",
                  desc: "Coordinación distribuida reescrita en Rust: más rápido, menor footprint en embebidos.",
                  color: "#a855f7",
                },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-base mb-1.5" style={{ color: item.color }}>{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          GALERÍA DE VIDEOS
      ══════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "#f5f5f0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            
            <h2 className="section-title">Comunidades haciendo Internet</h2>
            
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.ytId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card group overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={v.thumb}
                    alt={v.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${v.color}dd`, color: "white" }}>
                    {v.year}
                  </span>
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: v.color }}>{v.category}</span>
                  <h3 className="font-bold text-sm text-gray-800 leading-snug line-clamp-2">{v.title}</h3>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/videos" className="btn-secondary">Ver todos los videos →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          POSTS RECIENTES
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="section-title mb-1">Últimas novedades</h2>
              
            </div>
            <Link href="/blog" className="btn-secondary hidden md:inline-flex text-sm">
              Ver todo →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="card p-6 group flex flex-col">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <h3 className="post-title font-bold text-base text-gray-900 leading-snug mb-3 line-clamp-3">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                  <span className="text-gray-400 text-xs">{post.dateDisplay}</span>
                  <span className="text-sm font-bold group-hover:translate-x-1 transition-transform inline-block" style={{ color: "#00b4d8" }}>Leer →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PARTNERS / ALIANZAS
      ══════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "#f5f5f0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Alianzas que hacen posible el trabajo</h2>
            
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 flex flex-col items-center text-center group hover:shadow-lg transition-all"
              >
                <div className="h-14 flex items-center justify-center mb-3">
                  <img src={p.logo} alt={p.name} className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <h3 className="font-bold text-sm text-gray-800 mb-1">{p.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{p.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          EQUIPO
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">El equipo detrás</h2>
            
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {equipo.map((persona) => (
              <div key={persona.name} className="card p-8 flex gap-6 items-start">
                <div className="shrink-0">
                  {persona.photo ? (
                    <img src={persona.photo} alt={persona.name} className="w-20 h-20 rounded-full object-cover" />
                  ) : (
                    <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
                      style={{ background: "linear-gradient(135deg, #00b4d8, #38b000)" }}>
                      👤
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-black text-xl mb-1" style={{ color: "#00b4d8" }}>{persona.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{persona.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{persona.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {persona.links.map((l) => (
                      <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-bold px-3 py-1 rounded-full border"
                        style={{ color: "#00b4d8", borderColor: "#00b4d820" }}>
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA DE SUMARSE
      ══════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "#0a1628" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">¿Querés armar tu red comunitaria?</h2>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/formacion" className="btn-primary">Ver Formación y Acompañamiento</Link>
            <a href={siteInfo.forum} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}>
              Entrar al Foro ↗
            </a>
            <Link href="/contacto" className="btn-yellow">Contactar</Link>
          </div>
        </div>
      </section>
    </>
  );
}
