# Smart Temperature Monitor:

```cpp
#include <WiFi.h>
#include <PxServ.h>
#include <DHT.h>

#define WIFI_SSID "your_ssid"
#define WIFI_PASS "your_password"
#define DHT_PIN 4
#define DHT_TYPE DHT11

PxServ client("your_pxserv_api_key");
DHT dht(DHT_PIN, DHT_TYPE);

void setup() {
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  dht.begin();
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
}

void loop() {
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  
  client.setData("temperature", String(temp));
  client.setData("humidity", String(hum));
  
  delay(300000); // Update every 5 minutes
}
```
