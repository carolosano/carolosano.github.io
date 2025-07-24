# Changelog



## [2.2.0] - 2025-07-24

- Se creó un archivo JSON para que la API consuma mis datos de los packs y los renderice, lo utilice de forma asincrona
- Implemento un recorrido óptimo de las colecciones utilizando funciones como map.



### 🔧 Cambios
- Se reemplazó el contenido estático de los packs en HTML por una carga dinámica desde el archivo `packs.json`, usando `fetch` y renderizado automático en el DOM.
- Corrección del error de lectura de `undefined` en `agregarPackAlCarrito`.
- Archivo `packs.json` para almacenar los datos de los packs de forma estructurada en formato JSON, con el objetivo de que la API lo consuma dinámicamente.
- Template de pull request (`.github/pull_request_template.md`) para estandarizar la revisión de cambios.
- Reglas de protección en ramas `main` y `develop` para forzar uso de Pull Requests con revisión.
- Estructura modular con `Producto.js` y `packAlternativo.js`.
- Renderizado básico de packs en el DOM.
- Funcionalidad para agregar packs al carrito y almacenarlos en `localStorage`.



## [2.1.0] - 2024-11-18
- Funcionalidad:
● Se simula uno o más flujos de trabajo en términos de entrada, proceso y salida.
- Interactividad:
● Se capturan entradas ingresadas por el usuario mediante eventos.
● Se efectúan una o más salidas por HTML modificando el DOM. (todavia tengo errores)
- Escalabilidad:
● Se declaran funciones con parámetros para los packs armados.
● Se emplean arrays para agrupar valores de los packs.
● Trato de almacenar en storage los elementos armados en el pack por el usuario ********************************************* (no muy bien implementado)
- Integridad:
● Se define el código JavaScript en un archivo .js, referenciándolo correctamente desde el HTML.
● La información estática del proyecto se emplea adecuadamente


## [2.0.0] - 2024-10-21

- Algoritmos:
● Utilizo algoritmo condicional y con ciclo (IF, bucles for)
- Funciones:
● Los nombres de las funciones son claros y dan a entender que acción
realizan.
● Se crearon funciones y métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
● Se emplea la estructura correcta para el armado de las mismas.
● Se crean funciones dinámicas de manera correcta.
● Y generan un resultado optimo cuando se ejecutan
- Funcionalidad:
● Se simula un flujo de trabajo en términos de entrada, proceso y salida.
● Pensar el alcance de tu proyecto: Una agencia que proporciona servicios
- Interactividad:
● Se capturan una o más entradas ingresadas por el usuario con prompt().
● Se efectúan una o más salidas con alert() y console.log(). Las salidas son coherentes en relación a los datos ingresados.
- Escalabilidad:
● Se declaran funciones con parámetros para definir instrucciones con una tarea específica.
● Se emplean arrays para agrupar valores relacionados.
● Se definen objetos con propiedades y métodos relevantes al contexto.
- Integridad:
● Se define el código JavaScript en un archivo .js, referenciándolo correctamente desde el HTML.
● Se emplea correctamente prompt() y alert().


## [1.2.0] - 2024-10-3 PARCIAL 01
- Incorporación de Componentes Avanzados de HTML:
● AgregUE al varios componentes avanzado de HTML a la página, por ejemplo: un mapa de Google Maps
-  Implementación de Diseño Responsivo:
● Instalé la biblioteca Tailwind en el proyecto (no utilicé Bootstrap)
● Utilicé un sistema de columnas de Taildwind para hacer que el sitio sea más responsivo en dispositivos móviles.
● Incluí un carrusel y una barra de navegación.
-  Gestión del Proyecto con GitHub:
● Realicé commits significativos sobre la rama de desarrollo.
● Se creó una rama "release/primer-parcial" a partir de la rama "develop" utilizando el flujo de trabajo de Git para desarrollar las funcionalidades requeridas.

## [1.1.0] - 2024-09-16

- Mejoras en la Maquetación CSS:
Utilizcé hojas de estilo en cascada (CSS) para mejorar el diseño visual de la página.
● Apliqué estilos utilizando diferentes tipos de selectores y aproveché la
herencia de estilos para simplificar el código.
● Implementé formatos y fuentes para mejorar la legibilidad y la estética
del contenido.
● Utilicé modelos de caja (box model) para controlar el tamaño, margen,
relleno y bordes de los elementos de la página.
● Diferencié entre elementos en línea y elementos en bloque mediante
estilos CSS apropiados.
- Diseño de Columnas y Layouts Responsive:
● Implementé columnas utilizando elementos flotantes, display: flex y display: grid.
● Utilicé media queries para crear un diseño responsive que se adapte a diferentes tamaños de pantalla y dispositivos.
● Estructuré layouts utilizando contenedores, filas y columnas para mejorar la organización y la legibilidad del contenido.

## [1.0.0] - 2024-08-25
- Se creó una rama "master" y una rama "develop" en el repo
- Se creó una rama "feature/primera-entrega" y habilité GitHub Pages para ese branch para poder hacer host  y visualizar la página correspondiente.
- Realicé los commits necesarios sobre ese branch para desarrollar la página.
- Se creó una pull request contra la rama "develop" y la dejé abierta

- Estructura HTML:
● Utilicé HTML5 para estructurar la página
● Incluye elementos básicos como título, párrafos, imágenes, enlaces, listas y
formularios 
● Introduje etiquetas semánticas pertinentes para mejorar la accesibilidad y el SEO.
- Maquetación CSS:
No realizado aún

