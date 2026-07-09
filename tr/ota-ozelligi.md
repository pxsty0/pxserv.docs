---
title: OTA Özelliği
icon: cloud-arrow-up
---

# OTA Özelliği

{% hint style="warning" %}
OTA özelliğini kullanabilmek için PxServ Arduino kütüphanesinin **1.3.0 veya daha yeni** bir sürümü yüklü olmalıdır. Daha eski sürümlerde `setDeviceFirmwareVersion()`, `getDeviceFirmwareVersion()` ve `checkOtaFirmware()` fonksiyonları bulunmayabilir.
{% endhint %}

OTA (Over The Air), ESP32 ve ESP8266 tabanlı cihazlara yeni firmware'i USB kablosu takmadan, Wi-Fi üzerinden uzaktan yüklemenizi sağlar. PxServ OTA özelliği, PxServ Arduino kütüphanesiyle çalışan cihazların firmware sürümünü takip etmeye, aktif güncellemeleri kontrol etmeye ve yeni kodu sahadaki cihazlara güvenli şekilde dağıtmaya odaklanır.

- Amaç: ESP32 ve ESP8266 cihazlarına uzaktan kod güncellemesi göndermek.
- Kullanıldığı yer: PxServ panelindeki OTA / cihaz güncelleme akışı ve PxServ Arduino kütüphanesi.
- Desteklenen kartlar: ESP32 ve ESP8266 ailesindeki Wi-Fi destekli kartlar.
- İlk kurulum şartı: Cihazlara OTA destekli ilk firmware bir kez USB/seri port üzerinden yüklenmelidir.

{% hint style="info" %}
**ESP8266 uyarısı:** ESP8266 cihazlarda OTA desteği, çipin donanımsal kısıtlamaları nedeniyle ESP32 kadar sağlıklı ve konforlu olmayabilir. En iyi OTA deneyimi için yeterli flash alanına ve RAM kapasitesine sahip kartlar tercih edilmelidir. Firmware boyutu büyüdükçe ESP8266 tarafında güncelleme kararlılığı düşebilir.
{% endhint %}

## Ne zaman kullanılır?

OTA özellikle sahada çalışan, kutu içine yerleştirilmiş veya erişilmesi zor cihazlarda değerlidir. Örneğin bir sıcaklık istasyonunda ölçüm aralığını değiştirmek, bir röle kontrol cihazına yeni güvenlik kontrolü eklemek ya da GPS takip cihazındaki veri gönderim mantığını güncellemek için cihazı yerinden sökmeniz gerekmez.

OTA şu durumlarda idealdir:

- Cihaz fiziksel olarak kolay erişilebilir değildir.
- Birden fazla ESP32 veya ESP8266 aynı projeye bağlıdır.
- Firmware'de hata düzeltmesi, yeni özellik veya konfigürasyon değişikliği dağıtmak istersiniz.
- Cihazların hangi sürümde çalıştığını merkezi olarak görmek istersiniz.

OTA şu durumlarda dikkatli kullanılmalıdır:

- Cihaz pil ile çalışıyor ve güncelleme sırasında kapanma riski varsa.
- Wi-Fi bağlantısı sık sık kopuyorsa.
- Firmware boyutu cihazın boş flash alanına çok yaklaşıyorsa.
- Cihaz kritik bir sistemi kontrol ediyorsa ve bakım penceresi planlanmamışsa.

## OTA akışı nasıl çalışır?

PxServ ile OTA akışı basitçe şu adımlardan oluşur:

1. ESP32 veya ESP8266, Wi-Fi ağına bağlanır.
2. Cihaz, PxServ Arduino kütüphanesi ile API anahtarını kullanarak PxServ'e bağlanır.
3. Cihaz PxServ üzerinden kullanıcı tarafından yüklenmiş firmware varsa cihaz güncellemeyi indirir.
4. Firmware flash belleğe yazılır.
5. Yazma ve doğrulama başarılıysa cihaz yeniden başlar.
6. Cihaz yeni sürümle açılır.

