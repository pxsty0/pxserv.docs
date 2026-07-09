---
icon: gear-code
---

# Arduino Library

The PxServ Arduino library lets ESP32, ESP8266, and other Arduino-compatible Wi-Fi boards connect directly to the PxServ API. It provides a lightweight client for common IoT workflows such as sending sensor data, reading device state, toggling remote values, and performing OTA-supported firmware updates.

## When should you use it?

Use this library when your hardware device needs to communicate with PxServ directly:

* Send sensor data from ESP32 or ESP8266 boards
* Control relay, LED, motor, or alarm state through PxServ
* Read values from the database and react on-device
* Toggle a value between `0` and `1`
* Perform OTA firmware updates on ESP32 / ESP8266 devices

## Requirements

Before using the library, make sure you have:

* PxServ project API key
* Arduino IDE or PlatformIO
* ESP32 or ESP8266 board support
* `PxServ.h` library
* A stable Wi-Fi network with internet access

{% hint style="info" %}
If you want to use OTA functions, install **version 1.3.0 or newer** of the PxServ Arduino library.
{% endhint %}

## Installation

After installing the library in Arduino IDE, include it in your project:

```cpp
#include <PxServ.h>
```

Then create the PxServ client with your project API key:

```cpp
PxServ client("your_pxserv_api_key");
```

## Basic Usage

The following example connects to Wi-Fi, writes data to PxServ, reads it back, toggles a value, and removes a key.

```cpp
#include <PxServ.h>

PxServ client("your_pxserv_api_key");

void setup() {
  Serial.begin(115200);
  PxServ::connectWifi("your_wifi_ssid", "your_wifi_password");
}

void loop() {
  PxServ::Callback setResult = client.setData("temperature", "24.3");
  Serial.print("Set -> Status: ");
  Serial.print(setResult.status);
  Serial.print(" | Message: ");
  Serial.println(setResult.message);

  PxServ::Callback getResult = client.getData("temperature");
  Serial.print("Get -> Status: ");
  Serial.print(getResult.status);
  Serial.print(" | Data: ");
  Serial.println(getResult.data);

  PxServ::Callback toggleResult = client.toggleData("relay");
  Serial.print("Toggle -> Status: ");
  Serial.println(toggleResult.status);

  PxServ::Callback removeResult = client.removeData("temperature");
  Serial.print("Remove -> Status: ");
  Serial.println(removeResult.status);

  delay(5000);
}
```

## Method Reference

| Method | Description |
|---|---|
| `PxServ::connectWifi(ssid, password)` | Connects the device to the given Wi-Fi network. |
| `setData(key, value)` | Saves or updates a key-value pair in the PxServ database. |
| `getData(key)` | Reads the current value of the specified key. |
| `toggleData(key)` | Toggles the specified value between `0` and `1`. |
| `removeData(key)` | Removes the specified key from the database. |
| `setDeviceFirmwareVersion(version)` | Defines the firmware version currently running on the device. |
| `getDeviceFirmwareVersion()` | Returns the firmware version defined for the device. |
| `checkOtaFirmware()` | Checks whether an OTA firmware version is active in the PxServ panel and starts the update flow if available. |

## Callback Structure

Data operations return `PxServ::Callback`. You can use this structure for Serial Monitor output or for your own error handling.

| Field | Description |
|---|---|
| `status` | HTTP status code or library status code for the operation. |
| `message` | Short message about the operation result. |
| `data` | Returned data for read operations or additional operation output. |

## OTA Usage

For OTA-enabled devices, define the firmware version and call the OTA check inside `loop()`.

```cpp
#include <PxServ.h>

PxServ client("your_pxserv_api_key");

void setup() {
  Serial.begin(115200);
  PxServ::connectWifi("your_wifi_ssid", "your_wifi_password");
  client.setDeviceFirmwareVersion("1.0.0");
}

void loop() {
  client.setData("firmwareVersion", client.getDeviceFirmwareVersion());
  client.checkOtaFirmware();
}
```

For the full OTA flow, firmware preparation, and generating `.bin` files from Arduino IDE, see: [OTA Feature](ota-feature.md)

## Best Practices

* Do not publish your API key in public repositories.
* Validate sensor values before sending them; filter `nan`, empty, or invalid values.
* Avoid sending data more frequently than your project needs.
* Avoid long blocking operations inside `loop()`.
* Test OTA updates on a test device before deploying to critical devices.
* If you use ESP8266, regularly check firmware size, free RAM, and flash space.

## Troubleshooting

**Wi-Fi does not connect**

* Make sure the SSID and password are correct.
* Verify that the device is connecting to a 2.4 GHz Wi-Fi network.
* Watch connection output in the Serial Monitor.

**Data does not appear in the panel**

* Make sure the API key belongs to the correct project.
* Check that the key name matches the name you are looking for in the panel.
* Prefer sending values as `String` or text.

**OTA update does not start**

* Make sure the library version is 1.3.0 or newer.
* Confirm that `setDeviceFirmwareVersion()` and `checkOtaFirmware()` are still included in the new firmware.
* Verify that the firmware version is marked as the active version in the panel.
