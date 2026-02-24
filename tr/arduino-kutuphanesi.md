---
icon: gear-code
---

# Arduino Kütüphanesi

PxServ Arduino kütüphanesi, Arduino uyumlu cihazlardan (ESP32, ESP8266 vb.) PxServ API ile doğrudan iletişim kurmanızı sağlar.

**Desteklenen işlemler:**

* Veritabanına veri kaydetme
* Değeri `0` ile `1` arasında geçiş yaptırma
* Veritabanından veri okuma
* Veritabanından veri silme

## Gereksinimler

Kullanmadan önce Arduino IDE'ye şu kütüphaneyi yükleyin:

* **PxServ.h** — PxServ API istemcisi

## Kullanım

```cpp
#include <PxServ.h>

PxServ client("pxserv_api_anahtariniz");

void setup() {
  Serial.begin(115200);
  PxServ::connectWifi("wifi_ssid", "wifi_sifre");
}

void loop() {
  // Veri Kaydetme
  PxServ::Callback setResult = client.setData("exampleData1", "value");
  Serial.print("Kaydetme -> Durum: ");  Serial.print(setResult.status);
  Serial.print(" | Mesaj: ");           Serial.print(setResult.message);
  Serial.print(" | Veri: ");            Serial.println(setResult.data);

  delay(2000);

  // Veri Geçişi (0 ile 1 arasında döngü)
  PxServ::Callback toggleResult = client.toggleData("exampleData2");
  Serial.print("Geçiş -> Durum: ");    Serial.print(toggleResult.status);
  Serial.print(" | Mesaj: ");           Serial.print(toggleResult.message);
  Serial.print(" | Veri: ");            Serial.println(toggleResult.data);

  delay(2000);

  // Veri Okuma
  PxServ::Callback getResult = client.getData("exampleData1");
  Serial.print("Okuma -> Durum: ");    Serial.print(getResult.status);
  Serial.print(" | Mesaj: ");           Serial.print(getResult.message);
  Serial.print(" | Veri: ");            Serial.println(getResult.data);

  delay(2000);

  // Veri Kaldırma
  PxServ::Callback removeResult = client.removeData("exampleData1");
  Serial.print("Kaldırma -> Durum: "); Serial.print(removeResult.status);
  Serial.print(" | Mesaj: ");           Serial.print(removeResult.message);
  Serial.print(" | Veri: ");            Serial.println(removeResult.data);

  delay(2000);
}
```
