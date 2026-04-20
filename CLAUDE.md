# Kanban Monorepo

## Stack

- Frontend: Next.js (App Router)
- Backend: NestJS, TypeORM
- Database: PostgreSQL
- Monorepo: Turborepo

## Architecture

- Frontend NEVER accesses the database directly
- All data flows through NestJS APIs or WebSockets
- Shared types live in `packages/shared`

## Rules

- Don't use the DB entity as types for get functions in backend service
- Keep components small and reusable in frontend
- Use SWR custom hooks for GET, PATCH, PUT, POST and DELETE on frontend.

## Real-time

- WebSockets (Socket.IO) will be used for board updates
- UI should be optimistic where possible
