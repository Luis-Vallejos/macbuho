# Proyecto MacBuho

Proyecto educativo que realiza **scraping** de la página de [Apple](https://www.apple.com) utilizando [Node.js](https://nodejs.org/) y [Puppeteer](https://pptr.dev/). 
Su objetivo principal es mostrar cómo extraer y gestionar datos de un sitio web de manera estructurada y didáctica.

Desarrollado por: **Luis Miguel Vallejos Evangelista**.

---

## Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías Usadas](#tecnologías-usadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Configuración](#instalación-y-configuración)
- [Uso](#uso)
- [Archivos Clave](#archivos-clave)
- [Buenas Prácticas y Recomendaciones](#buenas-prácticas-y-recomendaciones)
- [Licencia](#licencia)
- [Autor](#autor)

---

## Descripción

Este proyecto **MacBuho** se centra en:
1. **Scraping** a la página de Apple para recolectar información de productos.
2. **Almacenamiento** de la información en formato JSON, dentro de la carpeta `json` (u otra ubicación, según convenga).
3. **Visualización** (opcional) y manipulación de la información mediante varios archivos `.php`, `.css`, y `.js`.

> **Nota:** El scraping se realiza **exclusivamente con fines educativos**, sin intención de violar los términos de servicio
            de la página de Apple ni de incurrir en uso indebido de la información.

---

## Tecnologías Usadas

- **Node.js** (versión 14 o superior recomendada)
- **NPM** (o Yarn) como gestor de paquetes
- **Puppeteer** como biblioteca principal para el scraping
- **PHP** para la capa de presentación (ej. `index.php`, `iphone.php`, etc.)
- **CSS** (por ejemplo, `modal.css` y `style.css`) para el estilo y diseño
- **JavaScript** (por ejemplo, `script.js`, `mobile.js`) para la interactividad en cliente

---

## Estructura del Proyecto

A partir de la captura que se muestra, la estructura se vería más o menos así:

```
MACBUHO/
├── bloqueo/                  
│   └── css/
│       ├── modal.css
│       └── style.css
├── fonts/                    # Fuentes tipográficas
├── images/                   # Recursos gráficos
├── js/                       # Scripts front-end
│   ├── mobile.js
│   └── script.js
├── json/                     # Archivos JSON resultantes del scraping
│   ├── ipad.json
│   ├── iphone.json
│   └── watch.json
├── json_test/                # Carpeta de pruebas adicionales (opcional)
├── node_modules/             # Dependencias instaladas de Node.js
├── get_json_apple.js         # Script principal de Puppeteer para obtener información de Apple
├── index.php                 # Archivo PHP principal (punto de entrada)
├── ipad.php                  # Ejemplo de endpoint o vista para iPad
├── iphone.php                # Ejemplo de endpoint o vista para iPhone
├── package.json              # Archivo de configuración de npm
├── package-lock.json         # Archivo de lock para npm
├── robots.txt                # Directiva para bots de indexación
├── section_footer.php        # Sección de footer incluida en varias páginas
├── section_head.php          # Sección de head incluida en varias páginas
└── watch.php                 # Ejemplo de endpoint o vista para Apple Watch
```

> **Importante:** Cada carpeta y archivo puede tener una función específica dentro de tu proyecto, por lo que se
                  recomienda mantener la coherencia al momento de editar o extender la funcionalidad.

---

## Instalación y Configuración

1. **Clonar o Descargar el Repositorio:**
   ```bash
   git clone https://github.com/Luis-Vallejos/macbuho.git
   cd macbuho
   ```

2. **Instalar Dependencias:**
   Asegúrate de tener instalado Node.js y npm (o Yarn). Luego, ejecuta:
   ```bash
   npm install
   ```
   Esto instalará `puppeteer` y las demás dependencias listadas en tu `package.json`.

3. **Verificar el archivo `package.json`:**
   - Asegúrate de contar con los scripts necesarios, por ejemplo:
     ```json
     "scripts": {
       "scrape": "node get_json_apple.js",
       "start": "node index.js",
       "test": "echo \"No test specified\" && exit 0"
     }
     ```
   - Ajusta estos scripts según la forma en que quieras invocar a Puppeteer o a tu servidor local.

---

## Uso

1. **Ejecución del Scraping:**
   - Una vez que las dependencias estén instaladas, puedes ejecutar:
     ```bash
     npm run scrape
     ```
     o bien:
     ```bash
     node get_json_apple.js
     ```
   - Esto abrirá una instancia de Chromium (mediante Puppeteer) y procederá a extraer la información definida en el script `get_json_apple.js`.  
   - Los datos resultantes se guardarán en formato JSON en la carpeta `json` (por ejemplo, `iphone.json`, `ipad.json`, `watch.json`).

---

## Archivos Clave

- **`get_json_apple.js`**  
  Contiene la lógica de Puppeteer para navegar hasta la página de Apple, extraer la información requerida y guardarla en JSON. Esta es la columna vertebral del scraping.

- **`package.json`**  
  Lista las dependencias y scripts para tu proyecto Node.js. Asegúrate de mantener las versiones actualizadas y ordenadas.

- **`iphone.php`, `ipad.php`, `watch.php`**  
  Archivos de PHP para la visualización de datos en distintas secciones. Se recomienda que cada uno lea un JSON correspondiente y muestre sus datos.

- **`section_head.php`, `section_footer.php`**  
  Secciones de encabezado y pie que probablemente se incluyan dinámicamente en las páginas. Te ayudan a mantener la consistencia en la UI.

- **Carpeta `json/`**  
  Donde se almacenan los resultados del scraping. Cada archivo JSON corresponde a una categoría de productos (ej. `iphone.json`, `ipad.json`, etc.).

---

## Buenas Prácticas y Recomendaciones

1. **Respeto a los Términos de Servicio**  
   Asegúrate de que el scraping que realices cumpla con los términos de uso de la página objetivo y no genere sobrecarga al servidor.

2. **Desarrollo Modular**  
   Mantén la lógica de scraping organizada en funciones. Si planeas agregar más páginas o secciones de Apple, crea funciones específicas para cada caso.

3. **Control de Errores**  
   Maneja posibles excepciones (promises, timeouts) en Puppeteer para evitar que el proceso falle sin avisar.

4. **Actualizaciones Frecuentes**  
   Apple puede cambiar el contenido o la estructura de su página, lo que puede romper tu scraper. Actualiza la lógica según sea necesario.

5. **Optimización de Descarga y Almacenamiento**  
   Si manejas grandes volúmenes de información, considera técnicas como streams o compresión para manejar los datos de manera más eficiente.

---

## Licencia

Este proyecto se distribuye con fines educativos. Se recomienda incluir una licencia (por ejemplo, [MIT License](https://opensource.org/licenses/MIT)) para indicar los términos de uso y distribución.

---

## Autor

**Luis Miguel Vallejos Evangelista**  
Proyecto desarrollado para fines educativos.  
Correo: [vallejosevangelistaluis@gmail.com](mailto:vallejosevangelistaluis@gmail.com)  
GitHub: [github.com/Luis-Vallejos](https://github.com/Luis-Vallejos)

---

> **¡Gracias por usar MacBuho!**  
> Cualquier sugerencia o retroalimentación para mejorar la estructura y funcionalidad del proyecto es más que bienvenida.
