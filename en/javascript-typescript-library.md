---
icon: js
---

# JavaScript / TypeScript Library

This example code allows you to perform database operations with the PxServ project. The following operations are supported:

* Save data to the database
* Toggle data between 0 and 1 in the database
* Read data from the database
* Delete data from the database

## Requirements

Before using this example, ensure the following libraries are installed:

* **pxserv**: Used to communicate with the PxServ API.

## Installation

You can install the PxServ library using npm:

```sh
npm install pxserv
```

## Connection Settings

Enter your PxServ API key and optionally the base URL in the following fields:

### JavaScript

```javascript
// Include the PxServ library in the project
const PxServ = require("pxserv").default;

// Create a new PxServ Instance by entering your API key
const pxServ = new PxServ({
  apiKey: "API_KEY", // Write your own API key here
});

(async () => {
  try {
    // Data Saving
    const setTempResult = await pxServ.setData("temp", "24.3°C");
    console.log("Temperature Save Result:", setTempResult);

    // Get data
    const getTempResult = await pxServ.getData("temp");
    console.log("Temperature Reading Result:", getTempResult);

    // Toggle data
    const toggleLightResult = await pxServ.toggleData("light");
    console.log("Toggle Result:", toggleLightResult);

    // Get all data
    const tumVeriler = await pxServ.getAll();
    console.log("All Data:", tumVeriler);

    // Remove data
    await pxServ.removeData("temp");
    await pxServ.removeData("light");
    console.log("Data removed.");
  } catch (err) {
    console.error("Error occurred:", err);
  }
})();

```

### TypeScript

```typescript
// Include the PxServ library in the project
import PxServ from "pxserv";

// Create a new PxServ Instance by entering your API key
const pxServ = new PxServ({
  apiKey: "API_KEY", // Write your own API key here
});

(async () => {
  try {
    // Data Saving
    const setTempResult = await pxServ.setData("temp", "24.3°C");
    console.log("Temperature Save Result:", setTempResult);

    // Get data
    const getTempResult = await pxServ.getData("temp");
    console.log("Temperature Reading Result:", getTempResult);

    // Toggle data
    const toggleLightResult = await pxServ.toggleData("light");
    console.log("Toggle Result:", toggleLightResult);

    // Get all data
    const tumVeriler = await pxServ.getAll();
    console.log("All Data:", tumVeriler);

    // Remove data
    await pxServ.removeData("temp");
    await pxServ.removeData("light");
    console.log("Data removed.");
  } catch (err) {
    console.error("Error occurred:", err);
  }
})();

```

## Usage

Add this code to your project and run it after installing the required libraries. The code will perform data addition, reading, and deletion operations with the PxServ API.

### Sample Outputs

Below are example outputs you may see in the console:

```javascript
Temperature Save Result: { status: 200, message: 'OK', data: {} }
Temperature Reading Result: {
  status: 200,
  message: 'OK',
  data: {
    lastUpdate: '2025-05-23T20:28:00.581Z',
    icon: 'defaultIcon',
    value: '24.3°C'
  }
}
Toggle Result: { status: 200, message: 'OK', data: {} }
All Data: {
  status: 200,
  message: 'OK',
  data: {
    temp: {
      lastUpdate: '2025-05-23T20:28:00.581Z',
      icon: 'defaultIcon',
      value: '24.3°C'
    },
    light: {
      lastUpdate: '2025-05-23T20:28:00.714Z',
      icon: 'defaultIcon',
      value: '1'
    }
  }
}
Data removed.
```

These outputs indicate that the data has been successfully added, read, and deleted.
