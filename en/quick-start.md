---
icon: bolt
---

# Quick Start

PxServ is a platform that provides comprehensive software and hardware support for developers and users who want to develop IoT systems. PxServ enables seamless integration into your projects through APIs and libraries while also offering hardware solutions such as the PxServ Quadro development board (coming soon!).

### Project Development Steps with PxServ

1. **Sign Up for PxServ and Create a Project**\
   Log in to the PxServ platform and create a new project.
2. **Choose Your Development Environment**\
   PxServ is compatible with various programming languages and hardware platforms. It supports the following technologies:
   * Arduino
   * JavaScript / TypeScript
   * Rust
   * ESP32, ESP8266
   * Raspberry Pi
   * Any software or hardware capable of connecting to the internet
3.  **Develop Your Project and Define Data Transmission**\
    Define the data your device will share with PxServ. You can easily develop your project by utilizing the various libraries provided by PxServ:

    * **Arduino Library**
    * **JavaScript / TypeScript Library**
    * **Rust Library**

    For example, in this project, we will use the **Arduino Library since we are using the ESP32 on the Arduino platform.**\


    Below is a sample code that sends data to PxServ using an ESP32 and a DHT11 temperature & humidity sensor:\


    ```cpp
    #include <PxServ.h>
    #include "DHT.h"

    #define DHT_PIN 4       // Pin to which DHT11 Sensor is connected
    #define DHT_TYPE DHT11  // Sensor type DHT11 by default

    // PxServ API Key (Enter your project API key here)
    PxServ client("pxserv_api_key");
    DHT dht(DHT_PIN, DHT_TYPE);

    void setup() {
      // Wi-Fi settings (Wi-Fi SSID and Password)
      Serial.begin(115200);
      PxServ::connectWifi("wifi_ssid", "wifi_sifre");
      dht.begin();
    }

    void loop() {
      float temperature = dht.readTemperature();
      float humidity = dht.readHumidity();

      if (isnan(temperature) || isnan(humidity)) {
        Serial.println("Failed to read data from DHT11 sensor!");
        return;
      }

      Serial.print("Temperature: ");
      Serial.print(temperature);
      Serial.println("°C");
      Serial.print("Humidity: ");
      Serial.print(humidity);
      Serial.println("%");

      // Saving data to PxServ
      PxServ::Callback tempResult = client.setData("temperature", String(temperature));
      PxServ::Callback humResult = client.setData("humidity", String(humidity));

      Serial.print("Temperature Saving Status: ");
      Serial.println(tempResult.status);
      Serial.print("Humidity Saving Status: ");
      Serial.println(humResult.status);
    }
    ```

    \
    [Click here to explore the detailed usage and additional features of the Arduino library.](arduino-library.md)
4.  **Manage Your Data with PxServ**

    * Perform AI-powered data analysis from PxServ’s management panel.
    * Examine your data on the statistics page.
    * View and manage stored data from the database page.

    <div><figure><img src="../.gitbook/assets/resim (5).png" alt="" width="563"><figcaption><p>PxServ Website</p></figcaption></figure> <figure><img src="../.gitbook/assets/resim (7).png" alt="" width="188"><figcaption><p>PxServ Mobile App</p></figcaption></figure></div>
5. **Access Your Data from Anywhere**\
   Access and manage your device or software data through the following methods:
   * PxServ Management Panel
   * [PxServ Mobile Application](https://play.google.com/store/apps/details?id=net.pxserv.mobile)
   * Custom management panels, web pages, or mobile applications developed using PxServ

With PxServ, you can easily develop, manage, and optimize your IoT projects. Don't forget to check out our official documentation for more information!
