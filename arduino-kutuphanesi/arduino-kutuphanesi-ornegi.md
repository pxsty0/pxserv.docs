# Arduino Kütüphanesi

Bu örnek kod, PxServ projesi ile veri tabanı işlemleri yapmanızı sağlar. Aşağıdaki işlemleri gerçekleştirebilirsiniz:

* Veritabanına veri kaydetme
* Veritabanından veri okuma
* Veritabanından veri silme

## Gereksinimler

Bu örneği kullanmadan önce aşağıdaki kütüphanelerin Arduino IDE'ye yüklü olduğundan emin olun:

* **WiFi.h**: Wi-Fi bağlantısı sağlamak için.
* **PxServ.h**: PxServ API'si ile iletişim kurmak için.

## Bağlantı Ayarları

Wi-Fi bağlantısı ve PxServ API anahtarınızı aşağıdaki alanlara girmeniz gerekmektedir:

```cpp
#include <WiFi.h>
#include <PxServ.h>

// Wi-Fi ayarları (Wi-Fi SSID ve Şifre)
#define WIFI_SSID "your_wifi_ssid" // Wi-Fi Adı
#define WIFI_PASS "your_wifi_password" // Wi-Fi Şifresi

// PxServ API Key (Proje API Anahtarınızı buraya ekleyin)
PxServ client("your_pxserv_api_key");

void setup()
{
  // Seri haberleşmeyi başlat
  Serial.begin(115200);

  // Wi-Fi'a bağlan
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  Serial.print("Wi-Fi'ya bağlanıyor...");
  
  // Bağlantı sağlanana kadar bekle
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(500); // Bağlantı sürecini yavaşlatmak için kısa bir gecikme eklenebilir
  }
  Serial.println("Bağlandı!");
}

void loop()
{
  // Veri ekle (Set Data)
  PxServ::Callback setResult = client.setData("msg", "value"); // "msg" anahtarına "value" değerini ekle
  Serial.println("Set Result -> Status: " + String(setResult.status) + " | Message: " + String(setResult.message) + " | Data: " + String(setResult.data));

  delay(2000); // İki saniye bekle

  // Veri al (Get Data)
  PxServ::Callback getResult = client.getData("msg"); // "msg" anahtarı için değeri getir
  Serial.println("Get Result -> Status: " + String(getResult.status) + " | Message: " + String(getResult.message) + " | Data: " + String(getResult.data));

  delay(2000); // İki saniye bekle

  // Veri kaldır (Remove Data)
  PxServ::Callback removeResult = client.removeData("msg"); // "msg" anahtarını kaldır
  Serial.println("Remove Result -> Status: " + String(removeResult.status) + " | Message: " + String(removeResult.message) + " | Data: " + String(removeResult.data));

  delay(2000); // İki saniye bekle
}

```
