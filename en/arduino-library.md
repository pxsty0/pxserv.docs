# Arduino Library

This example code allows you to perform database operations with the PxServ project. You can perform the following operations:

* Save data to the database
* Read data from the database
* Delete data from the database

## Requirements

Before using this example, make sure the following libraries are installed in the Arduino IDE:

* **WiFi.h**: To establish a Wi-Fi connection.
* **PxServ.h**: To communicate with the PxServ API.

## Connection Settings

You need to enter your Wi-Fi connection details and PxServ API key in the following fields:

```arduino
#include <WiFi.h>
#include <PxServ.h>

// Wi-Fi settings (Wi-Fi SSID and Password)
#define WIFI_SSID "your_wifi_ssid" // Wi-Fi Name
#define WIFI_PASS "your_wifi_password" // Wi-Fi Password

// PxServ API Key (Enter your project API key here)
PxServ client("your_pxserv_api_key");

void setup()
{
  // Start serial communication
  Serial.begin(115200);

  // Connect to Wi-Fi
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  Serial.print("Connecting to Wi-Fi...");

  // Wait until the connection is established
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(500); // Adding a short delay to slow down the connection process
  }
  Serial.println("Connected!");
}

void loop()
{
  // Add data (Set Data)
  PxServ::Callback setResult = client.setData("msg", "value"); // Add "value" to the "msg" key
  Serial.println("Set Result -> Status: " + String(setResult.status) + " | Message: " + String(setResult.message) + " | Data: " + String(setResult.data));

  delay(2000); // Wait for two seconds

  // Get data (Get Data)
  PxServ::Callback getResult = client.getData("msg"); // Get the value for the "msg" key
  Serial.println("Get Result -> Status: " + String(getResult.status) + " | Message: " + String(getResult.message) + " | Data: " + String(getResult.data));

  delay(2000); // Wait for two seconds

  // Remove data (Remove Data)
  PxServ::Callback removeResult = client.removeData("msg"); // Remove the "msg" key
  Serial.println("Remove Result -> Status: " + String(removeResult.status) + " | Message: " + String(removeResult.message) + " | Data: " + String(removeResult.data));

  delay(2000); // Wait for two seconds
}
```
