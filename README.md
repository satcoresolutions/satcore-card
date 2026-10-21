 <div align="center">

<img src="./public/logo.png" alt="SatCore Solutions" width="220" />

# Tarjeta digital · SatCore

**Tu identidad profesional en una tarjeta digital, accesible desde cualquier dispositivo.**

Aplicación web para presentar información de contacto y enlaces profesionales en un solo lugar. Permite contactar por WhatsApp, realizar llamadas, enviar correos, visitar redes sociales, consultar una ubicación, guardar el contacto y compartir la tarjeta.

---

### SOFTWARE AND TECHNOLOGY CORE SOLUTIONS

**SATCORE SOLUTIONS**

_Soluciones digitales seguras, accesibles y funcionales para todos._

[![License](https://img.shields.io/badge/License-SCSAL%201.0-000000.svg)](./LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-SatCore%20Solutions-181717?logo=github)](https://github.com/satcoresolutions)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-Package_Manager-CB3837?logo=npm)](https://www.npmjs.com/)

</div>

---

# Sobre el proyecto

**Tarjeta digital · SatCore** es una aplicación web desarrollada por **SatCore Solutions**, como parte del ecosistema de soluciones tecnológicas de **SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**.

Su propósito es centralizar la información de contacto y los enlaces profesionales de una persona o negocio en una tarjeta digital fácil de consultar y compartir.

La aplicación facilita la comunicación directa con el titular de la tarjeta sin necesidad de recorrer múltiples plataformas para encontrar sus datos de contacto.

Este repositorio forma parte de los proyectos tecnológicos de SatCore Solutions y su uso se encuentra sujeto a los términos de la **SatCore Solutions Attribution License — SCSAL 1.0**.

---

# SatCore Solutions

**SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**

**Nombre comercial:** SatCore Solutions

**Eslogan:**

> _Soluciones digitales seguras, accesibles y funcionales para todos._

SatCore Solutions desarrolla soluciones digitales orientadas al desarrollo de software, la automatización, la inteligencia artificial, la ciberseguridad, la formación tecnológica y las herramientas digitales.

Sus áreas de trabajo son:

### Desarrollo

Creación de sitios web, aplicaciones, plataformas y herramientas de software.

### Automatizador

Automatización de procesos, integración de servicios y agentes inteligentes.

### Seguridad

Ciberseguridad, protección de sistemas y buenas prácticas de seguridad digital.

### Estudio

Formación tecnológica, documentación y recursos de aprendizaje.

### Marketing

Presencia digital, identidad de marca, contenido y herramientas de comunicación.

---

# Características

- Presentación de un perfil profesional o comercial.
- Acceso directo a WhatsApp.
- Acciones para realizar llamadas telefónicas y enviar correos electrónicos.
- Enlaces a redes sociales y otros sitios web.
- Acceso a la ubicación mediante un enlace configurado.
- Descarga de la información de contacto en formato `.vcf`.
- Función para compartir la tarjeta mediante las opciones disponibles en el dispositivo o navegador.
- Configuración centralizada de la información del perfil.
- Personalización de la fotografía y de los colores de marca.
- Interfaz web desarrollada con Next.js y Tailwind CSS.

Las acciones disponibles dependen de los datos configurados y de las capacidades del dispositivo o navegador.

---

# Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- **Next.js 15:** framework para el desarrollo de la aplicación web.
- **React 19:** construcción de la interfaz mediante componentes.
- **TypeScript:** tipado estático para el código.
- **Tailwind CSS v4:** estilos y diseño de la interfaz.
- **Node.js:** entorno de ejecución para las herramientas de desarrollo.
- **npm:** instalación y gestión de dependencias.

### Tecnologías principales

La información del perfil se centraliza en `data/card.ts`, mientras que los estilos de marca se encuentran en `app/globals.css`.

---

# Requisitos

Antes de ejecutar el proyecto, necesitas:

- Node.js compatible con las dependencias del proyecto.
- npm.
- Git.
- Una terminal compatible con los comandos indicados.

Se recomienda verificar las versiones exactas de Node.js, Next.js, React y las demás dependencias en `package.json`.

---

# Instalación

Clona el repositorio:

```bash
git clone https://github.com/satcoresolutions/tarjeta-digital.git
```

Accede al directorio:

```bash
cd tarjeta-digital
```

Instala las dependencias:

```bash
npm install
```

> El comando `git clone` utiliza el nombre de repositorio `tarjeta-digital`. Si el repositorio de GitHub tiene otro nombre, reemplaza la URL y el directorio por los valores reales.

---

# Configuración y personalización

## Información del perfil

El contenido de la tarjeta se configura en:

```text
data/card.ts
```

Desde este archivo puedes modificar los datos definidos por el proyecto, como:

- Nombre.
- Cargo o profesión.
- Biografía o descripción.
- Número telefónico.
- Número de WhatsApp con indicativo internacional, sin el signo `+`.
- Correo electrónico.
- Redes sociales.
- Enlaces externos.
- Ubicación.
- Ruta de la fotografía de perfil.

Los campos y nombres exactos dependen de la estructura existente en `data/card.ts`.

## Fotografía de perfil

1. Copia la fotografía dentro de la carpeta `public/`.
2. Actualiza el valor de `photo` en `data/card.ts`.
3. Comprueba que la ruta corresponda a la ubicación de la imagen.

Ejemplo de ruta:

```text
public/
└── profile.jpg
```

Si la fotografía se encuentra en esa ubicación, configura el campo `photo` de acuerdo con la convención utilizada por el proyecto.

## Colores de marca

Los colores y estilos principales se encuentran en:

```text
app/globals.css
```

Modifica allí los valores correspondientes para adaptar la identidad visual a las necesidades del proyecto.

## Variables de entorno

La configuración descrita no requiere variables de entorno para personalizar la información básica de la tarjeta. Si posteriormente se incorporan servicios externos que las necesiten, deberán documentarse sus variables y valores de ejemplo por separado.

**Nunca publiques credenciales, tokens, claves privadas ni contraseñas en el repositorio.**

---

# Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre la aplicación en:

```text
http://localhost:3000
```

Los cambios realizados en los archivos del proyecto podrán comprobarse desde el navegador durante el desarrollo.

---

# Producción

Genera la compilación de producción:

```bash
npm run build
```

Si la compilación termina correctamente, inicia la aplicación:

```bash
npm start
```

El comando `npm start` requiere que exista una compilación de producción válida.

---

# Estructura del proyecto

La estructura principal descrita para esta aplicación es:

```text
tarjeta-digital/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── data/
│   └── card.ts
├── public/
│   ├── logo.png
│   └── ...
├── LICENSE
├── README.md
├── package.json
├── package-lock.json
├── tsconfig.json
└── ...
```

La carpeta `components/` contiene los componentes de interfaz que utiliza la aplicación. La estructura exacta puede variar según la versión del código y los componentes existentes.

---

# Arquitectura

La aplicación utiliza una arquitectura web basada en componentes de React y el framework Next.js.

```text
Datos del perfil
      │
      ▼
  data/card.ts
      │
      ▼
 Componentes React
      │
      ▼
 Interfaz de Next.js
      │
      ▼
 Navegador del usuario
```

La información editable de la tarjeta se centraliza en el módulo de datos, mientras que la interfaz presenta el perfil y ofrece las acciones de contacto y compartición.

La implementación descrita no requiere una base de datos para gestionar el contenido del perfil.

---

# Datos y privacidad

La tarjeta presenta la información que se configura en el proyecto. Los datos definidos en `data/card.ts` forman parte del código de la aplicación y, si este se publica o despliega, pueden quedar accesibles para quienes puedan consultar los archivos o la aplicación resultante.

Ten en cuenta las siguientes recomendaciones:

- Publica únicamente la información de contacto que quieras hacer visible.
- No incluyas contraseñas, credenciales ni datos confidenciales.
- Revisa los enlaces y números antes de publicar la tarjeta.
- Considera que el archivo `.vcf` puede contener datos personales del titular.
- Ten presente que compartir la tarjeta puede transmitir información a otros usuarios o aplicaciones.

La aplicación no debe considerarse un sistema de almacenamiento privado de información personal.

---

# Seguridad

La seguridad forma parte de los principios de desarrollo de SatCore Solutions.

Se recomienda:

- Mantener las dependencias actualizadas.
- Revisar los datos y enlaces configurados antes del despliegue.
- Evitar la publicación de información sensible.
- Verificar los permisos y la configuración del repositorio.
- Evaluar los cambios antes de incorporarlos a producción.

Para reportar una vulnerabilidad relacionada con este proyecto, contacta con:

**Email:** satcoresolutions@gmail.com

Incluye una descripción del problema, su impacto potencial y la versión afectada. Evita compartir públicamente credenciales o información sensible.

---

# Desarrollo y contribuciones

Las correcciones, mejoras y adaptaciones deberán respetar los términos de la licencia del proyecto.

Antes de implementar cambios importantes, se recomienda revisar la estructura existente, mantener la coherencia de los componentes y documentar las nuevas funcionalidades.

Las contribuciones no eliminan ni sustituyen la autoría original de SatCore Solutions.

---

# Proyectos derivados

Este proyecto puede utilizarse como base para desarrollar nuevas soluciones, de acuerdo con los permisos y las condiciones de la licencia aplicable.

Cuando se reutilice una parte sustancial del proyecto, deberá conservarse la atribución correspondiente a SatCore Solutions conforme a la **SCSAL 1.0**.

Ejemplo de atribución:

> Basado en Tarjeta digital · SatCore, desarrollado originalmente por SatCore Solutions.

Repositorio original:

https://github.com/satcoresolutions/tarjeta-digital

La atribución no implica que SatCore Solutions respalde, mantenga o garantice un proyecto derivado.

---

# Atribución

Cuando el código se copie, modifique, integre o redistribuya de forma sustancial, deberá conservarse una referencia visible a SatCore Solutions en los términos establecidos por la licencia.

**Proyecto original:** Tarjeta digital · SatCore

**Organización:** [SatCore Solutions](https://github.com/satcoresolutions)

La atribución deberá distinguir claramente el proyecto original de las modificaciones o productos derivados.

---

# Marca y propiedad intelectual

El código fuente se distribuye bajo la **SatCore Solutions Attribution License — SCSAL 1.0**, según los términos del archivo `LICENSE`.

La licencia del código no transfiere automáticamente derechos sobre:

- SatCore Solutions.
- SOFTWARE AND TECHNOLOGY CORE SOLUTIONS.
- Logotipos e identidad visual.
- Nombres comerciales y marcas.
- Dominios y otros signos distintivos.

El uso del código no autoriza a representar una relación oficial con SatCore Solutions.

---

# Dependencias de terceros

Las bibliotecas, los frameworks, los paquetes y demás componentes de terceros conservan sus propias licencias y condiciones de uso.

La SCSAL 1.0 no reemplaza ni modifica las licencias de dichas dependencias. Consulta los archivos de licencia y los metadatos de los paquetes utilizados cuando necesites conocer sus condiciones específicas.

---

# Despliegue

La aplicación puede desplegarse en una plataforma compatible con Next.js, como Vercel.

## Publicar en Vercel

1. Sube el proyecto a GitHub.
2. Accede a Vercel y conecta el repositorio.
3. Configura el proyecto y verifica los comandos de compilación.
4. Ejecuta el despliegue.
5. Comprueba que la tarjeta y sus enlaces funcionen correctamente.
6. Si corresponde, configura el dominio del titular de la tarjeta en la sección **Settings → Domains**.

Antes de publicar, revisa los datos del perfil, la fotografía, los enlaces externos y la información que quedará expuesta públicamente.

---

# Estado del proyecto

**Estado:** En desarrollo.

**Versión:** 1.0.0, por confirmar según el lanzamiento publicado.

**Última actualización:** 2026-10-20.

---

# Roadmap

- [ ] Revisar y mejorar la experiencia en dispositivos móviles.
- [ ] Mejorar la accesibilidad de los controles y enlaces.
- [ ] Ampliar las opciones de personalización de la tarjeta.
- [ ] Evaluar nuevas opciones de presentación y compartición del perfil.

Los elementos del roadmap son objetivos futuros y no representan funcionalidades ya implementadas.

---

# Licencia

Este proyecto se distribuye bajo:

## SatCore Solutions Attribution License — SCSAL 1.0

Consulta el archivo `LICENSE` para conocer los permisos, las condiciones de atribución y las demás disposiciones aplicables.

La descripción de la licencia en este README es informativa; el texto del archivo `LICENSE` es la referencia para sus términos.

---

# Autoría

## SatCore Solutions

**SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**

_Soluciones digitales seguras, accesibles y funcionales para todos._

**GitHub:** https://github.com/satcoresolutions

**Email:** satcoresolutions@gmail.com

---

<div align="center">

**Desarrollado originalmente por SatCore Solutions.**

**© SatCore Solutions — Todos los derechos reservados, excepto los derechos concedidos mediante SCSAL 1.0.**

</div>
