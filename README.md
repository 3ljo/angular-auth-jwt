# Frontend — Angular Authentication App

Single-page application for the **angular-auth-jwt** project, built with Angular 21, TypeScript & RxJS.

> **Backend:** See the [`backend`](../../tree/backend) branch.

## Tech Stack

- **Framework:** Angular 21
- **Language:** TypeScript 5.9
- **Testing:** Vitest
- **Styling:** SCSS

## Getting Started

### Prerequisites

- Node.js 18+
- Angular CLI (`npm install -g @angular/cli`)

### Installation

```bash
npm install
```

### Development

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically on file changes.

### Build

```bash
ng build
```

Build artifacts are stored in `dist/`.

### Testing

```bash
ng test
```

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── guards/           # Route guards
│   │   │   └── auth.guard.ts
│   │   ├── interceptors/     # HTTP interceptors
│   │   │   └── auth.interceptor.ts
│   │   └── services/         # Shared services
│   │       └── auth.service.ts
│   ├── layout/               # App shell / layout
│   ├── pages/
│   │   ├── dashboard/        # Dashboard page
│   │   ├── login/            # Login page
│   │   ├── register/         # Registration page
│   │   └── users/            # Users list page
│   ├── app.config.ts         # App configuration
│   ├── app.routes.ts         # Route definitions
│   └── app.ts                # Root component
├── environments/             # Environment configs
├── index.html
├── main.ts
└── styles.scss               # Global styles
```

## Features

- JWT-based authentication (login / register)
- Protected routes with auth guard
- Automatic token injection via HTTP interceptor
- User management dashboard
