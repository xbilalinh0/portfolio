# Portfolio Personal - Bilal El Harmachi

Un portafolio web simple, elegante y moderno construido con React y Framer Motion.

## 🚀 Características

- ✨ Animación de escritura en bucle para nombre y rol
- 📑 3 secciones con tabs: Sobre mí, Habilidades y Proyectos
- 📧 Formulario de contacto funcional que abre tu cliente de email
- 🎨 Diseño con gradientes púrpura y animaciones suaves
- 📱 Totalmente responsive
- ⚡ Simple y rápido

## 📦 Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Framer Motion** - Biblioteca de animaciones
- **Lucide React** - Iconos modernos
- **Space Mono + Inter** - Tipografías elegantes

## 🛠️ Instalación

1. Clona o descarga el proyecto

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── Portfolio.jsx     # Componente principal
│   ├── main.jsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── index.html            # HTML principal
├── package.json          # Dependencias
├── vite.config.js        # Configuración de Vite
├── tailwind.config.js    # Configuración de Tailwind
└── postcss.config.js     # Configuración de PostCSS
```

## 🎨 Personalización Rápida

Edita el archivo `src/Portfolio.jsx`:

### 1. Cambiar tu información (líneas 23-24)
```javascript
const fullName = 'Tu Nombre';
const fullRole = 'Tu Rol (ej: Desarrollador Web)';
```

### 2. Cambiar tu email (línea 39 y 203)
```javascript
mailto:tu-email@ejemplo.com
```
Reemplaza con tu email real

### 3. Cambiar tu foto (línea 237)
```javascript
src="URL_DE_TU_IMAGEN"
```
Puedes usar:
- Una imagen de internet (URL)
- Tu foto local en `/public/mi-foto.jpg`

### 4. Actualizar redes sociales (líneas 257-280)
```javascript
href="https://github.com/TU_USUARIO"
href="https://linkedin.com/in/TU_PERFIL"
```

### 5. Personalizar contenido
- **Sobre mí**: Líneas 313-331
- **Habilidades**: Líneas 340-370
- **Proyectos**: Líneas 379-445

## 🚀 Construcción para Producción

```bash
npm run build
```

Esto generará una carpeta `dist/` con los archivos optimizados listos para deployment.

## 📤 Deployment

Puedes desplegar este proyecto en:
- **Vercel**: `vercel --prod`
- **Netlify**: Arrastra la carpeta `dist`
- **GitHub Pages**: Configura el workflow de GitHub Actions
- **Cualquier hosting estático**

## 📝 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Preview de la build de producción

## 🎯 SEO

El proyecto incluye meta tags básicos en `index.html`:
- Descripción
- Keywords
- Open Graph tags
- Twitter Card tags

Recuerda personalizarlos con tu información.

## 💡 Mejoras Futuras

- [ ] Añadir blog/artículos
- [ ] Integrar CMS para gestión de contenido
- [ ] Añadir animaciones 3D con Three.js
- [ ] Implementar formulario de contacto con backend
- [ ] Añadir analytics
- [ ] Integración con GitHub API para proyectos automáticos

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones, issues y sugerencias son bienvenidas.

---

Hecho con ❤️ y mucho ☕
