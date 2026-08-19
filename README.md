# 📋APP To‑Do List (Redis)

Proyecto simple de lista de tareas usando Redis como almacenamiento en memoria.

---

## ✨ Descripción

Aplicación To‑Do minimalista con backend en Node.js + TypeScript y un frontend estático. Guarda las tareas en Redis (clave `todos`) en formato JSON. Ideal para aprender integración entre Express y Redis, y para probar despliegues con Docker.

## 🚀 Características principales

- Interfaz limpia y moderna con estilos minimalistas.
- Agregar tareas desde el frontend.
- Listado de tareas almacenadas en Redis.
- API REST básica: `GET /api/todos`, `POST /api/todos`.

## 🎨 Características visuales

- Diseño centrado responsivo, tipografía moderna (`Inter`).
- Botones y entradas con microinteracciones (hover, focus).
- Animación sutil al mostrar las tareas.

## 🧰 Tecnologías

- Node.js
- TypeScript
- Express
- Redis (cliente oficial)
- TSX (dev) para ejecución en desarrollo
- HTML/CSS/Vanilla JS para el frontend

## 📂 Estructura del proyecto

- `backend/` — Código del servidor
  - `package.json` — dependencias y scripts
  - `src/`
    - `index.ts` — arranca Express y conecta Redis
    - `redis.ts` — cliente y conexión a Redis
    - `routes/todo.routes.ts` — rutas para `GET`/`POST` de tareas
- `frontend/`
  - `index.html` — interfaz de usuario (estática)

## 🗄️ Estructura y esquema en Redis

- Clave principal: `todos`
- Valor: una cadena JSON que representa un arreglo de objetos `todo`.
- Cada `todo` tiene esta forma:

```json
{
  "id": "<timestamp-string>",
  "title": "Texto de la tarea",
  "completed": false
}
```

- Ejemplo almacenado en Redis (valor de `todos`):

```json
[
  { "id": "1650000000000", "title": "Comprar leche", "completed": false }
]
```

Nota: El backend guarda y recupera el arreglo completo en la clave `todos`.

## ⚙️ Requisitos

- Node.js (v16+ recomendado)
- npm
- Docker (opcional, para ejecutar Redis) o una instancia de Redis accesible

## 🧭 Cómo correr el proyecto (modo desarrollo)

1) Inicia Redis (con Docker):

```bash
# desde una terminal
docker run -d --name my-redis -p 6379:6379 redis
```

2) Instala dependencias del backend y ejecuta en modo desarrollo:

```bash
cd backend
npm install
npm run dev
```

El servidor escuchará por defecto en `http://localhost:3000` y expondrá la API en `http://localhost:3000/api/todos`.

3) Abre el frontend (archivo estático):

- Simplemente abre `frontend/index.html` en tu navegador, o sirve la carpeta con un servidor estático.

Ejemplo rápido con `npx serve` (opcional):

```bash
# en la raíz del proyecto
npx serve frontend
```

## 🧪 Endpoints disponibles

- `GET /api/todos` — devuelve el arreglo completo de tareas.
- `POST /api/todos` — crea una nueva tarea. Body JSON: `{ "title": "Mi tarea" }`.

## ✅ Qué falta / mejoras sugeridas

- Añadir endpoints para marcar tareas como completadas (`PUT`) y eliminar (`DELETE`).
- Soporte para IDs UUID en lugar de timestamps.
- Paginación o almacenamiento por usuario (si se agregan cuentas).
- Frontend más interactivo: marcar completadas, eliminar, editar.

## 🤝 Contribuir

1. Haz un fork del repo
2. Crea una rama con tu cambio: `git checkout -b feat/mi-cambio`
3. Haz commit y PR

## 📎 Enlaces

- Repo remoto: https://github.com/CodermatzValentino09/ACT-3-to-do-list.git

---

¡Listo! Si querés, puedo añadir badges, screenshots, o traducirlo a inglés. 😄
