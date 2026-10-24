# Changelog

Todos los cambios importantes de este proyecto serán documentados en este archivo.

El formato sigue una estructura basada en versiones y categorías de cambios.

---

## [Unreleased]

### Added

- 

### Changed

- 

### Fixed

- 

### Removed

- 

### Security

- 

---

## [1.2.0] - 2026-10-23

### Added

- Centralización de las clases reutilizables de interfaz mediante `lib/ui.ts`.
- Organización de los tipos de datos de la tarjeta digital en un módulo independiente.
- Definición de constantes para la configuración de la tarjeta digital.

### Changed

- Actualización del componente `BusinessCard` para utilizar los tipos centralizados de la tarjeta.
- Adaptación de los componentes a las clases compartidas de interfaz de SatCore Solutions.
- Organización de los datos, tipos y utilidades para facilitar el mantenimiento del proyecto.
- Corrección de la sintaxis de los enlaces de WhatsApp y Google Maps.
- Ajuste de la expresión regular utilizada para mostrar el dominio del sitio web.

### Fixed

- Corrección de errores de sintaxis en las plantillas de cadenas y las expresiones de los enlaces.
- Corrección de referencias a tipos para mantener la separación entre los datos y sus definiciones.

### Removed

- Eliminación de las referencias a constantes específicas de la aplicación de comandas que no corresponden a la tarjeta digital.

### Security

- Conservación de los atributos `rel="noopener noreferrer"` en los enlaces externos abiertos en una nueva pestaña.

---

## [1.1.0] - 2026-10-20

### Added

- Lanzamiento inicial de **Tarjeta digital · SatCore**.
- Presentación centralizada de la información de contacto y los enlaces profesionales en una tarjeta digital.
- Acceso directo a WhatsApp, llamadas telefónicas y correo electrónico.
- Enlaces a redes sociales y consulta de ubicación.
- Funcionalidad para guardar el contacto y compartir la tarjeta digital.
- Interfaz web orientada a facilitar el acceso desde diferentes dispositivos.
- Integración de la identidad corporativa de **SatCore Solutions**.
- Documentación inicial del proyecto mediante el archivo README.
- Definición de los términos de uso bajo la **SatCore Solutions Attribution License (SCSAL 1.0)**.

### Security

- Establecimiento de la licencia del proyecto y sus condiciones de uso y atribución.
