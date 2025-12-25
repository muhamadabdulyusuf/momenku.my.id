# MOMENTKU ENGINE MANIFEST

This repository contains a production-grade SaaS engine.

## Core Principles
- Engine-first architecture
- Policy-driven business logic
- Explicit workflow transitions
- Side effects isolated via adapters & jobs

## NON-NEGOTIABLE RULES
- No business logic in UI
- No direct DB access outside repositories
- No external calls inside services
- No permission checks outside guards & policies

## Status
- Engine: FINAL
- Core API: STABLE
- Deployment: READY

Violating these rules is considered a system risk.
