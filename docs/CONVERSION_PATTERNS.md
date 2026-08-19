# ASP to React/API Conversion Patterns

## Pattern 1: ASP Form Post -> React Form + API
- Replace server-rendered form with controlled React component.
- Move validation to shared frontend/backend schema where possible.
- POST to `/api/...` and return structured validation errors.

## Pattern 2: Inline SQL -> Service Layer
- Extract SQL from page-level scripts to backend service/repository.
- Use parameterized queries only.
- Centralize transaction boundaries.

## Pattern 3: Session Checks -> JWT Middleware
- Replace page-level session guards with API auth middleware.
- Keep claims minimal and role-based.

