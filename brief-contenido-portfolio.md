# Brief de contenido y estructura - Portfolio Natalia Moin Fanner

Base para migrar de Framer (nmoinfanner.framer.website) a un sitio codeado en Next.js con Claude Code.

## Posicionamiento a unificar

El sitio actual dice "Senior Designer, Brand & Web" en el hero, pero la meta description y el label del proyecto Cresta todavía dicen "Creative Director". En el nuevo sitio, todo debe quedar consistente en:

- Senior Designer
- Senior Visual Designer
- Senior Web Designer

Sin ninguna mención a "Creative Director" en ningún lugar (meta tags, labels de proyecto, bio).

## Estructura de páginas y secciones

### 1. Home

**Hero**
- Eyebrow: `Senior Designer, Brand & Web`
- Headline: `BUILT TO COMMUNICATE. NOT JUST TO IMPRESS.` (funciona bien, se mantiene)
- Subhead (pulir en inglés nativo, base actual): *"8+ years designing brand identities and websites that hold up under scrutiny, whether that means leading a project solo or plugging straight into your team."*
- CTA: `View my work` → scroll a proyectos

**Sobre mí (teaser)**
- Base actual: *"I'm a graphic designer with a degree from the Universidad de Buenos Aires and over 8 years of experience working across agencies, independent projects, and in-house creative roles. I've led brand systems for multi-market companies, redesigned websites from the ground up, and directed creative strategy for a US-based digital marketing agency, all remotely."*
- Nota: sacar "directed creative strategy" o reformular para no sonar a Creative Director. Podría ser: *"led design strategy"* o *"led the design function"*.
- Link: `More about me` → página About

**Servicios: se incluye como página separada**

Se vuelve sobre la decisión anterior: al quedar en su propia página y no mezclado en el home, no compite con el tono de portfolio. El home no lleva sección de servicios ni tags de capacidades; eso queda para la página Services.

**Proyectos destacados** (grid o lista con animación de entrada al hacer scroll)
1. Cresta
2. Live-Oak Veterinary
3. Prosolar
4. Social Performance: Duracell Puerto Rico e ISBUSA (Iv San Bernard USA), las dos marcas del case study combinado
5. ModoMio
6. Motion & Creative Skills

**Contacto / CTA final**
- *"If you have a project that needs both strategic thinking and hands-on design, let's talk!"*
- Email + WhatsApp

### 2. About (página propia)
- Bio extendida: Universidad de Buenos Aires, R/GA San Francisco, Blue Edge Business Solutions
- Sacar cualquier framing de dirección/management, reforzar ejecución senior con criterio

### 3. Case studies individuales (una página por proyecto)
- Cresta - *"Building a brand from scratch: naming, visual system, and digital product"*
- Live-Oak - *"Full UX audit and redesign for a specialty hospital: four real user journeys, one navigation trying to serve all of them at once."*
- Prosolar - *"5 years of brand work that now feeds lead-gen campaigns generating 5,500+ leads."*
- ModoMio - *"A brand built from zero for an itinerant dining experience in Milan."*
- Motion - *"Beyond static design: video, animation, illustration, and 3D as tools for communication."*
- Duracell + ISBUSA - *"Two brands, two different starting points, one job: make it perform."* (case study combinado de paid social)

### 4. Contacto
Sección ancla en el home, o página propia si querés un formulario más completo.

### 5. Blog (nuevo)
Se agrega pensando en SEO y en aparecer en búsquedas orgánicas. No hace falta definir todo el contenido ahora, alcanza con dejar la estructura (listado + página de artículo) lista para ir sumando posts más adelante.

## Plantilla base de página de proyecto

Esto es clave para la parte técnica: en vez de programar seis páginas distintas, se arma un solo componente de plantilla y cada proyecto es un bloque de datos (título, imágenes, textos) que llena esa plantilla. Así en Claude Code se construye una vez y después es copiar el bloque de datos y reemplazar texto e imágenes, tal como pediste.

Estructura de la plantilla (algunos bloques son opcionales según qué tan documentado esté el proyecto):

1. **Cover**: título grande centrado, one-liner de resultado debajo, imagen hero grande
2. **Overview**: dos columnas. Izquierda, el challenge o brief original en un par de párrafos. Derecha, ficha técnica corta: Services, Industry, Year, y Live Website con botón si el sitio está publicado
3. **Scope of Work / Key decisions**: un párrafo corto + bullets con las decisiones de diseño y el porqué (tu formato preferido, sin párrafos largos)
4. **Galería de proceso** (opcional, solo para proyectos con material como Live-Oak): wireframes, personas, capturas de proceso, mockups del entregable final
5. **Final Outcome**: bullets o párrafo con resultados, cuantificables cuando existan (ej. Prosolar con los 5.500+ leads)
6. **Next project**: dos cards de proyectos relacionados con su tag y thumbnail, en vez de un solo link de "siguiente"

Con esto, Live-Oak usa todos los bloques completos, y algo como ModoMio puede saltear la galería de proceso sin que la página se sienta vacía. Ver design-referencia-jenny-m.md para el detalle visual exacto de esta plantilla.

## Checklist de copy a pulir (inglés nativo)

- [ ] Nueva meta description (sin "Creative Director")
- [ ] Subhead del hero, versión final
- [ ] Bio corta para el teaser de About
- [ ] Renglón corto de capacidades para reemplazar la sección de servicios

## Assets a reunir antes de programar

- Logo / logotype en vectorial
- Fotos de cada proyecto en alta resolución
- Video reel de motion para la sección Motion & Creative Skills
- Tipografías Cal Sans y Outfit en formato web (woff2)
- Paleta de colores: cream/navy del CV, más la paleta de Cresta si esa página la necesita (#F3EEE2, #1C1C1A, #E4632A, #3B5E45)

## Decisiones resueltas

1. Social Performance = Duracell Puerto Rico + ISBUSA, se mantiene como case study combinado.
2. Se saca la sección de servicios completa, se reemplaza por un renglón corto de capacidades.
3. Las páginas de proyecto usan una plantilla base única con bloques opcionales, ver sección "Plantilla base de página de proyecto".
