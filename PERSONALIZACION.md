# 🎨 Guía de Personalización en 5 Minutos

Esta guía te ayudará a personalizar tu portafolio rápidamente.

## 📝 Paso 1: Tu Información Básica

Abre `src/Portfolio.jsx` y busca las líneas 23-24:

```javascript
const fullName = 'Bilal El Harmachi';  // ← Cambia esto por tu nombre
const fullRole = 'Estudiante';          // ← Cambia esto por tu rol
```

**Ejemplo:**
```javascript
const fullName = 'María García';
const fullRole = 'Desarrolladora Frontend';
```

## 📧 Paso 2: Tu Email

Busca y reemplaza `tu-email@ejemplo.com` por tu email real en dos lugares:

1. **Línea 39** (función del formulario)
2. **Línea 257** (botón de email en el header)

**Búsqueda rápida:** Presiona `Ctrl+F` y busca `tu-email@ejemplo.com`

## 📸 Paso 3: Tu Foto

**Opción A - Usar imagen de internet:**
```javascript
// Línea 237
src="https://tu-imagen.com/foto.jpg"
```

**Opción B - Usar imagen local:**
1. Guarda tu foto en `/public/mi-foto.jpg`
2. Cambia la línea 237 a:
```javascript
src="/mi-foto.jpg"
```

## 🌐 Paso 4: Redes Sociales

Busca las líneas 257-280 y actualiza tus links:

```javascript
<a href="mailto:TU_EMAIL@gmail.com" ...>      {/* Tu email */}
<a href="https://github.com/TU_USUARIO" ...>  {/* Tu GitHub */}
<a href="https://linkedin.com/in/TU_PERFIL" ...> {/* Tu LinkedIn */}
```

## ✏️ Paso 5: Biografía y Contenido

### Sobre mí (líneas 313-331)
Reemplaza los tres párrafos con tu propia biografía.

### Habilidades (líneas 340-370)
Modifica las listas de tecnologías que conoces:

```javascript
// Frontend
{['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue', 'Angular'].map(...)}

// Backend
{['Node.js', 'Express', 'Python', 'Django', 'PHP'].map(...)}

// Herramientas
{['Git', 'Docker', 'AWS', 'Figma', 'Photoshop'].map(...)}
```

### Proyectos (líneas 379-445)
Actualiza los 4 proyectos con tus propios trabajos:

```javascript
<div className="project-card p-6 rounded-xl">
  <h3 className="text-xl font-bold mb-3">Nombre del Proyecto</h3>
  <p className="text-gray-300 mb-4">
    Tu descripción del proyecto aquí
  </p>
  <div className="flex flex-wrap gap-2 mb-4">
    <span className="text-xs px-2 py-1 bg-purple-500/20 rounded">React</span>
    <span className="text-xs px-2 py-1 bg-purple-500/20 rounded">Node.js</span>
  </div>
  <a href="TU_LINK_AQUI" className="text-purple-400 hover:text-purple-300 font-semibold">
    Ver proyecto →
  </a>
</div>
```

## 🎨 Opcional: Cambiar Colores

Si quieres cambiar los colores púrpura/rosa por otros, busca estas líneas en el CSS:

```css
/* Busca "a78bfa" (púrpura) y "ec4899" (rosa) */
/* Reemplaza con tus colores favoritos en formato hex */

Ejemplos:
- Azul: #3b82f6
- Verde: #10b981
- Naranja: #f97316
- Rojo: #ef4444
```

## ✅ Checklist Final

- [ ] Cambié mi nombre y rol (líneas 23-24)
- [ ] Actualicé mi email (búsqueda global)
- [ ] Subí y configuré mi foto
- [ ] Actualicé links de redes sociales
- [ ] Escribí mi biografía personal
- [ ] Actualicé mis habilidades
- [ ] Añadí mis proyectos reales
- [ ] Probé que el formulario de contacto funciona
- [ ] Verifiqué que todo se ve bien en móvil

## 🚀 Probar tus Cambios

```bash
npm run dev
```

Abre `http://localhost:3000` en tu navegador.

## 💡 Tips Rápidos

1. **Foto profesional**: Usa una foto con buena iluminación, fondo neutro
2. **Biografía**: 3 párrafos cortos, enfócate en tus fortalezas
3. **Proyectos**: Incluye al menos 3 proyectos reales
4. **Links**: Asegúrate de que todos los links funcionen
5. **Testing**: Prueba en móvil antes de publicar

¡Listo! Tu portafolio está personalizado 🎉
