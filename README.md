# Backend — Node.js + Express JWT API

REST API for the **angular-auth-jwt** project, built with Node.js, Express, TypeScript, MongoDB & JWT.

> **Frontend:** See the [`frontend`](../../tree/frontend) branch.

## Tech Stack

- **Runtime:** Node.js + TypeScript
- **Framework:** Express 5
- **Database:** MongoDB (Mongoose ODM)
- **Auth:** JWT (jsonwebtoken) + bcrypt

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or Atlas)

### Installation

```bash
npm install
```

### Configuration

Create a `.env` file in the project root:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/angular-auth-jwt
JWT_SECRET=your_jwt_secret_here
```

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── controllers/     # Route handlers
│   ├── authController.ts
│   └── userController.ts
├── middleware/       # Express middleware
│   └── authMiddleware.ts
├── models/          # Mongoose schemas
│   └── User.ts
├── routes/          # Route definitions
│   ├── authRoutes.ts
│   └── userRoutes.ts
└── server.ts        # App entry point
```

## API Endpoints

| Method | Endpoint        | Description          | Auth Required |
|--------|----------------|----------------------|---------------|
| POST   | `/api/auth/register` | Register a new user  | No            |
| POST   | `/api/auth/login`    | Login & get JWT      | No            |
| GET    | `/api/users`         | List all users       | Yes           |
| GET    | `/api/users/me`      | Get current user     | Yes           |
