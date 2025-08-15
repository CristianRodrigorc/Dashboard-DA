# Dashboard de Análisis de Datos en Tiempo Real

## 📊 Descripción del Proyecto

Una aplicación web tipo panel administrativo que muestra datos dinámicos en tiempo real mediante gráficas, tablas y notificaciones. El dashboard simula el monitoreo de ventas, métricas de usuarios y sensores IoT.

## ✨ Características Principales

- **📈 Gráficas Interactivas**: Barras, líneas, pastel usando Chart.js
- **🔍 Filtrado Avanzado**: Tablas con filtros dinámicos y paginación
- **🔔 Notificaciones en Tiempo Real**: Alertas usando RxJS
- **📱 Responsive Design**: Funciona en escritorio y móvil con Angular Material
- **🌙 Tema Oscuro/Claro**: Personalización de UI para mejor experiencia
- **🔄 Datos en Tiempo Real**: Simulación de API con datos dinámicos

## 🛠️ Tecnologías Utilizadas

- **Angular 17+**: Framework principal
- **Angular Material**: Componentes UI
- **Chart.js**: Gráficas interactivas
- **RxJS**: Programación reactiva y tiempo real
- **JSON Server**: API simulada
- **TypeScript**: Tipado estático

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm start

# Ejecutar servidor de API simulada
npm run api
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── charts/
│   │   ├── tables/
│   │   └── notifications/
│   ├── services/
│   ├── models/
│   ├── shared/
│   └── pages/
├── assets/
└── environments/
```

## 🎯 Funcionalidades Implementadas

- Dashboard principal con métricas clave
- Gráficas de ventas por período
- Tabla de transacciones con filtros
- Notificaciones en tiempo real
- Cambio de tema (oscuro/claro)
- Diseño responsive
- Simulación de datos dinámicos