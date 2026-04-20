# Kanban

## Running the project

### Docker (PostgreSQL)

Start the PostgreSQL database:

```sh
docker-compose up -d
```

### Frontend + Backend

Run both from the monorepo root:

```sh
npm run dev
```

This starts the frontend (Next.js) and backend (NestJS) concurrently via Turborepo.

---

### Run individually

**Backend**

```sh
cd apps/backend
npm run dev
```

**Frontend**

```sh
cd apps/frontend
npm run dev
```
