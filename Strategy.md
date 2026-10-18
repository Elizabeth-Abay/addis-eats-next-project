# Project Strategy: Addis Eats

## 1. Architectural Vision
Addis Eats is built as a modern, high-performance web application utilizing the **Next.js App Router**. The objective is to keep data flow clean, secure, and modular by separating concerns between Client Components, Server Components, Route Handlers, and Server Actions.

## 2. Core Architectural Pillars
* **Data Flow & Storage:** 
  * Current phase utilizes local JSON persistence (`orderHistory.json`) via Node's `fs/promises`.
  * Future migration strategy: Decouple local file writing to transition into a robust database (such as PostgreSQL or MongoDB) to support production scaling (e.g., Vercel deployment compatibility).
* **Authentication & Authorization:**
  * Cookie-based sessions (`sessionInfo`) managed securely.
  * Next.js Middleware acts as the perimeter guard for protected paths (`/kitchen`, `/check-out`, `/order-history`), injecting verified user context (e.g., `x-user-id`) via request headers.
* **Client-Server Boundaries:**
  * **Server Actions / Route Handlers:** Handle backend mutations, file system operations, and data validation securely on the server.
  * **Client Components:** Focus on UI rendering, reactivity, and client-side caching/syncing using **SWR**.

## 3. Development Roadmap
* **Phase 1 (Current):** Establish core ordering loop, local order history tracking, middleware role protection, and responsive UI layouts.
* **Phase 2:** Refine error handling boundaries, validate data payloads, and optimize SWR re-fetching states.
* **Phase 3:** Database integration, user account management enhancements, and cloud deployment configuration.