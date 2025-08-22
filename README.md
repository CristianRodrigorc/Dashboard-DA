# DashboardApp

Proyecto base creado con [Angular CLI](https://github.com/angular/angular-cli) versión 20.1.6. La proyección es construir un dashboard para visualizar, gestionar y subir datos. Por ahora es el proyecto estándar de Angular y este README se irá actualizando a medida que avance el desarrollo.

## Estado actual

- Proyecto generado con Angular 20 (estructura standalone).
- Sin integraciones externas ni APIs configuradas por el momento.

## Requisitos

- Node.js (LTS recomendado)
- Angular CLI 20 instalado globalmente:

```bash
npm install -g @angular/cli@20
```

## Instalación

```bash
npm install
```

## Servidor de desarrollo

```bash
ng serve
```

Abre `http://localhost:4200/`. La app recarga automáticamente al guardar cambios en el código fuente.

## Scaffolding (generadores)

Generar un componente:

```bash
ng generate component nombre-componente
```

Ver ayuda y esquemáticos disponibles (componentes, directivas, pipes, etc.):

```bash
ng generate --help
```

## Build

```bash
ng build
```

Los artefactos quedan en `dist/`. Para producción, Angular optimiza el bundle por defecto.

## Pruebas unitarias

```bash
ng test
```

## Pruebas end‑to‑end (e2e)

```bash
ng e2e
```

Angular CLI no incluye por defecto un framework e2e; puedes elegir el que prefieras más adelante.

## Estructura básica del proyecto

- `src/app/` — Código de la aplicación (standalone). Archivos clave:
  - `app.ts`, `app.html`, `app.scss` — componente raíz.
  - `app.routes.ts` — rutas principales.
  - `app.config.ts` — configuración de la app (providers, etc.).
- `src/main.ts` — bootstrap de la aplicación.
- `src/index.html` — HTML principal.
- `angular.json` — configuración del workspace/proyecto.
- `tsconfig*.json` — configuración de TypeScript.

## Roadmap inicial (sujeto a cambios)

- Autenticación y autorización.
- Módulos de visualización (tablas, filtros, paginación) y CRUD de datos.
- Subida de archivos y validaciones.
- Gráficas e informes (p. ej., integración con librerías de charts).
- Gestión de estado y comunicación con APIs.

## Recursos

Consulta la guía y referencia de comandos en la página de [Angular CLI](https://angular.dev/tools/cli).

## Contribución

De momento el desarrollo es inicial. A medida que avance, se documentarán convenciones, flujos y guidelines. Las mejoras al README se harán conforme evolucione el proyecto.
