# 🏭 Industrial Monitoring API

API REST desarrollada con Node.js y MongoDB para el monitoreo de máquinas industriales, permitiendo gestionar estados, registrar eventos y mantener un historial operativo.

---

## 🚀 Descripción

Este proyecto simula un sistema de monitoreo industrial donde es posible:

* Registrar máquinas dentro de una planta
* Controlar su estado (activa, mantenimiento, fallo)
* Registrar eventos asociados a cambios operativos
* Consultar historial de actividad

El enfoque principal es representar lógica de negocio real, más allá de un CRUD tradicional.

---

## 🛠️ Tecnologías utilizadas

* Node.js
* Express
* MongoDB (Atlas)
* Mongoose
* Dotenv

---

## 📁 Estructura del proyecto

```
src/
  controllers/
  models/
  routes/
  middlewares/
  services/
  config/
  app.js
  server.js
```

---

## ⚙️ Instalación

Clonar repositorio:

```bash
git clone https://github.com/VictorE121/Industrial-API-V1.0.git
cd industrial-api
```

Instalar dependencias:

```bash
npm install
```

---

## ▶️ Ejecución

```bash
npm run dev
```

Servidor disponible en:

```
http://localhost:3000
```

---

## 🔑 Variables de entorno

Crear archivo `.env`:

```
PORT=3000
MONGO_URI=tu_uri_de_mongodb
```

---

## 📡 Endpoints principales

### 🏭 Máquinas

* POST `/api/machines` → Crear máquina
* GET `/api/machines` → Obtener todas las máquinas
* PUT `/api/machines/:id/status` → Actualizar estado

---

### ⚠️ Eventos *(si implementas la siguiente parte)*

* POST `/api/events`
* GET `/api/events`

---

## 🧠 Lógica destacada

* Uso de estados controlados mediante enums (`active`, `maintenance`, `failure`)
* Separación de responsabilidades mediante arquitectura MVC
* Preparado para registrar eventos automáticos ante cambios de estado
* Diseño orientado a simulación de entornos industriales

---

## 🔄 Flujo del sistema

1. Se registra una máquina
2. Se actualiza su estado
3. (Opcional) Se genera un evento automáticamente
4. Se almacena el historial para análisis posterior

---

## 🧪 Pruebas

Las pruebas pueden realizarse con herramientas como Postman.

Se recomienda crear y exportar una colección para facilitar la evaluación del proyecto.

---

## 📌 Posibles mejoras

* Registro automático de eventos al cambiar estado
* Simulación de sensores en tiempo real
* Dashboard de monitoreo
* Filtros por fecha o tipo de evento

---

## 👨‍💻 Autor

Desarrollado por **Victor Ramirez**

---
