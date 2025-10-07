# El Tequebar - Landing Page

Una landing page moderna y responsiva para El Tequebar, servicio de tequeños gourmet tipo mobile bar en Orlando.

## Tecnologías

- **Next.js 15** - Framework React con App Router
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript 5.6** - Tipado estático
- **Tailwind CSS 3.4** - Framework de CSS utilitario
- **shadcn/ui** - Componentes de interfaz de usuario
- **Lucide React** - Iconos

## Características

- 🎥 Hero section con carrusel de imágenes
- 📱 Diseño completamente responsivo
- 🛒 Catálogo de productos interactivo
- ⭐ Sección de reseñas de clientes
- 💬 Botón flotante de WhatsApp
- 🎨 Animaciones suaves y transiciones
- ♿ Accesibilidad optimizada
- ⚡ Optimizado para rendimiento con Next.js 15

## Instalación

1. Clona el repositorio
2. Instala las dependencias:

\`\`\`bash
npm install
\`\`\`

3. Ejecuta el servidor de desarrollo:

\`\`\`bash
npm run dev
\`\`\`

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## Nuevas características de Next.js 15

- **Turbopack** - Bundler más rápido para desarrollo
- **React 19** - Últimas características de React
- **Optimizaciones de imágenes mejoradas** - Mejor rendimiento
- **App Router estable** - Routing moderno y eficiente

## Configuración

### Variables de entorno (opcional)

Crea un archivo `.env.local` para configurar:

\`\`\`
GOOGLE_PLACES_API_KEY=tu_api_key_aqui
GOOGLE_PLACE_ID=tu_place_id_aqui
WHATSAPP_PHONE=+1234567890
\`\`\`

### Personalización

1. **Logo**: Reemplaza `/public/logo.svg` con tu logo
2. **Imágenes del carrusel**: Actualiza las imágenes en `/public/hero/`
3. **Productos**: Actualiza el array de productos en `components/catalog.tsx`
4. **WhatsApp**: Cambia el número de teléfono en los componentes
5. **Reseñas**: Conecta con la API real de Google Places en `lib/google-reviews.ts`

## Estructura del proyecto

\`\`\`
├── app/
│   ├── layout.tsx          # Layout principal con React 19
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── hero-video.tsx      # Carrusel de imágenes hero
│   ├── catalog.tsx         # Catálogo de productos
│   ├── review-carousel.tsx # Carrusel de reseñas
│   └── whatsapp-fab.tsx    # Botón flotante WhatsApp
├── lib/
│   └── google-reviews.ts   # Fetcher de Google Reviews
├── types.ts                # Tipos TypeScript
└── public/
    ├── logo.svg
    ├── hero/               # Imágenes del carrusel
    └── products/           # Imágenes de productos
\`\`\`

## Despliegue

Este proyecto está optimizado para desplegarse en Vercel con Next.js 15:

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

## Rendimiento

- **Core Web Vitals** optimizados
- **Lazy loading** de imágenes
- **Preload** de recursos críticos
- **Compresión** automática de assets
- **Tree shaking** para reducir bundle size

## Soporte

Para soporte técnico, contacta al desarrollador o abre un issue en el repositorio.
