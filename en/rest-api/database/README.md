---
description: Connect to the PxServ Database Service via REST API.
icon: database
---

# Database

The database service stores arbitrary key-value pairs scoped to your project. Use the endpoints below to manage your data.

| Endpoint | Method | Description |
| -------- | ------ | ----------- |
| [/database/setData](data-saving.md) | `POST` | Save or update a value |
| [/database/toggleData](data-toggle.md) | `POST` | Toggle a value between `0` and `1` |
| [/database/getData](data-fetching.md) | `POST` | Fetch a single value by key |
| [/database/getAll](all-data-fetching.md) | `GET` | Fetch all key-value pairs |
| [/database/removeData](data-removing.md) | `POST` | Delete a value by key |
