---
icon: js
---

# JavaScript / TypeScript Library

This example code allows you to perform database operations with the PxServ project. The following operations are supported:

* Save data to the database
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
const PxServ = require("pxserv").default;

// Configuration settings
const config = {
  apiKey: "YOUR_API_KEY",
  baseURL: "https://api.pxserv.net", // Optional, this URL is used by default
};

// Create a PxServ instance
const pxServ = new PxServ(config);

// Get temperature and humidity data from an IoT device and save it to the server
const temperature = "22.5°C";
const humidity = "45%";

(async () => {
  try {
    // Save temperature and humidity data to the server
    await pxServ.setData("temperature", temperature);
    await pxServ.setData("humidity", humidity);

    // Retrieve temperature and humidity data from the server
    const currentTemperature = await pxServ.getData("temperature");
    const currentHumidity = await pxServ.getData("humidity");

    console.log(`Current Temperature: ${currentTemperature}`); // 'Current Temperature: 22.5°C'
    console.log(`Current Humidity: ${currentHumidity}`); // 'Current Humidity: 45%'

    // List all data
    const allData = await pxServ.getAll();
    console.log(allData); // {'temperature': '22.5°C', 'humidity': '45%'}

    // Delete old temperature data
    await pxServ.removeData("temperature");
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
```

### TypeScript

```typescript
import PxServ from "pxserv";

// Configuration settings
const config = {
  apiKey: "YOUR_API_KEY",
  baseURL: "https://api.pxserv.net", // Optional, this URL is used by default
};

// Create a PxServ instance
const pxServ = new PxServ(config);

// Get temperature and humidity data from an IoT device and save it to the server
const temperature = "22.5°C";
const humidity = "45%";

await pxServ.setData("temperature", temperature);
await pxServ.setData("humidity", humidity);

// Retrieve temperature and humidity data from the server
const currentTemperature = await pxServ.getData("temperature");
const currentHumidity = await pxServ.getData("humidity");

console.log(`Current Temperature: ${currentTemperature}`); // 'Current Temperature: 22.5°C'
console.log(`Current Humidity: ${currentHumidity}`); // 'Current Humidity: 45%'

// List all data
const allData = await pxServ.getAll();
console.log(allData); // {'temperature': '22.5°C', 'humidity': '45%'}

// Delete old temperature data
await pxServ.removeData("temperature");
```

## Usage

Add this code to your project and run it after installing the required libraries. The code will perform data addition, reading, and deletion operations with the PxServ API.

### Sample Outputs

Below are example outputs you may see in the console:

```
Current Temperature: 22.5°C
Current Humidity: 45%
{'temperature': '22.5°C', 'humidity': '45%'}
```

These outputs indicate that the data has been successfully added, read, and deleted.
