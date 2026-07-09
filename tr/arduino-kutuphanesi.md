---
icon: gear-code
---

# Arduino Kütüphanesi

PxServ Arduino kütüphanesi, ESP32, ESP8266 ve Arduino uyumlu Wi-Fi destekli kartlardan PxServ API'ye doğrudan bağlanmanızı sağlar. Sensör verisi gönderme, cihaz durumunu okuma, uzaktan anahtar değiştirme ve OTA destekli firmware güncelleme gibi IoT senaryoları için hafif ve anlaşılır bir istemci sunar.

## Ne zaman kullanılır?

Bu kütüphane özellikle donanım projelerinde cihazın doğrudan PxServ ile konuşmasını istediğiniz durumlar için uygundur:

* ESP32 veya ESP8266 ile sensör verisi göndermek
* Röle, LED, motor veya alarm durumunu PxServ üzerinden kontrol etmek
* Cihazdan veri okuyup panelde göstermek
* Veritabanındaki bir değeri `0` ve `1` arasında değiştirmek
* OTA ile ESP32 / ESP8266 firmware güncellemesi yapmak

## Gereksinimler

Kullanmadan önce aşağıdakilerin hazır olduğundan emin olun:

* PxServ proje API anahtarı
* Arduino IDE veya PlatformIO
* ESP32 ya da ESP8266 kart desteği
* `PxServ.h` kütüphanesi
* İnternete çıkabilen kararlı bir Wi-Fi ağı

{% hint style="info" %}
OTA fonksiyonlarını kullanacaksanız PxServ Arduino kütüphanesinin **1.3.0 veya daha yeni** bir sürümü yüklü olmalıdır.
{% endhint %}

## Kurulum

Arduino IDE içinde kütüphaneyi yükledikten sonra projenize şu satırı ekleyin:

```cpp
#include <PxServ.h>
```

Ardından PxServ istemcisini proje API anahtarınızla oluşturun:

```cpp
PxServ client("pxserv_api_anahtariniz");
```

## Temel kullanım

Aşağıdaki örnek Wi-Fi bağlantısını kurar, PxServ'e veri yazar, veri okur, bir değeri değiştirir ve son olarak veriyi kaldırır.

```cpp
#include <PxServ.h>

PxServ client("pxserv_api_anahtariniz");

void setup() {
  Serial.begin(115200);
  PxServ::connectWifi("wifi_ssid", "wifi_sifre");
}

void loop() {
  PxServ::Callback setResult = client.setData("temperature", "24.3");
  Serial.print("Kaydetme -> Durum: ");
  Serial.print(setResult.status);
  Serial.print(" | Mesaj: ");
  Serial.println(setResult.message);

  PxServ::Callback getResult = client.getData("temperature");
  Serial.print("Okuma -> Durum: ");
  Serial.print(getResult.status);
  Serial.print(" | Veri: ");
  Serial.println(getResult.data);

  PxServ::Callback toggleResult = client.toggleData("relay");
  Serial.print("Geçiş -> Durum: ");
  Serial.println(toggleResult.status);

  PxServ::Callback removeResult = client.removeData("temperature");
  Serial.print("Kaldırma -> Durum: ");
  Serial.println(removeResult.status);

  delay(5000);
}
```

## Metot referansı

| Metot | Açıklama |
|---|---|
| `PxServ::connectWifi(ssid, password)` | Cihazı verilen Wi-Fi ağına bağlar. |
| `setData(key, value)` | PxServ veritabanına anahtar-değer çifti kaydeder. |
| `getData(key)` | Belirtilen anahtarın güncel değerini okur. |
| `toggleData(key)` | Belirtilen değeri `0` ve `1` arasında değiştirir. |
| `removeData(key)` | Belirtilen anahtarı veritabanından kaldırır. |
| `setDeviceFirmwareVersion(version)` | Cihazın çalışan firmware sürümünü tanımlar. |
| `getDeviceFirmwareVersion()` | Cihaz için tanımlanan firmware sürümünü döndürür. |
| `checkOtaFirmware()` | PxServ panelinde aktif edilmiş OTA firmware varsa kontrol eder ve güncelleme akışını başlatır. |

## Callback yapısı

Veri işlemleri `PxServ::Callback` döndürür. Bu yapı isteğin sonucunu seri monitörde veya kendi hata yönetiminizde kullanabilmeniz için temel alanlar içerir.

| Alan | Açıklama |
|---|---|
| `status` | İşlem sonucunu belirten HTTP durum kodu veya kütüphane durum kodu. |
| `message` | İşlemle ilgili kısa açıklama. |
| `data` | Okuma işlemlerinde dönen veri veya işlem sonucuyla ilgili ek içerik. |

## OTA kullanımı

OTA destekli cihazlarda firmware sürümünü tanımlayıp `loop()` içinde OTA kontrolünü çağırmanız yeterlidir.

```cpp
#include <PxServ.h>

PxServ client("pxserv_api_anahtariniz");

void setup() {
  Serial.begin(115200);
  PxServ::connectWifi("wifi_ssid", "wifi_sifre");
  client.setDeviceFirmwareVersion("1.0.0");
}

void loop() {
  client.setData("firmwareVersion", client.getDeviceFirmwareVersion());
  client.checkOtaFirmware();
}
```

Detaylı OTA akışı, firmware hazırlama ve Arduino IDE üzerinden `.bin` dosyası oluşturma adımları için bkz: [OTA Özelliği](ota-ozelligi.md)

## İyi pratikler

* API anahtarınızı herkese açık kod depolarında paylaşmayın.
* Sensör verilerini göndermeden önce doğrulayın; `nan`, boş veya hatalı değerleri filtreleyin.
* Ağ trafiğini azaltmak için gereksiz yere çok sık veri göndermeyin.
* `loop()` içinde uzun bloklayıcı işlemlerden kaçının.
* Kritik cihazlarda OTA güncellemesini önce test cihazında deneyin.
* ESP8266 kullanıyorsanız firmware boyutu, boş RAM ve flash alanını düzenli kontrol edin.

## Sorun giderme

**Wi-Fi bağlantısı kurulamıyor**

* SSID ve şifrenin doğru olduğundan emin olun.
* Cihazın 2.4 GHz Wi-Fi ağına bağlandığını kontrol edin.
* Seri monitörde bağlantı çıktısını izleyin.

**Veri panelde görünmüyor**

* API anahtarının doğru projeye ait olduğundan emin olun.
* Anahtar adını panelde aradığınız adla aynı yazdığınızı kontrol edin.
* Değer gönderirken `String` veya metin olarak gönderim yapmayı tercih edin.

**OTA güncellemesi başlamıyor**

* Kütüphane sürümünün 1.3.0 veya üzeri olduğundan emin olun.
* `setDeviceFirmwareVersion()` ve `checkOtaFirmware()` fonksiyonlarının yeni firmware içinde de bulunduğunu kontrol edin.
* Panelde firmware sürümünün aktif sürüm olarak işaretlendiğini doğrulayın.
