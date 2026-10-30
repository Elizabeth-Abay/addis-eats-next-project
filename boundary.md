# Project Boundaries & Rules: Addis Eats

## 1. Security & Authentication Constraints
* **Never expose raw database or file system paths** to client-side components. File reading/writing (`fs/promises`) must strictly occur inside Server Actions or Route Handlers.
* **Middleware Integrity:** Do not bypass Next.js middleware protection for role-restricted routes (`/kitchen`, etc.). Always validate role properties (`sessionObj.role`) server-side.
* **Header & Cookie Safety:** Custom metadata passed from middleware to server components must use lowercase hyphenated headers (e.g., `x-user-id`) and avoid storing sensitive plaintext credentials inside cookies.

## 2. Code Quality & Component Standards
* **Strict separation:** Keep Server and Client boundaries explicit. Do not import server-only modules (like `fs` or node path utils) into components marked with `'use client'`.
* **Data Rendering Safety:** Ensure objects (like `order.payment` or `customOrder` payloads) are never rendered directly as raw React children to prevent runtime type errors (`Objects are not valid as a React child`).
* **JSON State Mutability:** When updating local json datasets, ensure arrays/objects are cleanly structured and handled via proper serialization (`JSON.stringify(..., null, 2)`) to avoid corrupting data structure schemas.

## 3. Off-Limit Actions / Restricted Edits
* Do not commit raw local development overrides or machine-specific absolute file paths (like specific Windows user directory paths) into shared code branches.
* Avoid using direct `// console.log` on complex internal web API wrappers (such as raw `headers()` objects) to prevent Node inspection private member crashes.