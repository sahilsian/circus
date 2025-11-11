#Circus - In Development

Circus is an event driven application runtime inspired by ExtJS using React, .NET 10 + SignalR and Redux. 

##Overview

The project aims to reproduce the client–server event flow of legacy ExtJS database applications using modern web technologies. Every UI interaction, system operation, and data transaction is represented as a strongly-typed WebEvent, passed through a centralized EventBus and synchronized with the backend through SignalR. The server remains the only source of truth.

Frontend:
src/
  core/
    models/webEvents/   # Base event models, registry, decorators
    events/             # All event implementations
    runtime/            # (Planned) runtime router, orchestrators
  reducers/system/      # Redux slice + store for SignalR
  components/ui/        # Reusable UI elements
  layouts/dashboard/    # Main dashboard window
  hooks/useSystem.ts    # Wrapper hook for connection control
  config/runtime.json   # Runtime environment configuration

Circus can build collaborative applications that require real time communication, and aims to be a core component of a large scale data entry platform creator.
