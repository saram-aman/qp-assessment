# Grocery Booking API

A full-stack-ready Node.js + TypeScript + PostgreSQL API for managing grocery items and user orders, with roles-based access (Admin/User), authentication using JWT, and Prisma ORM for database interactions.

---

## Tech Stack

- Node.js
- TypeScript
- Express
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Docker (optional)
- Jest (for testing)
- Swagger (for API documentation)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/saram-aman/qp-assessment.git
cd qp-assessment
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Environment Setup

Create a `.env` file in the root folder:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/grocery_db"
JWT_SECRET="your_jwt_secret"
PORT=5000
```

---

### 4. Database Setup with Prisma

#### a. Initialize Prisma (already done if code exists)

```bash
npx prisma init
```

#### b. Generate Prisma Client

```bash
npx prisma generate
```

#### c. Migrate Database

```bash
npx prisma migrate dev --name init
```

---

### 5. Run the Application

```bash
npm run dev
```

App will start on: `http://localhost:5000`

---

## Authentication

- Register: `/api/auth/register`
- Login: `/api/auth/login`
- Use the returned JWT token as:  
  `Authorization: Bearer <token>` in headers.

---

## API Endpoints

### Auth Routes

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| POST   | `/api/auth/register` | Register a user      |
| POST   | `/api/auth/login`    | Login & get token    |

---

### Grocery (Admin only)

| Method | Endpoint                  | Description            |
|--------|---------------------------|------------------------|
| POST   | `/api/admin/groceries`          | Add new item           |
| GET    | `/api/admin/groceries`          | Get all items          |
| PATCH  | `/api/admin/groceries/:id/inventory` | Update inventory |
| PUT    | `/api/admin/groceries/:id`      | Update full item       |
| DELETE | `/api/admin/groceries/:id`      | Delete item            |

---

### Orders (User only)

| Method | Endpoint     | Description             |
|--------|--------------|-------------------------|
| POST   | `/api/user/orders` | Place an order          |
| GET    | `/api/user/orders` | Get my past orders      |
| GET    | `/api/user/groceries` | Get availble groceries |
---

## - Sample API Call (using curl)

```bash
curl -X POST http://localhost:5000/api/auth/register -H "Content-Type: application/json" -d '{"email":"admin@example.com", "password":"123456", "role":"ADMIN"}'
```

---

## Run Tests

```bash
npm run test
```

---

## Docker (Optional)

```bash
docker-compose up --build
```

_Ensure you configure your `docker-compose.yml` and `.env` accordingly._

---

## Swagger Documentation

Start your server and visit:

```
http://localhost:5000/api-docs
```

---

## Project Structure

```
src/
├── config/
├── controllers/
├── docs/
├── middlewares/
├── models/
├── routes/
├── services/
├── tests/
├── utils/
├── validators/
├── server.ts
├── app.ts
```

---

## Roles Overview

- `ADMIN` can manage grocery inventory
- `USER` can browse and place grocery orders

---

## JWT Info

Payload:

```json
{
  "id": 1,
  "email": "admin@example.com",
  "role": "ADMIN"
}
```

Use in header:

```
Authorization: Bearer <your_token>
```

---