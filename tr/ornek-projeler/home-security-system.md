# Home Security System

```cpp
#include <WiFi.h>
#include <PxServ.h>

#define WIFI_SSID "your_ssid"
#define WIFI_PASS "your_password"
#define MOTION_SENSOR 5
#define BUZZER 6

PxServ client("your_pxserv_api_key");

void setup() {
  Serial.begin(115200);
  pinMode(MOTION_SENSOR, INPUT);
  pinMode(BUZZER, OUTPUT);
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
}

void loop() {
  if (digitalRead(MOTION_SENSOR) == HIGH) {
    client.setData("alert", "Motion detected!");
    digitalWrite(BUZZER, HIGH);
    delay(1000);
    digitalWrite(BUZZER, LOW);
  }
  
  PxServ::Callback result = client.getData("system_status");
  if (result.data == "disabled") {
    digitalWrite(BUZZER, LOW);
  }
  
  delay(1000);
}
```
