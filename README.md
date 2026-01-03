<p align="center">
  <a href="https://reactnative.dev" target="_blank">
    <img src="https://reactnative.dev/img/header_logo.svg" width="150" alt="React Native Logo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-Expo-4630EB?style=for-the-badge&logo=react" alt="React Native Expo">
  <img src="https://img.shields.io/badge/Axios-API_REST-5A29E4?style=for-the-badge&logo=axios" alt="Axios">
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
</p>

## Sobre Cuadernillo Online (Mobile App)

Esta es la adaptación móvil oficial del proyecto **Cuadernillo Online**. Mientras que la versión web ofrece una gestión administrativa profunda, la App móvil está diseñada para la **inmediatez**, permitiendo a los alumnos registrar sus prácticas y a los profesores supervisar el progreso desde cualquier lugar.

La aplicación actúa como un cliente móvil que consume una **API personalizada** construida sobre el backend de Laravel, garantizando que la información esté siempre sincronizada y segura.

## 📱 Características Móviles

- **Movilidad Total:** Registro de actividades diarias directamente desde el centro de trabajo sin necesidad de un ordenador.
- **Sincronización API REST:** Comunicación fluida con el servidor mediante Axios, manejando autenticación basada en tokens.
- **Interfaz Nativa:** Componentes optimizados para iOS y Android que ofrecen una experiencia de usuario rápida y fluida.
- **Persistencia de Sesión:** Uso de `AsyncStorage` para mantener la sesión del usuario activa de forma segura.

## 🛠️ Stack Tecnológico

- **Framework:** [React Native](https://reactnative.dev/) con **Expo**.
- **Navegación:** [Expo Router](https://docs.expo.dev/router/introduction/) (Basado en archivos para una navegación tipo Next.js).
- **Cliente HTTP:** [Axios](https://axios-http.com/) para el consumo de la API REST.
- **Backend:** API REST construida en Laravel (Repositorio principal).
- **Estilos:** Flexbox y StyleSheet nativo siguiendo el `theme.ts` del proyecto.

## 🚀 Configuración del Entorno

Para conectar la App con tu servidor local, asegúrate de configurar la IP correcta en tu cliente API:

1. Clona el repositorio y entra en la rama móvil: git clone `git clone https://github.com/VDProductions/Cuadernillo-Online.git`
2. Instala las dependencias: `npm instal`
3. Configura la URL de la API (en tu archivo de configuración de Axios):
   - Emulador Android: `http://10.0.2.2:8000/api`
   - Dispositivo Físico: `http://TU_IP_LOCAL:8000/api`
4. Inicia el proyecto: `npx expo start -a`

## 📐 Flujo de Datos (API)
La aplicación móvil se comunica con el backend mediante los siguientes endpoints principales:

- POST /api/login: Autenticación y obtención de token de acceso.
- GET /api/practicas: Obtención del historial de registros del alumno.
- POST /api/practicas: Creación de nuevos registros diarios.
- GET /api/user: Perfil y datos del grupo asignado.
