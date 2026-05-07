# Dashboard de Usuario Moderno

Una aplicación web moderna de dashboard de usuario construida con **React**, **Tailwind CSS** y **Vite**. Incluye un sistema escalable de temas (oscuro/claro) utilizando Context API.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con gradientes y animaciones
- 🌓 **Tema Oscuro/Claro**: Sistema de cambio de tema con persistencia en localStorage
- 📊 **Gráfico de Barras**: Visualización de horas de estudio por semana
- 👤 **Tarjeta de Perfil**: Información del usuario con estadísticas
- 📱 **Responsive**: Se adapta perfectamente a cualquier dispositivo
- ⚡ **Rápido**: Construido con Vite para máximo rendimiento
- 🎯 **Escalable**: Arquitectura con Context API para fácil extensión

## 🛠️ Tecnologías

- **React 18.2** - Librería UI
- **Tailwind CSS 3.3** - Estilos modernos
- **Vite 5.0** - Bundler ultrarrápido
- **Context API** - Estado global de la aplicación

## 📁 Estructura del Proyecto

```
dashboard-usuario/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx          # Componente principal
│   │   ├── ProfileCard.jsx        # Tarjeta de perfil
│   │   ├── BarChart.jsx           # Gráfico de barras
│   │   └── ThemeToggle.jsx        # Botón de cambio de tema
│   ├── context/
│   │   └── ThemeContext.jsx       # Context para gestionar temas
│   ├── App.jsx                    # Componente raíz
│   ├── main.jsx                   # Punto de entrada
│   └── index.css                  # Estilos globales
├── index.html                     # HTML de entrada
├── package.json                   # Dependencias del proyecto
├── vite.config.js                 # Configuración de Vite
├── tailwind.config.js             # Configuración de Tailwind
├── postcss.config.js              # Configuración de PostCSS
└── README.md                      # Este archivo
```

## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/NilGomez1/copilot.git
   cd copilot
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre en tu navegador**
   ```
   http://localhost:3000
   ```

## 📦 Compilar para Producción

```bash
npm run build
```

Esto generará una carpeta `dist` lista para deployar.

## 🎨 Componentes Principales

### Dashboard.jsx
Componente principal que organiza la interfaz completa:
- Header con botón de tema
- Grid de estadísticas rápidas
- Tarjeta de perfil y gráfico
- Secciones de actividades recientes y objetivos
- Footer

### ProfileCard.jsx
Tarjeta elegante que muestra:
- Avatar con efecto blur
- Nombre y título profesional
- Estadísticas (proyectos, contribuciones, seguidores)
- Botones de acción

### BarChart.jsx
Gráfico interactivo que presenta:
- 7 días de la semana con datos de horas
- Barras con gradientes de colores
- Totales y estadísticas
- Diseño responsive

### ThemeToggle.jsx
Botón inteligente que:
- Cambia entre tema oscuro y claro
- Muestra iconos animados (sol/luna)
- Guarda preferencia en localStorage
- Detecta preferencia del sistema

### ThemeContext.jsx
Context API que gestiona:
- Estado del tema (oscuro/claro)
- Persistencia en localStorage
- Aplicación de clase `dark` al documento
- Hook personalizado `useTheme()`

## 🌓 Cómo Funciona el Sistema de Temas

1. **ThemeProvider** envuelve toda la aplicación
2. **useTheme()** hook proporciona `isDark` y `toggleTheme()`
3. Cambios de tema se guardan en localStorage
4. Detección automática de preferencia del sistema
5. Transiciones suaves entre temas

```jsx
// Uso en cualquier componente
import { useTheme } from '../context/ThemeContext';

function MiComponente() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div className={isDark ? 'bg-dark' : 'bg-light'}>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </div>
  );
}
```

## 🎯 Extensiones Futuras

- 📈 Agregar más gráficos interactivos
- 🔔 Sistema de notificaciones
- 📊 Exportar datos a PDF
- 🌐 Soporte para múltiples idiomas
- 🔐 Autenticación de usuarios
- 💾 Backend con API REST

## 📝 Licencia

Este proyecto está bajo la licencia MIT.

## 👨‍💻 Autor

**Nil Gómez** - Desarrollador Full Stack

## 📧 Contacto

Para preguntas o sugerencias, contáctame en: nigoca6@gmail.com

---

⭐ Si te gusta este proyecto, ¡considera darle una estrella!
