// ── Navegación principal ─────────────────────────
export const navigation = [
  { name: "Redes Comunitarias", href: "/redes" },
  { name: "LibreMesh", href: "/libremesh" },
  { name: "LibreRouter", href: "/librerouter" },
  { name: "I+D", href: "/id" },
  { name: "Incidencia", href: "/incidencia" },
  { name: "Formación", href: "/formacion" },
  { name: "Contacto", href: "/contacto" },
];

// Submenú desplegable opcional
export const navDropdowns: Record<string, { name: string; href: string; desc: string }[]> = {
  "LibreRouter": [
    { name: "Hardware", href: "/librerouter", desc: "El router open hardware" },
    { name: "LibreRouterOS + LimeApp", href: "/librerouter-os", desc: "Software de operación" },
  ],
  "Incidencia": [
    { name: "Política pública", href: "/incidencia", desc: "ENACOM, VARC, Roberto Arias" },
    { name: "Recursos", href: "/recursos", desc: "Repos, docs, prensa" },
  ],
  "Formación": [
    { name: "Formación y Acompañamiento", href: "/formacion", desc: "Talleres y semillero" },
    { name: "Videos", href: "/videos", desc: "Documentales y tutoriales" },
  ],
};

// ── Info institucional ───────────────────────────
export const siteInfo = {
  name: "AlterMundi",
  tagline: "Hacemos Internet con las comunidades.",
  description:
    "Diseñamos y construimos tecnología abierta (software + formación) para que redes comunitarias desplieguen conectividad en territorios rurales y remotos, con autonomía y gobernanza local.",
  email: "info@altermundi.net",
  emailLibreRouter: "librerouter@altermundi.net",
  whatsapp: "3547-546691",
  youtube: "https://www.youtube.com/c/AlterMundiNet/videos",
  docs: "http://docs.altermundi.net/",
  forum: "https://foro.librerouter.org/",
  github: "https://github.com/libremesh/lime-packages",
  gitlab: "https://gitlab.com/librerouter",
  libremesh: "https://libremesh.org/",
  librerouter: "https://librerouter.org/",
  asn: "AS264607", // ASN propio LACNIC — operamos infraestructura real
};

// ── Timeline histórica (completa según dossier sec. 3) ──────────────
export const timeline = [
  {
    year: "2011",
    event: "AlterMundi nace como Asociación Civil en Argentina. Inicio del camino con las primeras redes comunitarias en Córdoba.",
    color: "celeste",
  },
  {
    year: "2012",
    event: "QuintanaCamp en José de la Quintana: primeras experiencias de redes multi-radio mesh. Despliegue en Quilpo.",
    color: "verde",
  },
  {
    year: "2013",
    event: "Arranca LibreMesh como proyecto global de activistas de redes libres. Talleres en Palpalá (Jujuy).",
    color: "amarillo",
  },
  {
    year: "2015",
    event: "Formalización como Asociación Civil. Taller en Nono: 42 nodos construidos en 3 días. Primeros despliegues con LibreMesh en La Bolsa y Nono.",
    color: "celeste",
  },
  {
    year: "2016",
    event: "FRIDA publica el proyecto LibreRouter. Nicolás Echániz participa como orador en IGF 2016 (Internet Governance Forum, ONU).",
    color: "verde",
  },
  {
    year: "2018",
    event: "LibreRouter Fase II: router mesh multi-radio open hardware para el Sur Global. Cumbre Latinoamericana de Redes Comunitarias. AlterMundi obtiene la primera licencia ENACOM de operador de red comunitaria en Argentina. IGF 2018 (Nicolás Echániz).",
    color: "amarillo",
  },
  {
    year: "2019",
    event: "LibreRouter homologado en Argentina (INTI + ENACOM). Primera CARC (Cumbre Argentina de Redes Comunitarias): piloto mesh, taller de fibra. Estreno documental QuintanaLibre.",
    color: "celeste",
  },
  {
    year: "2020",
    event: "10 nuevas redes comunitarias en Argentina (LibreGrandeNet, MonteNet, Río Los Sauces, etc.). Semillero en pandemia financiado por APC + ISOC.",
    color: "verde",
  },
  {
    year: "2021",
    event: "FRIDA financia LibreRouter V2.0. Documental 'Nuevas Redes' (5 redes, testimonios). La Poderosa: talleres en Barrio Yapeyú e Isla Maciel. IGF 2022 Day 0 event.",
    color: "amarillo",
  },
  {
    year: "2022",
    event: "Grant ARDC 'LibreRouterOS: Mesh-wide vision' (más de 20 redes, >13.500 personas). Semillero Roberto Arias: 16 comunidades, 9 provincias. Villa Ciudad Parque: 4 nodos en un día.",
    color: "celeste",
  },
  {
    year: "2023",
    event: "Participación en la UIT-D (Ginebra) por invitación de APC. Premio WSIS 2023 (ITU): caso argentino de licencias de redes comunitarias. Acompañamiento a 9 proyectos Roberto Arias.",
    color: "verde",
  },
  {
    year: "2024",
    event: "Grant ARDC 'Wi-Fi for mesh networks'. Modo APuP aprobado en OpenWRT. FOQSI: fibra óptica comunitaria Quintana–San Isidro. Investigación Hidden Nodes. Tierra Fértil (Palma Sola, Jujuy).",
    color: "amarillo",
  },
  {
    year: "2025",
    event: "Reporte técnico ARDC: Shared State reescrito en Rust, testbeds Wi-Fi 6, virtual mesh con QEMU. Estado del arte en redes mesh comunitarias del Sur Global.",
    color: "celeste",
  },
];

