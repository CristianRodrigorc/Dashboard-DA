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
- **Angular Material**: Componentes UI con tema Azure/Blue
- **Chart.js + ng2-charts**: Gráficas interactivas
- **RxJS**: Programación reactiva y tiempo real
- **JSON Server**: API simulada
- **TypeScript**: Tipado estático
- **SCSS**: Preprocesador de estilos

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm start
# o
ng serve

# Ejecutar servidor de API simulada (próximamente)
npm run api
```

## 📁 Estructura del Proyecto

```
dashboard-analytics/
├── src/
│   ├── app/
│   │   ├── components/          # ✅ Creado
│   │   ├── services/            # ✅ Creado
│   │   ├── models/              # ✅ Creado
│   │   ├── shared/              # ✅ Creado
│   │   ├── pages/               # ✅ Creado
│   │   ├── app.ts               # ✅ Componente principal
│   │   ├── app.html             # ✅ Template HTML limpio
│   │   ├── app.scss             # ✅ Estilos separados
│   │   ├── app.routes.ts        # ✅ Configuración de rutas
│   │   └── app.config.ts        # ✅ Configuración de la app
│   ├── assets/
│   ├── environments/
│   └── styles.scss              # ✅ Estilos globales
├── package.json                 # ✅ Dependencias configuradas
└── angular.json                 # ✅ Configuración de Angular
```

## ✅ Progreso Actual del Proyecto

### **🎯 Fase 1: Configuración Inicial - COMPLETADA**
- ✅ Creación del proyecto Angular 17+ con routing
- ✅ Instalación y configuración de Angular Material
- ✅ Configuración del tema Azure/Blue
- ✅ Instalación de Chart.js y ng2-charts
- ✅ Instalación de JSON Server para API simulada
- ✅ Creación de estructura de carpetas organizada

### **🎨 Fase 2: Organización del Código - COMPLETADA**
- ✅ Separación de CSS del HTML (app.scss)
- ✅ Limpieza del template HTML
- ✅ Configuración de estilos globales
- ✅ Implementación de estructura de componentes
- ✅ Configuración de rutas básicas

### **📊 Fase 3: Desarrollo del Dashboard - EN PROGRESO**
- 🔄 Creación de componentes del dashboard
- ⏳ Implementación de servicios de datos
- ⏳ Configuración de JSON Server
- ⏳ Desarrollo de gráficas interactivas
- ⏳ Implementación de tablas con filtros
- ⏳ Sistema de notificaciones en tiempo real

## 🎯 Próximas Funcionalidades a Implementar

### **📈 Componentes del Dashboard**
- [ ] Dashboard principal con métricas clave
- [ ] Componente de gráficas (barras, líneas, pastel)
- [ ] Tabla de transacciones con filtros
- [ ] Componente de notificaciones
- [ ] Sidebar de navegación
- [ ] Header con cambio de tema

### **🔧 Servicios y Datos**
- [ ] Servicio de datos para gráficas
- [ ] Servicio de notificaciones
- [ ] Servicio de tema (oscuro/claro)
- [ ] Configuración de JSON Server
- [ ] Modelos de datos (interfaces)

### **🎨 UI/UX**
- [ ] Diseño responsive completo
- [ ] Tema oscuro/claro
- [ ] Animaciones y transiciones
- [ ] Iconos y elementos visuales

## 🛠️ Comandos Útiles

```bash
# Desarrollo
ng serve                    # Servidor de desarrollo
ng build                   # Construir para producción
ng test                    # Ejecutar tests

# Generación de componentes
ng generate component       # Crear nuevo componente
ng generate service         # Crear nuevo servicio
ng generate interface       # Crear nueva interfaz

# API simulada
json-server --watch db.json # Servidor de API (próximamente)
```

## 📝 Notas de Desarrollo

- **Versión Angular**: 17.0.0+
- **Tema Material**: Azure/Blue
- **Preprocesador**: SCSS
- **Encapsulación**: ViewEncapsulation.Emulated (por defecto)
- **Hot Reload**: Habilitado para desarrollo

## 🔄 Estado del Repositorio

- ✅ Proyecto inicializado
- ✅ Dependencias instaladas
- ✅ Estructura de carpetas creada
- ✅ Configuración básica completada
- 🔄 Desarrollo de componentes en progreso

---

**Próximo paso**: Implementar componentes del dashboard y servicios de datos