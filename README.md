<p align="center">
  <a href="https://github.com/VDProductions/Cuadernillo-Online" target="_blank">
    <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo">
  </a>
</p>

<p align="center">
<img src="https://img.shields.io/badge/Laravel-12-FF2D20?style=flat-square&logo=laravel" alt="Laravel Version">
<img src="https://img.shields.io/badge/Livewire-3-FB70A9?style=flat-square&logo=livewire" alt="Livewire">
<img src="https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS">
</p>

## Sobre Cuadernillo Online

**Cuadernillo Online** es una solución integral para la digitalización del seguimiento de las prácticas de **Formación en Centros de Trabajo (FCT)**. Desarrollada como proyecto final del ciclo **DAM**, esta plataforma web reemplaza el uso ineficiente de papel y archivos desestructurados por un entorno centralizado, moderno y reactivo.

La aplicación optimiza la experiencia educativa mediante:

- **Interfaz TALL Stack:** Una experiencia de usuario fluida y reactiva sin recargas de página gracias a Livewire y Alpine.js.
- **Gestión de Roles Dinámica:** Paneles personalizados para alumnos y profesores con permisos restringidos mediante middleware.
- **Automatización de Informes:** Generación instantánea de documentos PDF oficiales con el historial de prácticas.
- **Analítica de Progreso:** Estadísticas mensuales y semanales que permiten al profesorado evaluar el desempeño en tiempo real.

## ¿Por qué Cuadernillo Online?

En el contexto actual de la Formación Profesional, el seguimiento manual genera retrasos, extravíos y falta de trazabilidad. Este proyecto nace con la motivación de aplicar conocimientos avanzados de desarrollo full-stack para resolver un problema real del entorno educativo.

### Beneficios Clave
* **Sostenibilidad**: Eliminación total del soporte en papel.
* **Eficiencia**: Reducción drástica de la carga administrativa para el profesorado.
* **Accesibilidad**: Diseño responsive para uso en ordenadores, tablets y móviles.

## Arquitectura del Proyecto

El sistema sigue un patrón **MVC adaptado**. Los componentes Livewire actúan como puente directo entre el modelo y la vista, simplificando la lógica y mejorando el mantenimiento.



- **Modelos (Eloquent)**: Gestión eficiente de relaciones entre Usuarios, Grupos, Empresas y Prácticas.
- **Vistas (Blade)**: Interfaces modulares y modernas utilizando Tailwind CSS.
- **Seguridad**: Autenticación robusta con Laravel Breeze y validación estricta de formularios.

## Instalación

Para ejecutar este proyecto en tu entorno local:

1. Clona el repositorio: `git clone https://github.com/VDProductions/Cuadernillo-Online.git`
2. Instala dependencias PHP: `composer install`.
3. Instala dependencias Frontend: `npm install && npm run dev`.
4. Configura tu `.env` (DB_DATABASE, DB_USERNAME, etc.).
5. Genera la App Key: `php artisan key:generate`.
6. Migra la base de datos: `php artisan migrate`.