// ── Stack tecnológico ────────────────────────────
export const stack = [
  {
    id: "libremesh",
    name: "LibreMesh",
    subtitle: "Firmware / Software",
    color: "#00b4d8",
    icon: "🔧",
    desc: "Conjunto de paquetes sobre OpenWrt para desplegar redes mesh con soporte multi-radio y perfiles por comunidad.",
    link: "/libremesh",
  },
  {
    id: "librerouter",
    name: "LibreRouter",
    subtitle: "Open Hardware",
    color: "#38b000",
    icon: "📡",
    desc: "Router open hardware diseñado para intemperie, multi-radio, optimizado para el Sur Global y redes comunitarias rurales.",
    link: "/librerouter",
  },
  {
    id: "librerouter-os",
    name: "LibreRouterOS",
    subtitle: "Sistema Operativo",
    color: "#f4a900",
    icon: "💿",
    desc: "SO basado en LibreMesh/OpenWrt, integrado en el LibreRouter con herramientas de mantenimiento y configuración.",
    link: "/librerouter-os",
  },
  {
    id: "limeapp",
    name: "LimeApp",
    subtitle: "Gestión Local",
    color: "#a855f7",
    icon: "📱",
    desc: "Aplicación web para medir, diagnosticar y administrar la red localmente, incluso sin conexión a Internet.",
    link: "/librerouter-os",
  },
];

// ── Cifras de impacto ────────────────────────────
export const stats = [
  { label: "Personas conectadas", value: "+13.500", sub: "en más de 20 redes (dato ARDC 2024)", color: "#00b4d8" },
  { label: "Redes comunitarias", value: "+20", sub: "usando LibreRouter/LibreMesh en Argentina", color: "#38b000" },
  { label: "Provincias", value: "9", sub: "alcanzadas en el Semillero 2022", color: "#f4a900" },
  { label: "Años de trabajo", value: "+13", sub: "desde 2011 hasta hoy", color: "#a855f7" },
];

