# Momentku Architecture Overview

This system is designed as a modular, policy-driven SaaS platform.

## Layers
- Core Engine: Business rules & workflows
- Modules: Feature-specific logic
- Adapters: External integrations
- Jobs: Async & side-effect processing
- UI: Pure presentation layer

## Design Philosophy
- Engine-first, feature-second
- Explicit contracts over convention
- Side effects are isolated

This architecture is intended to scale in team size and feature complexity.
