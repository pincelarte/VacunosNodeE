# 🐄 Proyecto Vacunos - Gestión de Ganado Rural

Este proyecto es una aplicación web para la gestión de animales bovinos en un establecimiento rural.  
Permitirá registrar y consultar cantidades de:
**toros, vacas, vaquillonas, novillos, terneros y terneras**.

El sistema será **Full Stack**:
- **Backend:** Node.js + Express + Sequelize + PostgreSQL  
- **Frontend:** React + Material UI  
- **Hosting:** Railway  

---

## ✅ Objetivo del proyecto

Este sistema será utilizado inicialmente para fines educativos (evaluación del instituto), pero podrá crecer en el futuro para convertirse en una herramienta real utilizada en campo.

---

## 🚀 Tecnologías utilizadas

| Parte | Tecnologías |
|-------|-------------|
| Backend | Node.js, Express, Sequelize |
| Base de datos | PostgreSQL |
| Frontend | React, Material UI |
| Control de versiones | Git + GitHub |
| Hosting | Railway |
| Seguridad de contraseñas | Bitwarden |

---

## ✅ Progreso del proyecto

### 🔹 Etapa 1: Preparación (COMPLETADA ✅)
1. Crear cuenta en **Railway**
2. Crear base de datos **PostgreSQL** en Railway
3. Guardar credenciales en **Bitwarden**
4. Crear carpeta del proyecto backend: `VacunosNodeE`
5. Inicializar proyecto Node:
   
      npm init -y
6. Instalo las dependecias del backend:
   
      npm install express sequelize pg pg-hstore

### 🔹 Etapa 2: Conexión a la base de datos (COMPLETADA ✅)
1. Crear archivo de configuración de la base de datos:
   
      src/config/database.js
2. Conectar Node.js con PostgreSQL usando Sequelize
3. Probar la conexión con `node index.js`

### 🔹 Etapa 3: Modelos de Vacuno y Pesaje (COMPLETADA ✅)
1. Crear carpeta de modelos: `src/models`
2. Crear modelo `Vacuno.js` usando Sequelize
3. Crear modelo `Pesaje.js` usando Sequelize
4. Definir campos del modelo **Vacuno**:
   - `tipo` (madre, ternero, ternera, novillo, vaquillona, toro)  
   - `nombre` (opcional)  
   - `edad` (opcional)  
   - `pesoInicial` (peso al ingresar al campo)  
   - `fechaNacimiento`  
   - `fechaIngreso`  
   - `seguimientoVeterinario` (texto libre)  
   - `notas` (texto libre)  
5. Definir campos del modelo **Pesaje**:
   - `peso` (obligatorio)  
   - `fechaPesaje` (obligatoria)  
6. Configurar la relación entre modelos:
   - Un `Vacuno` tiene muchos `Pesaje` (`hasMany`)  
   - Cada `Pesaje` pertenece a un `Vacuno` (`belongsTo`)  
   - `onDelete: 'CASCADE'` para borrar automáticamente los pesajes si se borra el vacuno
7. Sincronizar modelos con la base de datos desde `index.js`

### 🔹 Etapa 4: Organización del Backend con MVC (EN PROGRESO 🚧)
1. Crear estructura del proyecto:
2. Preparar controlador `vacuno.controller.js`:
- Funciones: crear, listar, actualizar y eliminar vacunos
3. Preparar controlador `pesaje.controller.js`:
- Funciones: registrar pesaje, listar, actualizar y eliminar pesajes por vacuno
4. Crear rutas `vacuno.routes.js` y `pesaje.routes.js` con los endpoints CRUD:

**Vacunos:**
| Método | Ruta | Acción |
|--------|-----|-------|
| `GET` | `/vacunos` | Listar todos los vacunos |
| `POST` | `/vacunos` | Crear un vacuno |
| `PUT` | `/vacunos/:id` | Actualizar un vacuno por ID |
| `DELETE` | `/vacunos/:id` | Eliminar un vacuno por ID |

**Pesajes:**
| Método | Ruta | Acción |
|--------|-----|-------|
| `GET` | `/pesajes` | Listar todos los pesajes o filtrar por vacuno |
| `POST` | `/pesajes` | Crear un pesaje |
| `PUT` | `/pesajes/:id` | Actualizar un pesaje por ID |
| `DELETE` | `/pesajes/:id` | Eliminar un pesaje por ID |

5. Integrar rutas en el archivo principal (`index.js`) para que la API quede funcional
6. Probar que la API responde correctamente a todos los métodos CRUD usando Postman, Insomnia o similar

### 🔹 Etapa 5: Pruebas de la API 

#### 1️⃣ Vacunos
<span style="color: blue;">Crear Pesaje</span>

- **Crear vacuno (`POST /vacunos`)**  
```json
{
  "tipo": "madre",
  "caravana": "A123",
  "edad": 5,
  "pesoInicial": 450,
  "fechaNacimiento": "2018-03-15",
  "fechaIngreso": "2025-10-17",
  "seguimientoVeterinario": "Vacuna aplicada",
  "notas": "Ejemplar de alta producción"
}

_**Actualizar vacuno**

{
  "caravana": "A123B",
  "pesoInicial": 455,
  "notas": "Cambio de corral"
}


_**Crear pesaje**


{
  "vacunoId": 1,
  "peso": 460,
  "fechaPesaje": "2025-10-17"
}

_**Actualizar pesaje**

{
  "peso": 465,
  "fechaPesaje": "2025-10-20"
}


