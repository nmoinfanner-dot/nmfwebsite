# DESIGN.md - Referencia visual, tokens y estructura de proyecto

Base: capturas del template Webflow "Jenny.M" (homepage, projects, services, about, blog, contact, y página interna de proyecto "Boldstream").

Esta referencia se usa para ESTRUCTURA e INTERACCIÓN. El copy del template es genérico y en varios bloques es texto de relleno tipo lorem ipsum (por ejemplo todo el texto de "Project Overview" y "Final Outcome" en la página de proyecto). Ese texto no se copia nunca, ni parcialmente.

## Colores finales

- Texto y títulos: #2E2E2E
- Color para destacados: #90BF79
- Fondo: #EEEEEE
- Fondo de botones: blanco

## Tipografías finales

- Títulos: Cal Sans
- Textos: Outfit, regular
- Botones: Outfit, bold

## Alcance del sitio

- Home
- Services, como página separada (no compite con el tono de portfolio del home)
- Blog, pensado para SEO y que la encuentren por búsqueda orgánica
- About
- Proyectos (listado + página interna por proyecto, ver plantilla abajo)
- Contacto

## Qué reusar de la referencia

### Home: layout tipo bento asimétrico
- Headline grande de fondo semitransparente (nombre + rol) detrás de las tarjetas, da profundidad sin competir con el contenido
- Tarjetas dispersas de distinto tamaño en vez de grid rígido: proyecto reciente, "sobre mí" con foto, CTA con imagen de fondo, stats/social proof, y una tarjeta tipo burbuja de chat como acento personal
- El desorden controlado se siente más artesanal y menos "plantilla corporativa"

### Proyectos: grid de 2 columnas con tags
- Pills de categoría arriba a la izquierda de cada card (Branding, Web Design, Motion)
- Imagen grande, título y one-liner sobre un overlay oscuro en la parte inferior
- Filtro por categoría arriba de la grilla, útil porque tus categorías reales ya son Branding, Web Design y Motion

### About: bloque de Job Experience como tabla
- Formato: empresa, rol, años, un párrafo corto de qué hiciste ahí
- Mapea directo con tu historial real: R/GA San Francisco, Blue Edge Business Solutions

### Página interna de proyecto (referencia: Boldstream)
Estructura de la plantilla, en orden:

1. **Cover**: título grande centrado, one-liner debajo, imagen hero grande
2. **Overview**: dos columnas. Izquierda, dos párrafos de texto (challenge y contexto). Derecha, ficha técnica corta: Services, Industry, Year, Live Website con botón de link
3. **Scope of Work**: un párrafo corto + bullets de decisiones clave (esto es tu "Key decisions")
4. **Galería de proceso**: 3 a 4 imágenes grandes, alguna a ancho completo y otras en 2 columnas
5. **Final Outcome**: párrafo de resultados, con datos cuantificables cuando existan
6. **Next project**: dos cards de proyectos relacionados con su tag y thumbnail, en vez de un solo link de "siguiente"

Esto es consistente con la plantilla base que ya habíamos definido en brief-contenido-portfolio.md, solo que ahora con el detalle exacto de cómo se arma la ficha técnica (Services, Industry, Year, Live Website) y el cierre con proyectos relacionados en vez de un solo link.

## Qué no copiar

- Cualquier texto de relleno tipo lorem ipsum de la página Boldstream (Project Overview y Final Outcome están en inglés sin sentido, son placeholders)
- Stats infladas (000+, 00%) de la página About
- Testimonios genéricos: solo si tenés testimonios reales de clientes. Si no los tenés todavía, se saca la sección entera, no se inventan
- Bloque "Work Process" (Discover, Define, Design...) del About: es genérico de agencia. Mejor documentarlo caso por caso dentro de "Key decisions" de cada proyecto

## Prompt sugerido para Claude Code

```
Adjunto capturas de referencia de un template (Jenny.M): home, proyectos,
about y página interna de proyecto (Boldstream).

Copiá el layout tipo bento asimétrico del home, el grid de proyectos con
pills de categoría, la tabla de Job Experience del about, y la estructura
de la página interna de proyecto (cover, overview con ficha técnica,
scope of work, galería, final outcome, next project).

Usá estos tokens finales:
- Texto y títulos: #2E2E2E
- Destacados: #90BF79
- Fondo: #EEEEEE
- Fondo de botones: blanco
- Títulos en Cal Sans, textos en Outfit regular, botones en Outfit bold

No copies ningún texto del template: usá el contenido de
brief-contenido-portfolio.md. No inventes stats ni testimonios.
```
