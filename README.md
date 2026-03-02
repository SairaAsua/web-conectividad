# 🌐 web-conectividad — AlterMundi

> **"Hacemos Internet con las comunidades."**
> Sitio web institucional de [AlterMundi](https://altermundi.net) dedicado al trabajo de conectividad comunitaria: redes mesh, LibreRouter, LibreMesh, formación e incidencia pública.

---

## Tecnologías

| Tecnología | Versión |
|---|---|
| [Next.js](https://nextjs.org/) (App Router) | 16.x |
| React | 19.x |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |

---

## Estructura del proyecto

```
altermundi/
├── app/
│   ├── page.tsx              # Inicio — hero video, impacto, timeline, partners
│   ├── redes/                # Qué son las redes comunitarias
│   ├── libremesh/            # Software mesh libre
│   ├── librerouter/          # Hardware open source
│   ├── librerouter-os/       # LibreRouterOS + LimeApp
│   ├── id/                   # Investigación y Desarrollo (ASN AS264607)
│   ├── incidencia/           # Política pública, VARC, RUPECO, CARC, IGF
│   ├── formacion/            # Semillero, FOQSI, talleres
│   ├── videos/               # Documentales y tutoriales
│   ├── recursos/             # Repos, documentación, prensa
│   ├── blog/                 # Novedades
│   └── contacto/             # Contacto
├── components/
│   ├── Navbar.tsx            # Navegación principal con dropdowns
│   └── Footer.tsx            # Footer institucional
├── lib/
│   └── data.ts               # Fuente única de datos (timeline, redes, equipo, partners…)
└── public/
    └── images/               # Fotos de campo, logos, hero MP4, personas
```

---

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

```bash
# Build de producción
npm run build
npm start

# Linter
npm run lint
```

---

## Contenido cubierto

### Páginas principales

| Ruta | Contenido |
|---|---|
| `/` | Hero con video, cifras de impacto, timeline 2011–2025, redes acompañadas, videos destacados, partners, equipo |
| `/redes` | Definición, principios, redes emblemáticas, CARC, cómo arrancar una red |
| `/libremesh` | Qué es LibreMesh, arquitectura mesh, repositorios, comunidad |
| `/librerouter` | Hardware LR1: 3 radios, specs completas, kit, instalación, V2.0, videos |
| `/librerouter-os` | LibreRouterOS, LimeApp, interfaz web |
| `/id` | I+D: ASN AS264607, LACNIC, investigación técnica |
| `/incidencia` | 1ª licencia ENACOM 2018, Programa Roberto Arias, VARC, RUPECO, IGF/ONU, UIT-D, WSIS 2023 |
| `/formacion` | Semillero 2022 (16 comunidades / 9 provincias), FOQSI, talleres, acompañamiento |
| `/videos` | Galería de documentales y tutoriales YouTube |
| `/recursos` | Documentación, repos, prensa |
| `/contacto` | Formulario y datos de contacto |

### Datos centralizados (`lib/data.ts`)

Toda la información dinámica vive en un solo archivo:

- **`timeline`** — 13 hitos 2011–2025
- **`stats`** — cifras de impacto (+13.500 personas, +20 redes, 9 provincias, +13 años)
- **`redesAcompanadas`** — 6 redes emblemáticas con íconos y links
- **`partners`** — 8 organizaciones aliadas (ARDC, APC, ISOC, INTI, ENACOM, CARC, LibreMesh, IEEE)
- **`videos`** — 4 videos destacados con thumbnails de YouTube
- **`carc`** — Cumbre Argentina de Redes Comunitarias
- **`equipo`** — Nicolás Echániz y Jésica Giudice con bio e IGF/UIT-D

---

## Imágenes

Las imágenes viven en `public/images/` y se referencian con rutas `/images/...`.

```
public/images/
├── hero/                         # Hero MP4 + JPGs de portada
├── logos/                        # Logos de partners
├── personas/                     # Fotos del equipo
└── proyectos/
    ├── librerouter/              # Fotos reales del LibreRouter LR1
    ├── formacion/                # Talleres y capacitaciones
    ├── semillero-2022/           # Semillero de redes
    └── red-foqsi/                # Red FOQSI
```

---

## Estilos

Clases utilitarias globales definidas en `app/globals.css`:

| Clase | Uso |
|---|---|
| `.card` | Tarjeta blanca con sombra |
| `.card-dark` | Tarjeta oscura (`--azul-noche`) |
| `.field-card` | Tarjeta con borde izquierdo de color |
| `.btn-primary` | Botón celeste principal |
| `.btn-green` | Botón verde |
| `.btn-yellow` | Botón amarillo/naranja |
| `.btn-secondary` | Botón outline |
| `.terminal` | Bloque de código estilo terminal |
| `.section-title` | Título de sección con underline |
| `.gradient-celeste` | Texto degradado celeste |
| `.gradient-verde` | Texto degradado verde |
| `.network-bg-dark` | Fondo de red animado (SVG) |

---

## Sobre AlterMundi

AlterMundi es una Asociación Civil argentina fundada en 2011. Diseña y construye tecnología libre (hardware + software + formación) para que comunidades rurales y remotas desplieguen su propia infraestructura de telecomunicaciones con autonomía y gobernanza local.

- **ASN propio:** AS264607 (LACNIC)
- **Email:** info@altermundi.net
- **YouTube:** [AlterMundiNet](https://www.youtube.com/c/AlterMundiNet/videos)
- **Foro:** [foro.librerouter.org](https://foro.librerouter.org/)
- **Docs:** [docs.altermundi.net](http://docs.altermundi.net/)
- **GitLab:** [gitlab.com/librerouter](https://gitlab.com/librerouter)
- **GitHub:** [github.com/libremesh/lime-packages](https://github.com/libremesh/lime-packages)

---

*Hecho con Next.js 16 + Tailwind CSS 4 · Licencia libre*
