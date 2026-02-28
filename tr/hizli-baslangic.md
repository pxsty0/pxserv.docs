---
icon: bolt
---

# Hızlı Başlangıç

PxServ, yazılım ve donanım projelerini buluta bağlamak için API ve kütüphane desteği sunan bir IoT platformudur. Arduino, JavaScript/TypeScript, Rust, ESP32, ESP8266, Raspberry Pi ve internete bağlanabilen her cihazla uyumludur.

## Adımlar

### 1. Proje Oluşturun

PxServ platformuna giriş yapın ve yeni bir proje oluşturun. Tüm isteklerde kimlik doğrulaması için kullanacağınız bir proje API anahtarı alacaksınız.

### 2. Entegrasyon Yönteminizi Seçin

PxServ şu entegrasyonları destekler:

* [Arduino Kütüphanesi](arduino-kutuphanesi.md)
* [JavaScript / TypeScript Kütüphanesi](javascript-typescript-kutuphanesi.md)
* [Rust Kütüphanesi](rust-kutuphanesi.md)
* [REST API](rest-api/README.md)
* [Gerçek Zamanlı Bağlantı (Socket.IO)](gercek-zamanli-baglanti-socket.io.md)

### 3. PxServ'e Veri Gönderin

Aşağıdaki örnek, DHT11 sensörü ve ESP32 kullanan Arduino Kütüphanesi ile sıcaklık ve nem verilerini PxServ'e göndermektedir:

```cpp
#include <PxServ.h>
#include "DHT.h"

#define DHT_PIN 4
#define DHT_TYPE DHT11

PxServ client("pxserv_api_anahtariniz");
DHT dht(DHT_PIN, DHT_TYPE);

void setup() {
  Serial.begin(115200);
  PxServ::connectWifi("wifi_ssid", "wifi_sifre");
  dht.begin();
}

void loop() {
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("DHT11 sensöründen veri okunamadı.");
    return;
  }

  client.setData("temperature", String(temperature));
  client.setData("humidity", String(humidity));
}
```

### 4. Verilerinizi Yönetin

Veri aktarımı başladıktan sonra şunları yapabilirsiniz:

* Yönetim panelinden yapay zeka destekli veri analizi yapın
* İstatistikler sayfasında geçmiş verileri görüntüleyin
* Veritabanı sayfasından kayıtları inceleyin ve yönetin

<div data-full-width="true"><figure><img src="../.gitbook/assets/resim (2).png" alt="" width="563"><figcaption><p>PxServ Yönetim Paneli</p></figcaption></figure> <figure><img src="../.gitbook/assets/resim (4).png" alt="" width="188"><figcaption><p>PxServ Mobil Uygulaması</p></figcaption></figure></div>

### 5. Verilerinize Her Yerden Erişin

Cihaz veya yazılım verilerinize şu yollarla erişebilirsiniz:

* PxServ Yönetim Paneli
* [PxServ Mobil Uygulaması](https://play.google.com/store/apps/details?id=net.pxserv.mobile)
* PxServ API ile geliştirilmiş özel paneller veya uygulamalar
