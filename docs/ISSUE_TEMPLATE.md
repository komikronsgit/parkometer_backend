# Issue Tracking Template

---

## Issue Details

| Field | Value |
|-------|-------|
| **Issue ID** | Issue #1 |
| **Title** | Missing automated test coverage for availableSpace updates |
| **Type** | ✨ Feature |
| **Priority** | 🟢 Low |
| **Status** | 📋 Backlog |
| **Assignee** | Bilal, Tachukwa |
| **Reporter** | Kalvin |
| **Created Date** | 2025-12-14 |
| **Due Date** | TBD |

---

## Description

The project currently lacks automated test coverage to ensure that the backend remains stable and responsive after updates. This issue tracks the need for automated verification of core backend behavior.

### Summary
There is currently no automated mechanism to validate that critical backend behavior remains operational after changes. This issue ensures test coverage is maintained as part of the CI pipeline.

---

### Expected Behavior
Automated tests should run in the CI pipeline and verify that core backend endpoints respond correctly.

### Actual Behavior
Verification relies on manual checks or indirect testing.

---

### User Story
As a developer, I want automated backend tests to run in CI so that core functionality can be verified without manual testing after every update.

---

## Technical Details

### Affected Components
- [ ] Frontend
- [✓] Backend API
- [ ] Database
- [ ] Docker/Deployment
- [✓] CI/CD Pipeline

---

## Acceptance Criteria

- [✓] Automated backend tests are implemented
- [✓] Tests run successfully in the CI pipeline
- [✓] Test failures block merges when applicable

---

## Resolution

### Solution Implemented
Automated functional, non-functional, and smoke tests were added using Jest and integrated into the CI pipeline.

### Pull Request(s)
- PR #1: Add Docker, docker-compose, and CI/CD workflows

### Resolution Date
2025-12-14

---

## Status Workflow

📋 Backlog → 🔄 In Progress → 👀 In Review → ✅ Done
