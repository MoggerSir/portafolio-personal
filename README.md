# Portafolio - Josmar Francisco Galindo Ocampo

¡Bienvenido a mi portafolio personal! Este proyecto es una vitrina de mi progreso como estudiante de ingeniería en software y desarrollador frontend en formación. El sitio presenta una estética gótica minimalista con un enfoque en la legibilidad y la interactividad.

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica para mejorar la accesibilidad y el SEO.
- **CSS3 Moderno**:
  - **Variables CSS (Custom Properties)**: Para un manejo consistente de la paleta de colores y fuentes.
  - **Flexbox & CSS Grid**: Layouts complejos como el sistema "Bento" en la sección de información personal.
  - **Animaciones (Keyframes)**: Micro-interacciones sutiles en iconos y botones.
  - **Diseño Responsivo**: Adaptabilidad completa a dispositivos móviles y tablets.
- **JavaScript (ES6+)**:
  - Manipulación dinámica del DOM.
  - Lógica modular para la creación de componentes.

## Lógica del Proyecto

### JavaScript (`js/CartsCreation.js`)

El corazón de la interactividad del sitio reside en una lógica de generación dinámica de contenido. En lugar de escribir cada proyecto manualmente en HTML, se utiliza una estructura de datos que permite escalar el portafolio fácilmente.

1.  **Función `CrearElemento`**: Es una función de utilidad genérica que simplifica la creación de elementos HTML, permitiendo asignar propiedades (como `innerText`, `src`) y clases CSS de forma eficiente.
2.  **Función `agregarProyecto`**: Esta función recibe los datos de un proyecto (título, descripción, imagen, link) y utiliza `CrearElemento` para construir una "tarjeta" completa que luego se inyecta en el contenedor principal.
3.  **Sistema de Overlay (`expandirImagen`)**: Una funcionalidad integrada que permite ver las capturas de pantalla de los proyectos en pantalla completa al hacer clic en ellas, mejorando la experiencia de usuario sin necesidad de librerías externas.

### CSS y Diseño (`css/style.css`)

- **Estética Gótica**: Se utiliza una paleta de colores oscuros (`#050505`, `#222020`) con acentos en rojo intenso (`#800000`) para crear un ambiente profesional y único.
- **Bento Grid**: La sección "Sobre mí" y "Habilidades" utiliza un layout tipo Bento (estilo Tetris), optimizando el espacio y presentando la información de forma visualmente atractiva.
- **Efectos Visuales**: Uso de `backdrop-filter` para el efecto de desenfoque en el encabezado pegajoso y filtros de escala de grises que se activan al pasar el mouse (`hover`).

### HTML (`index.html`)

- Se ha priorizado el uso de etiquetas semánticas como `<header>`, `<main>`, `<section>` y `<footer>` (simulado en el bento de contacto).
- Implementación de scroll suave (`smooth scroll`) nativo mediante atributos `onclick` que llaman a `scrollIntoView`.

## Estructura de Archivos

```
Portafolio/
├── index.html         # Página principal
├── css/
│   └── style.css      # Estilos y diseño
├── js/
│   └── CartsCreation.js # Lógica de creación de tarjetas
├── img/               # Recursos visuales e iconos
└── README.md          # Documentación del proyecto
```

## Cómo agregar nuevos proyectos

Para añadir un nuevo proyecto al portafolio, simplemente abre `js/CartsCreation.js` y añade una nueva llamada a la función:

```javascript
agregarProyecto(
  "Nombre del Proyecto",
  "Descripción breve del mismo.",
  "img/tu-imagen.png",
  "https://github.com/TuUsuario/TuRepo",
);
```

---

_Desarrollado con pasión por [Josmar Francisco Galindo Ocampo](https://github.com/MoggerSir)_
