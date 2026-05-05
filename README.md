# IOVINO — DJ / Producer

Sitio web oficial de **Iovino** (Lautaro Gómez Iovino), DJ y productor argentino radicado en Barcelona.

Web minimalista, estática, bilingüe (ES / EN), sin dependencias de build — lista para alojarse en cualquier hosting estático (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.).

---

## ✦ Stack

- **HTML5** semántico
- **CSS3** con variables (sin frameworks)
- **JavaScript** vanilla (sin librerías)
- **Google Fonts**: Oswald · Manrope · Cormorant Garamond
- Todo el contenido en un único `index.html` con sistema de i18n por `data-i18n`

Sin Node, sin npm, sin build step. Se abre directamente en el navegador.

---

## ✦ Estructura del proyecto

```
iovino-website/
├── index.html              # Página única bilingüe
├── css/
│   └── styles.css          # Estilos globales
├── js/
│   └── main.js             # Cursor, scroll reveal, i18n, nav
├── assets/
│   ├── images/
│   │   ├── logo-dark.png         # Logo sobre fondo oscuro
│   │   ├── logo-light.jpg        # Logo sobre fondo claro
│   │   ├── iovino-hero-clean.jpg # Foto principal del hero
│   │   ├── iovino-portrait.jpg   # Retrato sección "About"
│   │   └── iovino-moody.jpg      # Foto atmosférica sección "Live"
│   └── presskit/
│       ├── PRESSKIT_26_ESP.pdf
│       └── PRESSKIT_26_EN.pdf
├── .gitignore
└── README.md
```

---

## ✦ Cómo desarrollar localmente

No hace falta build ni dependencias. Tres opciones:

**1. Abrir el archivo directo (más simple)**

```bash
# Solo abre index.html en tu navegador
open index.html       # macOS
xdg-open index.html   # Linux
start index.html      # Windows
```

**2. Servidor local con Python** (recomendado, evita problemas de CORS con fuentes y rutas)

```bash
python3 -m http.server 8000
# Luego abrir http://localhost:8000
```

**3. Servidor local con Node**

```bash
npx serve .
```

---

## ✦ Deploy en GitHub Pages

1. Crear un repositorio nuevo en GitHub (por ejemplo `iovino-website`).
2. Subir los archivos:

```bash
git init
git add .
git commit -m "feat: initial website"
git branch -M main
git remote add origin git@github.com:USUARIO/iovino-website.git
git push -u origin main
```

3. En GitHub: **Settings → Pages → Source → Deploy from a branch → main / root → Save**.
4. La web quedará disponible en `https://USUARIO.github.io/iovino-website/` en uno o dos minutos.

### Para usar dominio propio

- Añadir un archivo `CNAME` en la raíz con el dominio (ej. `iovinomusic.com`).
- En el panel del dominio configurar los registros DNS apuntando a GitHub Pages.

---

## ✦ Cómo mantener el contenido

### Cambiar textos

Todos los textos editables están en dos lugares:

1. **`index.html`** — versión por defecto (español)
2. **`js/main.js`** — diccionario `i18n` con la versión `es` y `en`

Al modificar un texto **hay que actualizarlo en los dos sitios**. La clave que los enlaza es el atributo `data-i18n="seccion.id"` en el HTML.

Ejemplo:

```html
<!-- index.html -->
<h2 data-i18n="about.title">Texto en español por defecto</h2>
```

```javascript
// js/main.js
'about.title': 'Texto en español por defecto',  // dentro de i18n.es
'about.title': 'English text',                  // dentro de i18n.en
```

### Reemplazar fotos

Sustituir las imágenes en `assets/images/` manteniendo los mismos nombres de archivo. Recomendaciones:

| Archivo                  | Uso              | Tamaño sugerido | Formato |
|--------------------------|------------------|-----------------|---------|
| `iovino-hero-clean.jpg`  | Hero (vertical)  | 1200×1700       | JPG     |
| `iovino-portrait.jpg`    | Bio (vertical)   | 1067×1600       | JPG     |
| `iovino-moody.jpg`       | Live (vertical)  | 1266×1900       | JPG     |
| `logo-dark.png`          | Favicon          | 500×500         | PNG transparente |

### Actualizar el press kit

Reemplazar los PDFs en `assets/presskit/` con el mismo nombre de archivo y los enlaces seguirán funcionando.

### Añadir un nuevo lanzamiento

En `index.html`, sección `.labels`, duplicar un bloque `<article class="label-card">` y editar año, nombre y descripción. Recordar añadir las claves `data-i18n` correspondientes en `js/main.js`.

---

## ✦ Personalización rápida (colores y tipografía)

Todas las decisiones visuales están centralizadas en variables CSS al inicio de `css/styles.css`:

```css
:root {
  --bg:      #0a0908;   /* fondo */
  --bone:    #f4ede4;   /* texto principal (color del logo) */
  --wine:    #8b3a3a;   /* acento (rojo del backdrop) */
  --accent:  #c9a37a;   /* highlight cálido */
  --display: 'Oswald', sans-serif;     /* títulos */
  --body:    'Manrope', sans-serif;    /* cuerpo */
  --serif:   'Cormorant Garamond', serif; /* itálicas */
}
```

Cambiar cualquiera y se actualiza en todo el sitio.

---

## ✦ Características incluidas

- Hero con animación de letras escalonada (reveal letter-by-letter)
- Marquee continuo con los sellos discográficos
- Sistema bilingüe ES / EN con persistencia en localStorage
- Cursor personalizado en desktop (se desactiva en touch)
- Scroll reveal con IntersectionObserver
- Navegación fija con efecto blur al hacer scroll
- Menú hamburguesa responsive en mobile
- Grain overlay sutil para textura
- Soporte de `prefers-reduced-motion` para accesibilidad
- Open Graph metadata para compartir en redes
- 100% responsive (mobile-first breakpoints en 600 / 700 / 800 / 900px)

---

## ✦ Contacto del artista

- **Email**: lgomeziovino@outlook.com
- **Instagram**: [@iovino__](https://instagram.com/iovino__)
- **SoundCloud**: [@iovinomusic](https://soundcloud.com/iovinomusic)

---

© 2026 Lautaro Gómez Iovino. All rights reserved.
