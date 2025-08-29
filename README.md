## Dashboard App (Angular 20)

Proyecto simple con Angular 20 (standalone). Muestra gráficos usando `ng2-charts` y `Chart.js`.

### Requisitos
- Node.js 18 (recomendado)
- Angular CLI 20

```bash
npm install -g @angular/cli@20
```

### Instalación
```bash
npm install
```

### Correr en desarrollo
```bash
npm start
```
Abrir `http://localhost:4200/`.

### Build de producción
```bash
npm run build
```
Salida en `dist/dashboard-app/browser`.

### Componentes de gráficos
- `charts-panel` (líneas)
- `cuadro-barras` (barras)
- `cuadro-dona` (dona)
- `cuadro-pastel` (pastel)

Todos son componentes standalone.

### Despliegue en Netlify
Repositorio en GitHub recomendado.
- Build: `npm run build`
- Publish: `dist/dashboard-app/browser`
- SPA redirect a `index.html`

Archivo `netlify.toml` (ya incluido):

```toml
[build]
  command = "npm run build"
  publish = "dist/dashboard-app/browser"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Notas
- Aún no hay APIs ni autenticación.
- Se aceptan mejoras simples y PRs pequeños.
