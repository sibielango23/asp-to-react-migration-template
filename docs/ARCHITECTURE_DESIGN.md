# Architecture Design

## Frontend
- React 18 + TypeScript
- Feature-first components and hooks
- API layer in `src/services`

## Backend
- Node.js + Express REST API
- Route -> service -> data access layering
- Centralized auth and error middleware

## Integration Principles
- Contract-first API design
- Explicit error contracts
- Backward-compatible releases during phased migration

