# Module Inventory Template

Use this table to catalog legacy ASP pages and migration scope.

| Module | Legacy Page | Purpose | Tables/Views | Dependencies | Complexity (L/M/H) | Target API Route |
|---|---|---|---|---|---|---|
| Authentication | /admin/login.asp | User sign-in | Users | Session, AD | M | /api/auth/login |
| User Management | /admin/users.asp | User CRUD | Users, Roles | Auth | H | /api/users |

## Notes
- Add one row per page/action.
- Capture required stored procedures and external integrations.
- Mark blockers clearly before implementation starts.

