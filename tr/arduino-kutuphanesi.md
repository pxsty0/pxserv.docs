---
icon: gear-code
---

# Arduino Kütüphanesi

Bu örnek kod, PxServ projesi ile veri tabanı işlemleri yapmanızı sağlar. Aşağıdaki işlemleri gerçekleştirebilirsiniz:

- Veritabanına veri kaydetme
- Veritabanınada veriyi 0 ile 1 arasında geçiş yaptırma
- Veritabanından veri okuma
- Veritabanından veri silme

## Gereksinimler

Bu örneği kullanmadan önce aşağıdaki kütüphanelerin Arduino IDE'ye yüklü olduğundan emin olun:

- **WiFi.h**: Wi-Fi bağlantısı sağlamak için.
- **PxServ.h**: PxServ API'si ile iletişim kurmak için.

## Bağlantı Ayarları

Wi-Fi bağlantısı ve PxServ API anahtarınızı aşağıdaki alanlara girmeniz gerekmektedir:

```cpp
#include <PxServ.h>

// PxServ API Anahtarı (Proje API anahtarınızı buraya girin)
PxServ client("pxserv_api_key");

void setup()
{
    // Wi-Fi ayarları (Wi-Fi SSID ve Şifre)
    Serial.begin(115200);
    PxServ::connectWifi("wifi_ssid", "wifi_sifre");
}

void loop()
{
    // Veri Kaydetme
    PxServ::Callback setResult = client.setData("exampleData1", "value"); // "exampleData1" anahtarına "value" değerini ekle
    Serial.print("Veri Ekleme Sonucu -> Durum: ");
    Serial.print(setResult.status);
    Serial.print(" | Mesaj: ");
    Serial.print(setResult.message);
    Serial.print(" | Veri: ");
    Serial.println(setResult.data);

    delay(2000); // İki saniye bekle

    // Veri Geçişi
    PxServ::Callback toggleResult = client.toggleData("exampleData2"); // “exampleData2” anahtarının değerini 0 ile 1 arasında geçiş yaptırır
    Serial.print("Toggle Result -> Status: ");
    Serial.print(toggleResult.status);
    Serial.print(" | Message: ");
    Serial.print(toggleResult.message);
    Serial.print(" | Data: ");
    Serial.println(toggleResult.data);

    delay(2000); // İki saniye bekle

    // Veri Okuma
    PxServ::Callback getResult = client.getData("exampleData1"); // "exampleData1" anahtarının değerini getir
    Serial.print("Veri Okuma Sonucu -> Durum: ");
    Serial.print(getResult.status);
    Serial.print(" | Mesaj: ");
    Serial.print(getResult.message);
    Serial.print(" | Veri: ");
    Serial.println(getResult.data);

    delay(2000); // İki saniye bekle

    // Veri Kaldırma
    PxServ::Callback removeResult = client.removeData("exampleData1"); // "exampleData1" anahtarını kaldır
    Serial.print("Kaldırma Sonucu -> Durum: ");
    Serial.print(removeResult.status);
    Serial.print(" | Mesaj: ");
    Serial.print(removeResult.message);
    Serial.print(" | Veri: ");
    Serial.println(removeResult.data);

    delay(2000); // İki saniye bekle
}
```
