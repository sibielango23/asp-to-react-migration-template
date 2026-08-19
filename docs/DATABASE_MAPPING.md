# Database Mapping

## Goal
Map legacy schema objects to modernized MSSQL schema with traceability.

| Legacy Object | Type | New Object | Transformation | Validation Rule |
|---|---|---|---|---|
| tblUsers | Table | dbo.Users | Rename columns to PascalCase | Row count + key checksum |
| vwUserRoles | View | dbo.v_UserRoles | Rebuild as indexed view if needed | Result parity for sample users |

## Migration Checklist
- Identify primary keys and foreign keys.
- Remove duplicated columns and denormalize only if justified.
- Preserve audit fields (`created_at`, `updated_at`, actor).
- Add rollback scripts for every data migration release.

