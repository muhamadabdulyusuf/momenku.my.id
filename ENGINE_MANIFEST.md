# MOMENTKU ENGINE MANIFEST

This engine is designed as a long-living SaaS core.

## Core Principles
- Explicit over implicit
- Engine > Feature
- Policy-driven business logic
- Side effects only via adapters & jobs

## Non-Negotiable Rules
- No business logic in UI
- No direct external calls from services
- No state mutation outside workflow engine
- No permission checks outside guards & policies

## Engine Status
- Architecture: FINAL
- Core API: STABLE
- Ready for Production Deployment

Any violation of this manifest is considered a system risk.
