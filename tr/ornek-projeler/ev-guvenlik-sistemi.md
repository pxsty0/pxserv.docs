# Ev Güvenlik Sistemi

ESP32'ye bağlı bir PIR sensörü kullanarak hareket algılar, bir zili tetikler ve PxServ'e uyarı gönderir. Sistem, PxServ paneli veya API aracılığıyla `system_status` anahtarı güncellenerek uzaktan devre dışı bırakılabilir.

**Donanım:** ESP32, PIR hareket sensörü, zil\
**Kütüphaneler:** `WiFi.h`, `PxServ.h`

```cpp
#include <WiFi.h>
#include <PxServ.h>

#define WIFI_SSID "your_ssid"
#define WIFI_PASS "your_password"
#define MOTION_SENSOR 5
#define BUZZER 6

PxServ client("pxserv_api_anahtariniz");

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
    client.setData("alert", "Hareket algılandı!");
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
