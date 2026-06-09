---
id: "7b80079b-e74d-4768-869c-677c69a1d8cf"
title: "UserLogin Subsystem Architecture"
kind: domain
created: 2026-06-07
updated: 2026-06-07
review_after: 2026-09-05
status: active
tags: ["architecture", "authentication", "react", "buddy"]
created_at: "2026-06-07T09:31:12.236252300+00:00"
content_hash: "0f762f017677b21507e38deb98d455935e1e18f9f2deb1cd4cbed69424551b12"
source_tool: "buddy_memory_create"
source_confidence: 0.900
source_message_range: "buddy_architecture_drift_watcher"
---

The UserLogin subsystem follows a feature-based architecture:
- API logic is encapsulated in `src/features/authentication/api/`.
- UI components are split between feature-specific components (`src/features/authentication/components/`) and page-level components (`src/pages/`).
- State management is handled via a combination of Redux (`src/app/store/`) and Context API (`src/context/AuthContext.jsx`).
- Routing is centralized in `src/Routes/index.jsx`.