// ── Redes acompañadas ────────────────────────────
export const redesAcompanadas = [
  {
    name: "QuintanaLibre",
    loc: "José de la Quintana, Córdoba",
    desc: "Más de 70 familias conectadas. Enlace de 15 km. Red fundadora, más de 13 años funcionando.",
    color: "#00b4d8",
    icon: "🏔️",
    video: "https://www.youtube.com/watch?v=DcOAePVwafs",
  },
  {
    name: "Red FOQSI",
    loc: "Quintana y San Isidro, Córdoba",
    desc: "Fibra óptica comunitaria (FTTH + WiFi) en despliegue. Talleres para mujeres y jóvenes. APC.",
    color: "#38b000",
    icon: "📡",
    link: "https://altermundi.net/2024/10/15/foqsi/",
  },
  {
    name: "Tierra Fértil",
    loc: "Palma Sola, Jujuy",
    desc: "Conectividad comunitaria con LibreRouter. Presentó proyecto al Programa Roberto Arias.",
    color: "#f4a900",
    icon: "🌱",
    link: "https://altermundi.net/2024/05/21/construyendo-conectividad-comunitaria-usando-librerouter/",
  },
  {
    name: "LibreGrandeNet",
    loc: "Córdoba",
    desc: "Una de las 10 nuevas redes comunitarias visibilizadas en 2020. Tecnología libre y gobierno local.",
    color: "#a855f7",
    icon: "🌐",
    link: "https://altermundi.net/2020/09/29/nuevas-redes/",
  },
  {
    name: "MonteNet",
    loc: "Argentina",
    desc: "Red comunitaria con LibreMesh. Protagonista del documental 'Comunidades Haciendo Internet – Nuevas Redes' (2021).",
    color: "#00b4d8",
    icon: "🌲",
    video: "https://www.youtube.com/watch?v=fnHJfDJwEiY",
  },
  {
    name: "Construyendo Dignidad",
    loc: "Córdoba",
    desc: "Experiencia de conectividad comunitaria con LibreRouter en la provincia de Córdoba.",
    color: "#38b000",
    icon: "🏘️",
    link: "https://altermundi.net/2024/05/21/construyendo-conectividad-comunitaria-usando-librerouter/",
  },
];

// ── Partners / Alianzas ──────────────────────────
export const partners = [
  {
    name: "ARDC",
    logo: "/images/logos/ARDC-Logo.jpg",
    desc: "Amateur Radio Digital Communications. Dos grants mayores (2022 y 2024) para LibreRouterOS y Wi-Fi for mesh.",
    link: "https://www.ardc.net/apply/grants/2022-grants/grant-librerouteros-mesh-wide-vision/",
  },
  {
    name: "APC",
    logo: "/images/logos/logo-apc.png",
    desc: "Association for Progressive Communications. Miembra AlterMundi. Co-financia formación, documentales y FOQSI.",
    link: "https://www.apc.org/",
  },
  {
    name: "ISOC",
    logo: "/images/logos/Internet_Society_logo_and_wordmark-isoc.png",
    desc: "Internet Society. Grant Beyond the Net para LibreRouter Fase II. Difusión internacional.",
    link: "https://www.internetsociety.org/",
  },
  {
    name: "INTI",
    logo: "/images/logos/logo-inti.jpg",
    desc: "Instituto Nacional de Tecnología Industrial. Participación clave en homologación del LibreRouter en Argentina.",
    link: "https://altermundi.net/2019/09/12/librerouter-ya-esta-homologado-en-argentina/",
  },
  {
    name: "ENACOM",
    logo: "/images/logos/logo-enacom.png",
    desc: "Ente Nacional de Comunicaciones. Licencias VARC, Programa Roberto Arias, Fondo de Servicio Universal.",
    link: "https://enacom.gob.ar/redes-comunitarias-roberto-arias_p5049",
  },
  {
    name: "CARC",
    logo: "/images/logos/logo-carc.png",
    desc: "Cumbre Argentina de Redes Comunitarias. Articulación de redes territoriales, agenda colectiva regional.",
    link: "https://altermundi.net/2020/01/18/cumbre-argentina-de-redes-comunitarias-internet-desde-los-territorios/",
  },
  {
    name: "LibreMesh",
    logo: "/images/logos/logo-libremesh.png",
    desc: "Proyecto global de firmware para redes mesh. AlterMundi es co-desarrollador principal.",
    link: "https://libremesh.org/",
  },
  {
    name: "IEEE",
    logo: "/images/logos/IEEE-Logo.png",
    desc: "Institute of Electrical and Electronics Engineers. Colaboraciones técnicas y estándares.",
    link: "https://www.ieee.org/",
  },
];

