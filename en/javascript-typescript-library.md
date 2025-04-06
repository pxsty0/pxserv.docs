---
icon: js
---

# JavaScript / TypeScript Library

This example code allows you to perform database operations with the PxServ project. The following operations are supported:

- Save data to the database
- Read data from the database
- Delete data from the database

## Requirements

Before using this example, ensure the following libraries are installed:

- **pxserv**: Used to communicate with the PxServ API.

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

// Representative data
const temp = "24.3°C"; // Environment temperature
const hum = "58%"; // Humidity
const light = "1"; // Lighting on (1 = on, 0 = off)

(async () => {
  try {
    // Saving data
    await pxServ.setData("temp", temp);
    await pxServ.setData("hum", hum);
    await pxServ.setData("light", light);
    console.log(
      "Temperature, humidity and lighting conditions were recorded in PxServ."
    );

    // Get data
    const currentTemp = await pxServ.getData("temp");
    const currentHum = await pxServ.getData("hum");
    const currentLight = await pxServ.getData("light");

    console.log(`Temperature: ${currentTemp}`);
    console.log(`Humidity: ${currentHum}`);
    console.log(`Light: ${currentLight === "1" ? "On" : "Off"}`);

    // Toggle data
    await pxServ.toggleData("light");
    console.log("Lighting status has been changed.");
    const toggledLight = await pxServ.getData("light");
    console.log(`New lighting status: ${toggledLight === "1" ? "On" : "Off"}`);

    // Get all data
    const allData = await pxServ.getAll();
    console.log("All Data:");
    console.log(allData);

    // Remove data
    await pxServ.removeData("temp");
    await pxServ.removeData("hum");
    await pxServ.removeData("light");
    console.log("Test data has been successfully removed.");
  } catch (error) {
    console.error("An error has occurred:", error);
  }
})();
```

### TypeScript

```typescript
import PxServ from "pxserv";

// Create a new PxServ Instance by entering your API key
const pxServ = new PxServ({
  apiKey: "API_KEY", // Write your own API key here
});

// Representative data
const temp = "24.3°C"; // Environment temperature
const hum = "58%"; // Humidity
const light = "1"; // Lighting on (1 = on, 0 = off)

(async () => {
  try {
    // Saving data
    await pxServ.setData("temp", temp);
    await pxServ.setData("hum", hum);
    await pxServ.setData("light", light);
    console.log(
      "Temperature, humidity and lighting conditions were recorded in PxServ."
    );

    // Get data
    const currentTemp = await pxServ.getData("temp");
    const currentHum = await pxServ.getData("hum");
    const currentLight = await pxServ.getData("light");

    console.log(`Temperature: ${currentTemp}`);
    console.log(`Humidity: ${currentHum}`);
    console.log(`Light: ${currentLight === "1" ? "On" : "Off"}`);

    // Toggle data
    await pxServ.toggleData("light");
    console.log("Lighting status has been changed.");
    const toggledLight = await pxServ.getData("light");
    console.log(`New lighting status: ${toggledLight === "1" ? "On" : "Off"}`);

    // Get all data
    const allData = await pxServ.getAll();
    console.log("All Data:");
    console.log(allData);

    // Remove data
    await pxServ.removeData("temp");
    await pxServ.removeData("hum");
    await pxServ.removeData("light");
    console.log("Test data has been successfully removed.");
  } catch (error) {
    console.error("An error has occurred:", error);
  }
})();
```

## Usage

Add this code to your project and run it after installing the required libraries. The code will perform data addition, reading, and deletion operations with the PxServ API.

### Sample Outputs

Below are example outputs you may see in the console:

```
Temperature, humidity and lighting conditions were recorded in PxServ.
Temperature: 24.3°C
Humidity: 58%
Light: On
Lighting status has been changed.
New lighting status: Off
All Data:
{
  temp: {
    lastUpdate: '2025-04-06T09:08:59.570Z',
    icon: 'defaultIcon',
    value: '24.3°C'
  },
  hum: {
    lastUpdate: '2025-04-06T09:08:59.649Z',
    icon: 'defaultIcon',
    value: '58%'
  },
  light: {
    lastUpdate: '2025-04-06T09:08:59.997Z',
    icon: 'defaultIcon',
    value: '0'
  }
}
Test data has been successfully removed.
```

These outputs indicate that the data has been successfully added, read, and deleted.
