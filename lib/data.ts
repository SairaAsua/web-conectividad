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
// Migrado desde WordPress altermundi.net (2020-2025)
export const posts = [
  // ─── 2025 ───
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
  // ─── 2024 ───
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
    title: "¡La Red FOQSI ya está en marcha! Conectividad, formación y oportunidades",
    date: "2024-10-15",
    dateDisplay: "15 octubre, 2024",
    author: "Jesica Giudice",
    excerpt:
      "La red FOQSI (Fibra Óptica de Quintana y San Isidro) comenzó su despliegue. No es solo infraestructura técnica: es un motor de cambio para José de la Quintana.",
    tags: ["FOQSI", "fibra óptica", "conectividad comunitaria"],
    content: `
Con mucho entusiasmo anunciamos que la red **FOQSI** (Fibra Óptica de Quintana y San Isidro) ha comenzado su despliegue. Este proyecto lleva meses de planificación y está orientado a acercar conectividad e inclusión digital a la comunidad de José de la Quintana.

## Taller gratuito

Lanzamos un taller gratuito de redes WiFi y fibra óptica, dirigido especialmente a **jóvenes y mujeres** de la localidad.

## Financiamiento

El proyecto incluye una mesa de trabajo permanente y abierta, financiada mayoritariamente por **APC** (Association for Progressive Communications).

## FOQSI en el mapa de AlterMundi

FOQSI es parte de la evolución natural de **QuintanaLibre**, la red comunitaria pionera con más de 13 años conectando a familias de José de la Quintana. Ahora damos el siguiente paso: fibra óptica para toda la comunidad.
    `,
  },
  {
    slug: "ardc-apup-apc",
    title: "Revolucionando las redes mesh con tecnologías de código abierto: Proyecto ARDC",
    date: "2024-08-01",
    dateDisplay: "1 agosto, 2024",
    author: "Jesica Giudice",
    excerpt:
      "LibreMesh, financiado por ARDC, recibió importantes mejoras: el modo APuP aprobado en OpenWRT, Shared State reescrito en C++20 y gestión mesh-wide desde un punto.",
    tags: ["libremesh", "ARDC", "APuP", "software libre"],
    content: `
Gracias al financiamiento de la fundación **Amateur Radio Digital Communications (ARDC)**, LibreMesh recibió mejoras importantes que cambian el paradigma de las redes mesh comunitarias.

## Tres ejes del proyecto

**1. Modo Wi-Fi APuP** (Access Point Micro Peering): Permite que los APs se comuniquen entre sí directamente. Fue **enviado y aprobado en OpenWRT** — una gran victoria para la comunidad de redes mesh globales.

**2. Shared-State** optimizado: Proceso P2P de intercambio de información entre equipos, reescrito en **corrutinas de C++20** para dispositivos embebidos con recursos muy limitados.

**3. Gestión mesh-wide**: Actualización de firmware en *todos* los nodos de la red desde un único punto — esencial para el mantenimiento de redes grandes.

Presentado en **Battlemesh 2024** con gran impacto en la comunidad global de redes mesh.
    `,
  },
  // ─── 2023 ───
  {
    slug: "uitd-2023",
    title: "AlterMundi en la Unión Internacional de Telecomunicaciones (UIT-D)",
    date: "2023-05-15",
    dateDisplay: "15 mayo, 2023",
    author: "AlterMundi",
    excerpt:
      "Participamos en los encuentros de la UIT (agencia ONU) visibilizando las realidades de las redes comunitarias argentinas ante la comunidad internacional.",
    tags: ["UIT", "política pública", "APC", "internacional"],
    content: `
AlterMundi participó en los encuentros de la **UIT (Unión Internacional de Telecomunicaciones)**, gracias a la invitación de **APC** (Association for Progressive Communications).

La participación de la sociedad civil en estos espacios aporta expertise real sobre acceso digital, inclusión y apropiación tecnológica, mientras fomenta la transparencia en políticas de TICs internacionales.

## Lo que compartimos

Presentamos la experiencia argentina de redes comunitarias: el modelo LibreMesh/LibreRouter, el **Programa Roberto Arias** como política pública pionera, y los aprendizajes del Semillero 2022.

> Estamos convencidos de que visibilizar las realidades de las redes comunitarias merece todos nuestros esfuerzos en este tipo de contextos.
    `,
  },
  {
    slug: "tierra-fertil-palma-sola",
    title: "Tierra Fértil presentó su proyecto de Red Comunitaria para Palma Sola",
    date: "2023-05-12",
    dateDisplay: "12 mayo, 2023",
    author: "AlterMundi",
    excerpt:
      "¡Felicitaciones a Tierra Fértil por presentar su proyecto al Programa Roberto Arias de ENACOM! Jujuy suma otra comunidad al mapa de redes libres.",
    tags: ["redes comunitarias", "Programa Roberto Arias", "ENACOM", "Jujuy"],
    content: `
¡Felicitaciones **Tierra Fértil** por presentar su proyecto al **Programa Roberto Arias** de ENACOM!

## Una comunidad que quiere conectarse

Palma Sola, en la provincia de **Jujuy**, suma un nuevo proyecto de red comunitaria al mapa argentino. Tierra Fértil acompañó el Semillero 2022 y ahora da el paso de postularse formalmente al financiamiento de ENACOM.

## El modelo que funciona

**QuintanaLibre** conecta más de **70 familias** en José de La Quintana, Córdoba, con más de **13 años** de historia sostenida por la propia comunidad.

El **Programa Roberto Arias** de ENACOM es la primera política pública nacional que financia redes comunitarias con el Fondo de Servicio Universal — un logro en el que AlterMundi contribuyó activamente durante años.
    `,
  },
  {
    slug: "articulo-redes-roberto-arias",
    title: "Redes Comunitarias y el Programa Roberto Arias: una política pública pionera",
    date: "2023-04-24",
    dateDisplay: "24 abril, 2023",
    author: "AlterMundi",
    excerpt:
      "Publicamos un análisis de la experiencia argentina de financiamiento de redes comunitarias a través del Fondo de Servicio Universal — la primera política pública de este tipo.",
    tags: ["política pública", "Programa Roberto Arias", "ENACOM", "investigación"],
    content: `
Publicamos un artículo que documenta en profundidad la experiencia del **Programa Roberto Arias** — la primera política pública Argentina específicamente orientada a financiar redes comunitarias de Internet.

## El Fondo de Servicio Universal

El FFSU (Fondo Fiduciario de Servicio Universal) se alimenta del **1% de los ingresos** de los prestadores de telecomunicaciones. El Programa Roberto Arias asignó **300 millones de pesos** para proyectos en localidades de hasta **5.000 habitantes**.

## Impacto del Semillero 2022

El Semillero de Redes Comunitarias acompañó a **16 comunidades** en **9 provincias** a preparar sus proyectos — un hito sin precedentes en la conectividad rural argentina.
    `,
  },
  // ─── 2022 ───
  {
    slug: "ieee-premio-semillero",
    title: "IEEE reconoció con el primer premio al Semillero de Redes Comunitarias",
    date: "2022-11-03",
    dateDisplay: "3 noviembre, 2022",
    author: "AlterMundi",
    excerpt:
      "El IEEE reconoció la experiencia del Semillero de Redes Comunitarias de AlterMundi como una de las iniciativas más destacadas en conectividad rural del año.",
    tags: ["IEEE", "Semillero", "redes comunitarias", "reconocimiento"],
    content: `
¡Orgullo! El **IEEE** (Institute of Electrical and Electronics Engineers) reconoció al **Semillero de Redes Comunitarias** con el **primer premio** de su categoría.

## El Semillero 2022

El Semillero fue un proceso de formación y acompañamiento técnico-social que reunió a comunidades de toda Argentina, específicamente orientado a las postulantes al **Programa Roberto Arias de ENACOM**.

- **16 comunidades** en **9 provincias** de Argentina
- Talleres presenciales y virtuales durante varios meses
- Herramientas de software libre: LibreMesh, LimeApp, LibreRouter
- Acompañamiento en documentación técnica y administrativa

## El modelo reconocido

El reconocimiento del IEEE valida que el modelo de formación y acompañamiento de AlterMundi —centrado en la **autonomía comunitaria**, el **software libre** y la **apropiación tecnológica**— es una respuesta efectiva a los desafíos de conectividad en territorios rurales y remotos.
    `,
  },
  {
    slug: "battlemesh-v14-2022",
    title: "AlterMundi en la Wireless BattleMesh v14, Roma",
    date: "2022-09-22",
    dateDisplay: "22 septiembre, 2022",
    author: "AlterMundi",
    excerpt:
      "Participamos de la Wireless Battle of the Mesh v14 en Roma, compartiendo los últimos avances en LibreMesh y las experiencias de redes comunitarias en Argentina.",
    tags: ["BattleMesh", "LibreMesh", "redes mesh", "internacional"],
    content: `
El equipo de AlterMundi viajó a **Roma** para participar de la **Wireless Battle of the Mesh v14** (BattleMesh), el encuentro de referencia internacional para activistas e investigadores de redes inalámbricas libres.

## Qué presentamos

Compartimos los avances técnicos más recientes de **LibreMesh**:
- El nuevo protocolo APuP (Access Point Micro Peering)
- Mejoras en el sistema de coordinación Shared State
- Experiencias de despliegue comunitario en zonas rurales de Argentina

## La comunidad global de redes mesh

La BattleMesh conecta proyectos de todo el mundo: Freifunk (Alemania), ninux (Italia), Guifi.net (España), Village Telco (Sudáfrica). AlterMundi es una voz reconocida en este ecosistema global, especialmente por la perspectiva del **Sur Global**.
    `,
  },
  {
    slug: "semillero-roberto-arias-2022",
    title: "Ya arrancamos con el Semillero de Redes Comunitarias para postulantes al Roberto Arias",
    date: "2022-05-21",
    dateDisplay: "21 mayo, 2022",
    author: "AlterMundi",
    excerpt:
      "Lanzamos el Semillero de Redes Comunitarias 2022 para acompañar a comunidades que quieren postularse al Programa Roberto Arias de ENACOM.",
    tags: ["Semillero", "Programa Roberto Arias", "formación", "ENACOM"],
    content: `
Lanzamos oficialmente el **Semillero de Redes Comunitarias 2022**, un proceso de acompañamiento integral para comunidades que desean postularse al **Programa Roberto Arias de ENACOM**.

## ¿Qué es el Semillero?

El Semillero ofrece:
- **Formación técnica**: qué es una red mesh, cómo funciona LibreMesh y LimeApp, instalación y configuración de LibreRouter
- **Formación organizacional**: aspectos legales, licencia VARC, RUPeCo
- **Acompañamiento en la postulación**: preparación de la carpeta técnica y administrativa

## Quiénes pueden participar

Personas jurídicas sin fines de lucro que ya tengan o estén tramitando su **licencia VARC** ante ENACOM.

El Programa Roberto Arias es la primera política pública nacional que financia redes comunitarias con el Fondo de Servicio Universal — y el Semillero existe para que las comunidades puedan acceder a ese financiamiento de manera autónoma.
    `,
  },
  // ─── 2021 ───
  {
    slug: "primera-red-100-librerouter",
    title: "AlterMundi y la primera red comunitaria de Internet 100% LibreRouter",
    date: "2021-05-04",
    dateDisplay: "4 mayo, 2021",
    author: "AlterMundi",
    excerpt:
      "Las Calles, Córdoba: la Cooperativa de Trabajo Orgánica puso en marcha la primera red comunitaria argentina construida exclusivamente con equipos LibreRouter.",
    tags: ["LibreRouter", "redes comunitarias", "Córdoba", "hitos"],
    content: `
Desde **Las Calles, Valle de Calamuchita, Córdoba**, llegó una noticia histórica: la **Cooperativa de Trabajo Orgánica (CTO)** puso en marcha la primera red comunitaria de Internet de Argentina construida **exclusivamente con equipos LibreRouter**.

## Un proceso colectivo de formación y apropiación

La red no llegó de un día para otro. Fue el resultado de meses de:
- **Talleres de formación** con facilitación de AlterMundi
- **Mapeo participativo** del territorio y análisis de puntos de montaje
- **Planificación colaborativa** de la infraestructura
- **Despliegue en comunidad**: la misma gente instaló los equipos con guía técnica

## La tecnología

El **LibreRouter** es hardware diseñado específicamente para redes comunitarias rurales:
- Multi-radio (2.4 GHz + 5 GHz × 2) para enlaces de largo alcance
- Para exteriores, resistente a la intemperie
- LibreMesh preinstalado
- Gestionable desde **LimeApp** sin conocimientos técnicos expertos

## Por qué este hito importa

Que una comunidad pueda construir, operar y mantener su propia red —sin depender de empresas ni técnicos externos— es exactamente el objetivo del trabajo de AlterMundi desde 2011.
    `,
  },
  // ─── 2020 ───
  {
    slug: "nuevas-redes",
    title: "10 nuevas redes comunitarias en Argentina",
    date: "2020-09-29",
    dateDisplay: "29 septiembre, 2020",
    author: "AlterMundi",
    excerpt:
      "En plena pandemia, 10 nuevas redes comunitarias pusieron en marcha sus conexiones en diferentes provincias de Argentina, financiadas por APC e ISOC.",
    tags: ["redes comunitarias", "pandemia", "APC", "ISOC", "LibreMesh"],
    content: `
Aún en el contexto de la **pandemia de COVID-19**, 2020 fue un año récord para las redes comunitarias en Argentina: **10 nuevas redes** pusieron en marcha sus conexiones en distintos puntos del país.

## Las redes

Entre las nuevas redes comunitarias:
- **LibreGrandeNet** — Córdoba
- **MonteNet** — Córdoba
- **Río Los Sauces** — Córdoba
- **GranjaLibre** — provincia de Buenos Aires
- **MolinosComunitaria** — norte argentino
- **ElValleReinicia** — noroeste
- Y cuatro proyectos más en diferentes etapas de despliegue

Cada una usa **LibreMesh** como firmware y **LibreRouter** como hardware, y es gestionada por la propia comunidad.

## El financiamiento

Este "semillero" fue posible gracias a **APC** (Association for Progressive Communications) e **ISOC** (Internet Society), que confiaron en el modelo de redes comunitarias impulsado por AlterMundi.

## En pandemia, conectarse es un derecho

La pandemia demostró de manera descarnada la importancia del acceso a internet para garantizar el derecho a la educación, el trabajo, la salud y la comunicación. Las redes comunitarias fueron una respuesta real, soberana y a escala humana a esta necesidad.
    `,
  },
];

export type Post = typeof posts[0];