## Arayüz görselleri

<figure><img src="../.gitbook/assets/resim (2).png" alt="PxServ OTA paneli genel görünüm"><figcaption></figcaption></figure>

## Temel kavramlar

| Kavram      | Açıklama                                                                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Firmware    | Arduino IDE veya PlatformIO ile derlenen `.bin` dosyasıdır. ESP32/ESP8266 üzerinde çalışan asıl programdır.                                                                              |
| Sürüm       | Cihazdaki yazılımın versiyonudur. Örneğin `1.0.0`, `1.1.0`, `2026.07.09`.                                                                                                                |
| Aktif Sürüm | PxServ panelinde cihazlara gönderilmek üzere aktif hale getirilen hedef firmware sürümüdür. Cihaz `checkOtaFirmware()` ile kontrol yaptığında bu sürümü indirir ve kendi üzerine yükler. |

## Gereksinimler

OTA kullanmadan önce şunların hazır olduğundan emin olun:

- PxServ proje API anahtarı
- Arduino IDE veya PlatformIO
- ESP32 ya da ESP8266 kart desteği
- `PxServ.h` Arduino kütüphanesi
- Kararlı Wi-Fi bağlantısı
- OTA destekli ilk firmware'in cihaza seri port üzerinden yüklenmiş olması
- Firmware için yeterli flash alanı

ESP32 için Arduino IDE'de genellikle OTA destekleyen bir partition şeması seçilmelidir. Firmware boyutu büyüdükçe OTA için ayrılan alan yetersiz kalabilir. ESP8266 tarafında da flash boyutu ve OTA alanı seçimi önemlidir; büyük firmware'lerde `Flash Size` ayarını kontrol edin.

## ESP32 / ESP8266 Örnek Kod

Aşağıdaki örnek, PxServ Arduino kütüphanesi ile ESP32 ve ESP8266 cihazlarda aynı şekilde kullanılabilir. Kullanıcı tarafında OTA kodu değişmez; kart seçimi, flash ayarı ve derleme çıktısı Arduino IDE tarafında belirlenir.

`setDeviceFirmwareVersion()` cihazın mevcut firmware sürümünü tanımlar, `getDeviceFirmwareVersion()` bu değeri okumayı sağlar, `checkOtaFirmware()` ise PxServ üzerinde aktif edilen firmware sürümü varsa cihazın bu güncellemeyi almasını başlatır.

```cpp
#include <PxServ.h>

PxServ client("pxserv_proje_api_anahtariniz");

void setup() {
  Serial.begin(115200);

  PxServ::connectWifi("wifi_ssid", "wifi_sifre");

  client.setDeviceFirmwareVersion("1.0.0");
}

void loop() {
  client.setData("firmwareVersion", client.getDeviceFirmwareVersion()); // İsteğe Bağlı

  client.checkOtaFirmware();
}
```

Bu örnekte cihaz, mevcut firmware sürümünü `firmwareVersion` anahtarıyla PxServ'e gönderir ve ardından OTA güncellemesi olup olmadığını kontrol eder. Gerçek projelerde `checkOtaFirmware()` fonksiyonu loop döngüsünün en altına yazılmalıdır.

## Firmware hazırlama

OTA ile yüklenen dosya, kaynak kod dosyası değil derlenmiş firmware dosyasıdır.

{% hint style="info" %}
**Çok önemli:** OTA ile yükleyeceğiniz yeni firmware kodunun içinde de PxServ OTA kodları yer almalıdır. Yani yeni sürümde de `setDeviceFirmwareVersion()` ve `checkOtaFirmware()` akışı korunmalıdır. OTA kodunu yeni firmware'den çıkarırsanız cihaz o sürüme geçebilir, ancak sonraki güncellemeleri artık uzaktan alamaz; tekrar USB/seri port üzerinden müdahale etmeniz gerekir.
{% endhint %}

