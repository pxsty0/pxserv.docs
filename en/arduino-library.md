---
icon: gear-code
---

# Arduino Library

The PxServ Arduino library enables direct communication with the PxServ API from Arduino-compatible devices (ESP32, ESP8266, etc.).

**Supported operations:**

* Save data to the database
* Toggle a value between `0` and `1`
* Read data from the database
* Delete data from the database
* OTA-supported firmware updates on ESP32 and ESP8266 devices

## Requirements

Install the following library in the Arduino IDE before use:

* **PxServ.h** — PxServ API client

## Usage

Basic data operations example:

```cpp
#include <PxServ.h>

PxServ client("your_pxserv_api_key");

void setup() {
  Serial.begin(115200);
  PxServ::connectWifi("your_wifi_ssid", "your_wifi_password");
}

void loop() {
  // Save data
  PxServ::Callback setResult = client.setData("exampleData1", "value");
  Serial.print("Set -> Status: ");   Serial.print(setResult.status);
  Serial.print(" | Message: ");      Serial.print(setResult.message);
  Serial.print(" | Data: ");         Serial.println(setResult.data);

  delay(2000);

  // Toggle data (cycles between 0 and 1)
  PxServ::Callback toggleResult = client.toggleData("exampleData2");
  Serial.print("Toggle -> Status: "); Serial.print(toggleResult.status);
  Serial.print(" | Message: ");       Serial.print(toggleResult.message);
  Serial.print(" | Data: ");          Serial.println(toggleResult.data);

  delay(2000);

  // Read data
  PxServ::Callback getResult = client.getData("exampleData1");
  Serial.print("Get -> Status: ");   Serial.print(getResult.status);
  Serial.print(" | Message: ");      Serial.print(getResult.message);
  Serial.print(" | Data: ");         Serial.println(getResult.data);

  delay(2000);

  // Remove data
  PxServ::Callback removeResult = client.removeData("exampleData1");
  Serial.print("Remove -> Status: "); Serial.print(removeResult.status);
  Serial.print(" | Message: ");       Serial.print(removeResult.message);
  Serial.print(" | Data: ");          Serial.println(removeResult.data);

  delay(2000);
}
```

For remote firmware updates with OTA, see: [OTA Feature](ota-feature.md)
