---
icon: js
---

# JavaScript / TypeScript Library

The PxServ npm package provides a typed client for interacting with the PxServ API from Node.js or browser environments.

**Supported operations:**

* Save data to the database
* Toggle a value between `0` and `1`
* Read data from the database
* Fetch all stored data
* Delete data from the database

## Installation

```sh
npm install pxserv
```

## Usage

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const PxServ = require("pxserv").default;

const pxServ = new PxServ({
  apiKey: "your_api_key",
});

(async () => {
  try {
    // Save data
    const setResult = await pxServ.setData("temp", "24.3°C");
    console.log("Set:", setResult);

    // Read data
    const getResult = await pxServ.getData("temp");
    console.log("Get:", getResult);

    // Toggle data
    const toggleResult = await pxServ.toggleData("light");
    console.log("Toggle:", toggleResult);

    // Fetch all data
    const allData = await pxServ.getAll();
    console.log("All:", allData);

    // Remove data
    await pxServ.removeData("temp");
    await pxServ.removeData("light");
    console.log("Removed.");
  } catch (err) {
    console.error("Error:", err);
  }
})();
```
{% endtab %}

{% tab title="TypeScript" %}
```typescript
import PxServ from "pxserv";

const pxServ = new PxServ({
  apiKey: "your_api_key",
});

(async () => {
  try {
    // Save data
    const setResult = await pxServ.setData("temp", "24.3°C");
    console.log("Set:", setResult);

    // Read data
    const getResult = await pxServ.getData("temp");
    console.log("Get:", getResult);

    // Toggle data
    const toggleResult = await pxServ.toggleData("light");
    console.log("Toggle:", toggleResult);

    // Fetch all data
    const allData = await pxServ.getAll();
    console.log("All:", allData);

    // Remove data
    await pxServ.removeData("temp");
    await pxServ.removeData("light");
    console.log("Removed.");
  } catch (err) {
    console.error("Error:", err);
  }
})();
```
{% endtab %}
{% endtabs %}

## Sample Output

```json
Set: { "status": 200, "message": "OK", "data": {} }
Get: {
  "status": 200,
  "message": "OK",
  "data": {
    "lastUpdate": "2025-05-23T20:28:00.581Z",
    "icon": "defaultIcon",
    "value": "24.3°C"
  }
}
Toggle: { "status": 200, "message": "OK", "data": {} }
All: {
  "status": 200,
  "message": "OK",
  "data": {
    "temp": {
      "lastUpdate": "2025-05-23T20:28:00.581Z",
      "icon": "defaultIcon",
      "value": "24.3°C"
    },
    "light": {
      "lastUpdate": "2025-05-23T20:28:00.714Z",
      "icon": "defaultIcon",
      "value": "1"
    }
  }
}
Removed.
```