// ── Videos ──────────────────────────────────────
export const videos = [
  {
    id: "quintanalibre",
    title: "Comunidades haciendo Internet – QuintanaLibre",
    desc: "El documental que narra cómo más de 70 familias en José de la Quintana, Córdoba, construyeron y sostienen su propia red.",
    ytId: "DcOAePVwafs",
    thumb: `https://img.youtube.com/vi/DcOAePVwafs/hqdefault.jpg`,
    year: "2020",
    category: "Documental",
    color: "#00b4d8",
  },
  {
    id: "nuevas-redes",
    title: "Comunidades Haciendo Internet – Nuevas Redes",
    desc: "Testimonios de GranjaLibre, MolinosComunitaria, MonteNet, LibreGrandeNet y ElValleReinicia.",
    ytId: "fnHJfDJwEiY",
    thumb: `https://img.youtube.com/vi/fnHJfDJwEiY/hqdefault.jpg`,
    year: "2021",
    category: "Documental",
    color: "#38b000",
  },
  {
    id: "conversatorio-2021",
    title: "Conversatorio: Redes Comunitarias para organizaciones rurales",
    desc: "Charla sobre cómo las organizaciones rurales pueden crear y sostener sus propias redes de internet.",
    ytId: "6KD_f7DIzFE",
    thumb: `https://img.youtube.com/vi/6KD_f7DIzFE/hqdefault.jpg`,
    year: "2021",
    category: "Conversatorio",
    color: "#f4a900",
  },
  {
    id: "librerouter-freifunk",
    title: "LibreRouter, the router of community networks",
    desc: "Charla técnica sobre LibreRouter: diseño, motivación y aprendizajes. Presentada en Freifunk 2019.",
    ytId: "XHXNkiTJFME",
    thumb: `https://img.youtube.com/vi/XHXNkiTJFME/hqdefault.jpg`,
    year: "2019",
    category: "Charla técnica",
    color: "#a855f7",
  },
];

// ── CARC (Cumbre Argentina de Redes Comunitarias) ──
export const carc = {
  title: "CARC — Cumbre Argentina de Redes Comunitarias",
  desc: "La CARC es un espacio de encuentro, formación y articulación para redes comunitarias en Argentina. Reúne experiencias territoriales, debates técnicos y políticos, y construye agenda colectiva para \"internet desde los territorios\".",
  editions: [
    {
      year: "2019",
      title: "1ª CARC",
      desc: "Piloto mesh con 3 LibreRouters, taller de fibra óptica, estreno del documental QuintanaLibre, declaración conjunta.",
      link: "https://altermundi.net/2020/01/18/cumbre-argentina-de-redes-comunitarias-internet-desde-los-territorios/",
    },
  ],
  site: "http://carc.libre.org.ar",
};

// ── Personas del equipo ────────────────────────── (Sec 14 dossier)
export const equipo = [
  {
    name: "Nicolás Echániz",
    role: "Co-fundador — Desarrollo LibreMesh/LibreRouter/ASN",
    bio: "Co-diseñador de LibreMesh, Librenet6 y LibreMap. Gestión del proyecto LibreRouter. Orador en IGF 2016, 2018 y 2022 (Internet Governance Forum, ONU). Responsable del ASN propio de AlterMundi (AS264607) ante LACNIC.",
    photo: null,
    links: [
      { label: "IGF 2016", url: "https://igf2016.sched.com/speaker/nicoechaniz" },
    ],
  },
  {
    name: "Jésica Giudice",
    role: "Formación — Incidencia — Articulación",
    bio: "Diseño y facilitación de semilleros y talleres técnico-sociales. Participación en UIT-D (Ginebra) por invitación de APC. BattleMesh v14 (Roma 2022), v15 (Barcelona 2023). Acompañamiento a 9 proyectos Roberto Arias (2023). Coordinación de la Cumbre Latinoamericana de Redes Comunitarias (2018).",
    photo: "/images/personas/jesica.jpeg",
    links: [
      { label: "UIT-D 2023", url: "https://altermundi.net/2023/05/15/altermundi-en-la-union-internacional-de-telecomunicaciones-uit-d/" },
      { label: "Trayectoria", url: "https://altermundi.net/trayectoria_giudice/" },
    ],
  },
];

