---
icon: js
---

# JavaScript / TypeScript Library

The PxServ npm package is the official client for working with the PxServ API from Node.js and TypeScript projects. It is suitable for dashboards, automation services, backend applications, and helper services that process device data.

## When should you use it?

Use this library when you want to:

* Write data to the PxServ database from a Node.js backend
* Read device state from a web dashboard
* Toggle a key between `0` and `1`
* Fetch all project data in a single request
* Monitor data from automation or cron jobs

## Installation

```sh
npm install pxserv
```

No additional package is required for TypeScript; the package can be used as a typed client.

## Creating a Client

Create the PxServ client with your project API key.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const PxServ = require("pxserv").default;

const pxServ = new PxServ({
  apiKey: "your_api_key",
});
```
{% endtab %}

{% tab title="TypeScript" %}
```typescript
import PxServ from "pxserv";

const pxServ = new PxServ({
  apiKey: "your_api_key",
});
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
Do not expose your API key directly in public client-side code. For browser-based projects, route requests through your own backend service to protect the key.
{% endhint %}

## Basic Usage

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const PxServ = require("pxserv").default;

const pxServ = new PxServ({
  apiKey: "your_api_key",
});

async function main() {
  try {
    const setResult = await pxServ.setData("temperature", "24.3");
    console.log("Set:", setResult);

    const getResult = await pxServ.getData("temperature");
    console.log("Get:", getResult);

    const toggleResult = await pxServ.toggleData("relay");
    console.log("Toggle:", toggleResult);

    const allData = await pxServ.getAll();
    console.log("All data:", allData);

    const removeResult = await pxServ.removeData("temperature");
    console.log("Remove:", removeResult);
  } catch (error) {
    console.error("PxServ request failed:", error);
  }
}

main();
```
{% endtab %}

{% tab title="TypeScript" %}
```typescript
import PxServ from "pxserv";

const pxServ = new PxServ({
  apiKey: "your_api_key",
});

async function main(): Promise<void> {
  try {
    const setResult = await pxServ.setData("temperature", "24.3");
    console.log("Set:", setResult);

    const getResult = await pxServ.getData("temperature");
    console.log("Get:", getResult);

    const toggleResult = await pxServ.toggleData("relay");
    console.log("Toggle:", toggleResult);

    const allData = await pxServ.getAll();
    console.log("All data:", allData);

    const removeResult = await pxServ.removeData("temperature");
    console.log("Remove:", removeResult);
  } catch (error) {
    console.error("PxServ request failed:", error);
  }
}

main();
```
{% endtab %}
{% endtabs %}

## Method Reference

| Method                | Description                                          |
| --------------------- | ---------------------------------------------------- |
| `setData(key, value)` | Saves or updates a key-value pair in the database.   |
| `getData(key)`        | Reads the current value of the specified key.        |
| `toggleData(key)`     | Toggles the specified value between `0` and `1`.     |
| `getAll()`            | Returns all data in the project in a single request. |
| `removeData(key)`     | Removes the specified key from the database.         |

## Response Shape

Library methods generally return a result in the following shape:

```json
{
  "status": 200,
  "message": "OK",
  "data": {}
}
```

Read operations may include the value and additional metadata in the `data` field:

```json
{
  "status": 200,
  "message": "OK",
  "data": {
    "lastUpdate": "2025-05-23T20:27:06.587Z",
    "icon": "defaultIcon",
    "value": "24.3"
  }
}
```

## Best Practices

* Store your API key in an `.env` file or secure secret manager.
* Validate user-provided `key` values before using them.
* Send sensor values in a consistent format whenever possible.
* Wrap requests in `try/catch` for error handling.

## Troubleshooting

**I get an authorization error**

* Make sure the API key belongs to the correct project.
* Check that the key does not contain leading or trailing spaces.

**Data is not returned in the format I expect**

* Check which client wrote the data.
* Make sure different value types are not being written to the same key.

**I cannot hide my API key in the browser**

* Do not place the API key directly in frontend code.
* Create your own backend endpoint and perform PxServ operations from the backend.
