# Module Inventory

This inventory was generated from the legacy ASP project at `C:\Users\schakravarthi\OneDrive - Phillip Securities Pte Ltd\Documents\Github\WDAdmin` and reflects the current module structure under `asp/`.

## Legacy project scan summary
- Top-level ASP areas discovered: 15 major module groups
- High-volume modules:
  - `Admin` (50 files)
  - `Amendment` (145 files)
  - `Withdrawal` (108 files)
  - `Conversion` (52 files)
  - `Login` (27 files)
  - `HoldingTransfer` (11 files)
  - `MassSecuritiesTransfer` (12 files)
  - `Transferr-nu` (24 files)
  - `SelectedShareTransfer` (6 files)
  - `2FA_TOTP` (8 files)
- Additional utility files at root: `AcctDetLedger*.asp`, `fnSetAcctDet*.asp`, `logout.asp`, `errorHandler.asp`

## Migration module inventory

| Module | Legacy Folder / Files | Purpose | Likely tables / dependencies | Complexity (L/M/H) | Target API Route |
|---|---|---|---|---|---|
| Authentication | `asp/Login`, `logout.asp`, `global.asa` | Sign-in, session, sign-out | Users, Roles, Session state | H | `/api/auth` |
| 2FA / TOTP | `asp/2FA_TOTP` | Secondary authentication | Users, TOTP secrets, audit logs | M | `/api/auth/2fa` |
| Admin / Security | `asp/Admin`, `asp/menu` | Admin screens, navigation, role-based access | Users, Roles, Menus | H | `/api/admin` |
| Account Details / Ledger | `AcctDetLedger*.asp`, `fnSetAcctDet*.asp`, `mrgn_function.asp` | Account ledger detail and account-specific calculations | Account ledger, account summary, margin data | H | `/api/accounts/ledger` |
| Holdings Transfer | `asp/HoldingTransfer` | Transfer holdings between accounts/records | Holdings, transfer headers, movement tables | H | `/api/transfers/holdings` |
| Selected Share Transfer | `asp/SelectedShareTransfer` | Selected-security transfer workflow | Securities, transfer details | H | `/api/transfers/selected-shares` |
| Mass Securities Transfer | `asp/MassSecuritiesTransfer` | Bulk securities movement | Security holdings, transfer batches | H | `/api/transfers/mass` |
| Amendment | `asp/Amendment` | Amendment and change workflows | Amendment tables, audit trail | H | `/api/amendments` |
| Withdrawal | `asp/Withdrawal` | Withdrawal submission, review, processing | Withdrawal requests, status tables, bank details | H | `/api/withdrawals` |
| Conversion | `asp/Conversion` | Data conversion / normalization workflows | Conversion rules, reference tables | M | `/api/conversion` |
| Forms / Utilities | `asp/Forms`, `asp/Function`, `asp/asp_functions`, `fnMonthYear.asp` | Utility functions and UI helper logic | Shared business functions, helper constants | M | `/api/utilities` |
| Error Handling | `errorHandler.asp`, `CustomError.asp` | Central error handling / exception flow | Error logging / audit tables | M | `/api/errors` |

## Recommended pilot modules
1. Authentication + 2FA
2. Account Details / Ledger
3. Withdrawal
4. Holdings Transfer

## Notes
- Many modules appear to be data-heavy and workflow-driven; they are high risk for business logic drift.
- The migration should proceed module-by-module, retaining the original ASP business rules while building React components and API endpoints.
- The `SelectedShareTransfer - Copy` folder and alternate `*_20250627*.asp` files likely represent duplicate or transitional variants; treat them as output/backup variants and validate before migration.

