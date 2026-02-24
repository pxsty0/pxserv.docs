---
icon: webhook
---

# REST API

The PxServ REST API allows you to read and write project data over HTTP. All endpoints require an API key passed in the request headers.

**Base URL:** `https://api.pxserv.net`

## Authentication

Include the following header in every request:

| Header | Value |
| ------ | ----- |
| `apikey` | Your project API key |

## Endpoints

| Resource | Description |
| -------- | ----------- |
| [Database](database/README.md) | Save, toggle, fetch, and remove key-value data |
