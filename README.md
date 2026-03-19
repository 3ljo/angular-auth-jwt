# angular-auth-jwt

Full-stack authentication app built with **Angular**, **Node.js**, **TypeScript**, **MongoDB** & **JWT**.

## Repository Structure

This project is organized into separate branches for independent development and deployment:

| Branch | Description | Tech Stack |
|--------|-------------|------------|
| [`frontend`](../../tree/frontend) | Angular 21 SPA | Angular, TypeScript, SCSS, Vitest |
| [`backend`](../../tree/backend) | REST API server | Node.js, Express 5, MongoDB, JWT |

## Architecture

```
┌─────────────────┐         ┌─────────────────┐         ┌──────────┐
│   Angular SPA   │ ──JWT── │  Express API    │ ──────── │ MongoDB  │
│   (Port 4200)   │  HTTP   │  (Port 3000)    │          │          │
└─────────────────┘         └─────────────────┘         └──────────┘
```

## Features

- User registration & login
- JWT-based authentication
- Protected API routes
- HTTP interceptor for automatic token injection
- Route guards for client-side protection
- User management dashboard

## Quick Start

### 1. Backend

```bash
git checkout backend
npm install
cp .env.example .env   # configure MongoDB URI & JWT secret
npm run dev
```

### 2. Frontend

```bash
git checkout frontend
npm install
ng serve
```

Open `http://localhost:4200` in your browser.

## License

ISC