// ── Posts del blog ───────────────────────────────
export const posts = [
  {
    slug: "hidden-nodes",
    title: "AlterMundi y el desafío de los Nodos Ocultos (Hidden Nodes)",
    date: "2024-12-01",
    dateDisplay: "1 diciembre, 2024",
    author: "Jesica Giudice",
    excerpt:
      "Las redes inalámbricas enfrentan un desafío crítico cuando un nodo no puede atender bien otros dos nodos que no se ven entre sí. Cómo AlterMundi explora soluciones para este problema técnico.",
    tags: ["redes mesh", "software libre", "I+D"],
    content: `
En un mundo cada vez más conectado, las redes inalámbricas son fundamentales para nuestra vida diaria. Sin embargo, no están exentas de desafíos técnicos.

Uno de los problemas más comunes se llama **Problema de Nodo Oculto** (Hidden Node). Ocurre cuando dos nodos que no pueden detectarse entre sí intentan enviar datos simultáneamente a un tercer nodo.

## Soluciones exploradas

**RTS/CTS** (Request to Send / Clear to Send): Un nodo envía una solicitud; si el destino está disponible, responde con un permiso. Reduce colisiones pero añade latencia.

**TDMA** (Acceso Múltiple por División de Tiempo): Los nodos se coordinan y se le asigna a cada uno un lapso de tiempo. Elimina colisiones pero requiere sincronización muy precisa — compleja en sistemas distribuidos.

En AlterMundi construimos testbeds reales (escenario "hidden node") y bancos con Wi-Fi 6 para estudiar y resolver esto con código abierto.
    `,
  },
  {
    slug: "foqsi",
    title: "¡La Red FOQSI ya está en marcha!",
    date: "2024-10-15",
    dateDisplay: "15 octubre, 2024",
    author: "Jesica Giudice",
    excerpt:
      "La red FOQSI (Fibra Óptica de Quintana y San Isidro) comenzó su despliegue. No es solo infraestructura técnica: es un motor de cambio para José de la Quintana.",
    tags: ["FOQSI", "fibra óptica", "conectividad comunitaria"],
    content: `
Con mucho entusiasmo anunciamos que la red **FOQSI** (Fibra Óptica de Quintana y San Isidro) ha comenzado su despliegue. Este proyecto lleva meses de planificación y está orientado a acercar conectividad e inclusión digital a la comunidad de José de la Quintana.

## Formación para el futuro

Hemos lanzado un taller gratuito de redes WiFi y fibra óptica, dirigido especialmente a **jóvenes y mujeres**. El proyecto incluye una mesa de trabajo permanente y abierta, financiada mayoritariamente por **APC**.
    `,
  },
  {
    slug: "ardc-apup-apc",
    title: "Revolucionando las redes mesh: Proyecto ARDC",
    date: "2024-08-01",
    dateDisplay: "1 agosto, 2024",
    author: "Jesica Giudice",
    excerpt:
      "LibreMesh, financiado por ARDC, recibió importantes mejoras: el modo APuP aprobado en OpenWRT, Shared State reescrito en C++20 y gestión mesh-wide desde un punto.",
    tags: ["libremesh", "ARDC", "APuP", "software libre"],
    content: `
Gracias al financiamiento de la fundación **Amateur Radio Digital Communications (ARDC)**, LibreMesh recibió mejoras importantes.

## Tres ejes del proyecto

**1. Modo Wi-Fi APuP** (Access Point Micro Peering): Permite que los APs se comuniquen entre sí directamente. Fue **enviado y aprobado en OpenWRT**.

**2. Shared-State** optimizado: Proceso P2P de intercambio de info entre equipos, reescrito en **corrutinas de C++20** para dispositivos embebidos.

**3. Gestión mesh-wide**: Actualización de firmware en *todos* los nodos de la red desde un único punto.

Presentado en **Battlemesh 2024** con gran impacto en la comunidad global de redes mesh.
    `,
  },
  {
    slug: "uitd-2023",
    title: "AlterMundi en la Unión Internacional de Telecomunicaciones (UIT-D)",
    date: "2023-05-15",
    dateDisplay: "15 mayo, 2023",
    author: "AlterMundi",
    excerpt:
      "Participamos en los encuentros de la UIT (agencia ONU) visibilizando las realidades de las redes comunitarias argentinas ante la comunidad internacional.",
    tags: ["UIT", "política pública", "APC"],
    content: `
AlterMundi participó en los encuentros de la **UIT (Unión Internacional de Telecomunicaciones)**, gracias a la invitación de APC.

La participación de la sociedad civil en estos espacios aporta expertise real sobre acceso digital, inclusión y apropiación tecnológica, mientras fomenta la transparencia en políticas de TICs internacionales.

> Estamos convencidos de que visibilizar las realidades de las redes comunitarias merece todos nuestros esfuerzos en este tipo de contextos.
    `,
  },
  {
    slug: "shared-state-rust",
    title: "Shared State reescrito en Rust: más performance, menos footprint",
    date: "2025-10-15",
    dateDisplay: "15 octubre, 2025",
    author: "Equipo técnico AlterMundi",
    excerpt:
      "El daemon de coordinación distribuida de LibreMesh, Shared State, fue completamente reescrito en Rust, logrando mejor rendimiento y menor uso de memoria en hardware embebido.",
    tags: ["Rust", "libremesh", "Shared State", "I+D"],
    content: `
Uno de los avances más importantes del proyecto financiado por ARDC (reporte Oct 2025) es la reescritura completa de **Shared State** en Rust.

## ¿Qué es Shared State?

Es la "columna vertebral" de coordinación de LibreMesh: permite que todos los nodos de la red compartan información de estado sin necesidad de un servidor central. Anteriormente escrito en Lua, luego en C++20, ahora en **Rust**.

## Resultados

- **Mayor velocidad** de procesamiento en dispositivos de baja potencia
- **Menor footprint de memoria** (esencial para hardware embebido)
- **Más resiliente**: el tipo system de Rust evita categorías enteras de bugs

## Ecosistema de avances (2025)

- **Testbeds reales**: escenario "hidden node" y bancos con Wi-Fi 6
- **Virtual mesh**: simulación de redes mesh en QEMU (vwifi_cli_package + libremesh-virtual-mesh)
- **AP-UP fix**: corrección para batman-adv (MAC única por interfaz)
    `,
  },
  {
    slug: "tierra-fertil-palma-sola",
    title: "Tierra Fértil presentó su red comunitaria para Palma Sola",
    date: "2023-05-12",
    dateDisplay: "12 mayo, 2023",
    author: "AlterMundi",
    excerpt:
      "¡Felicitaciones a Tierra Fértil por presentar su proyecto al Programa Roberto Arias de ENACOM! Comunidades haciendo Internet.",
    tags: ["redes comunitarias", "Programa Roberto Arias", "ENACOM"],
    content: `
¡Felicitaciones **Tierra Fértil** por presentar su proyecto al **Programa Roberto Arias** de ENACOM!

## Comunidades haciendo Internet

**QuintanaLibre** conecta más de **70 familias** en José de La Quintana, Córdoba, con más de **8 años** de historia sostenida por la propia comunidad.

El **Programa Roberto Arias** de ENACOM es la primera política pública nacional que financia redes comunitarias con el Fondo de Servicio Universal — un logro en el que AlterMundi contribuyó activamente.
    `,
  },
];

export type Post = typeof posts[0];
