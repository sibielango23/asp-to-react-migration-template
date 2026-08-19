# Copilot Agent Setup

This repository is preconfigured for a PM -> Dev -> QA workflow using GitHub issues, labels, and pull requests.

## 1) Roles and Ownership

- PM Agent (`pm-task`): scope, dependency ordering, acceptance criteria, rollout and risk notes
- Dev Agent (`dev-task`): implementation, tests, migration notes, PR delivery
- QA Agent (`qa-task`): parity validation vs legacy ASP, regression checks, release sign-off

## 2) Repository Configuration Checklist

1. Enable **GitHub Actions** for the repository.
2. Enable **GitHub Copilot** for the repository/organization.
3. Create labels:
   - `pm-task`
   - `dev-task`
   - `qa-task`
   - `needs-triage`
4. Turn on branch protection for `main` or `master`:
   - Require pull request before merge
   - Require status checks from `Dev PR Checks`
   - Require review approval
5. Keep issues enabled (templates are used for agent handoffs).

## 3) How Routing Works

- Use issue title prefixes:
  - `[PM]`
  - `[DEV]`
  - `[QA]`
- Workflow `.github/workflows/auto-label-assign.yml` auto-adds labels based on these prefixes.

## 4) Standard Execution Flow

1. PM creates a `[PM]` planning issue for one module.
2. PM creates linked `[DEV]` implementation issue using the Dev template.
3. Dev opens PR and includes:
   - legacy ASP references
   - API/UI parity notes
   - test evidence
4. PM creates linked `[QA]` issue for validation.
5. QA signs off; PM closes planning issue after merge.

## 5) Mandatory Task Inputs

Every issue should include:
- Legacy ASP file paths and behavior notes
- Affected DB tables/views/procedures
- API contract expectations
- Acceptance criteria and non-goals
- Risks and rollback notes

## 6) First Pilot Module (Recommended)

Start with one module (e.g., Authentication), complete full PM -> Dev -> QA cycle, then scale to larger modules.
