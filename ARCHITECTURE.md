# Momentku Platform Architecture

Momentku is built as a modular, policy-driven SaaS platform.

## Layers
- Core Engine: Business rules & workflows
- Modules: Feature-specific logic
- Adapters: External integrations
- Jobs: Async side effects
- UI: Presentation only

## Design Goals
- Scale in features
- Scale in team size
- Minimize regression risk

This architecture is designed to outlive individual contributors.