Arduino IDE kullanıyorsanız PxServ paneline yükleyeceğiniz dosyayı **Sketch -> Export Compiled Binary** (**Eskiz -> Derlenmiş Dosyayı Dışa Aktar**) seçeneğiyle oluşturabilirsiniz. Bu işlem, açık olan Arduino projesini derler ve OTA için kullanılabilecek `.bin` dosyasını proje klasörüne çıkarır.

### Arduino IDE ile `.bin` firmware oluşturma

<figure><img src="../.gitbook/assets/Adsız tasarım.png" alt="Arduino IDE Export Compiled Binary menüsü"><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/Adsız tasarım(1).png" alt="Arduino IDE Export Compiled Binary menüsü"><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/resim (4).png" alt="Arduino IDE ile oluşturulan .bin firmware dosyası"><figcaption></figcaption></figure>

### Doğru `.bin` dosyasını seçme

Arduino IDE, kart tipine ve ayarlara göre birden fazla çıktı dosyası oluşturabilir. PxServ OTA için yüklemeniz gereken dosya, cihazda çalışacak ana firmware dosyasıdır. Genellikle proje adınızla başlayan ve `.bin` uzantısıyla biten dosyayı kullanırsınız.

Örnek dosya adları:

- `sera-nem.ino.bin`
- `proje-adi.ino.bin`
- `akilli-role.ino.bin`

{% hint style="info" %}
ESP32 tarafında bootloader veya partition ile ilgili ek `.bin` dosyaları da görebilirsiniz. OTA güncellemesi için genellikle sadece proje-adi.ino.bin formatında olan `.bin` dosyası gereklidir
{% endhint %}

## Bağlantı ve güç kararlılığı

OTA sırasında cihazın kapanması veya Wi-Fi bağlantısının kopması güncellemenin başarısız olmasına neden olabilir. ESP32 ve ESP8266 genellikle yarım kalan güncellemelerde eski firmware ile çalışmaya devam edecek şekilde tasarlansa da, üretim ortamında risk azaltılmalıdır.

## Sorun giderme

**Cihaz güncellemeyi görmüyor**

- Cihaz internete bağlı mı kontrol edin.
- API anahtarının doğru projeye ait olduğundan emin olun.
- `checkOtaFirmware()` fonksiyonu `loop()` içinde düzenli çağrılıyor mu bakın.
- Firmware sürümü panelde aktif sürüm olarak işaretlenmiş mi bakın.

**Güncelleme başlıyor ama tamamlanmıyor**

- Wi-Fi sinyal kalitesini kontrol edin.
- Güç kaynağının yeterli olduğundan emin olun.
- Firmware dosya boyutunun OTA alanına sığıp sığmadığını kontrol edin.
- ESP8266 kullanıyorsanız flash boyutu, boş RAM ve firmware boyutunu tekrar gözden geçirin.

**Cihaz güncellemeden sonra açılmıyor**

- Seri monitör ile boot loglarını okuyun.
- Yanlış board için derlenmiş firmware yüklenmiş olabilir.
- Kod, açılışta bloklanan bir Wi-Fi veya sensör bekleme döngüsüne girmiş olabilir.
- Gerekirse cihazı USB/seri port üzerinden son kararlı firmware ile yeniden yükleyin.

## Kısa özet

PxServ OTA, ESP32 ve ESP8266 projelerinde sahadaki cihazları yönetilebilir hale getirir. İlk OTA destekli firmware seri porttan yüklendikten sonra, sonraki güncellemeler PxServ üzerinden uzaktan dağıtılabilir. Sağlam yeterli flash alanı ve kontrollü dağıtım süreci OTA'nın güvenilir çalışması için en önemli parçalardır.

Detaylı Arduino kullanımı için bkz: [Arduino Kütüphanesi](arduino-kutuphanesi.md)
