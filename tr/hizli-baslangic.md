---
icon: bolt
---

# Hızlı Başlangıç

PxServ, IoT sistemleri geliştirmek isteyen geliştiriciler ve kullanıcılar için kapsamlı yazılımsal ve donanımsal destekler sunan bir platformdur. PxServ, API'ler ve kütüphaneler ile projelerinize entegre olmanızı sağlarken, donanımsal olarak da PxServ Quadro geliştirme kartı (çok yakında!) gibi çözümler sunacaktır.

### PxServ ile Proje Geliştirme Adımları

1. **PxServ'e Kaydolun ve Proje Oluşturun**\
   PxServ platformuna giriş yaparak yeni bir proje oluşturun.
2. **Geliştirme Ortamınızı Seçin**\
   PxServ, birçok programlama dili ve donanım platformuyla uyumludur. Şu teknolojileri destekler:
   * Arduino
   * JavaScript / TypeScript
   * Rust
   * ESP32, ESP8266
   * Raspberry Pi
   * Internete bağlanabilen herhangi bir yazılım veya donanım
3.  **Projenizi Geliştirin ve Veri Gönderimini Tanımlayın**\
    Cihazınızın PxServ ile hangi verileri paylaşacağını belirleyin. PxServ'in sunduğu çeşitli kütüphanelerden faydalanarak projenizi kolayca geliştirebilirsiniz:

    * **Arduino Kütüphanesi**
    * **JavaScript / TypeScript Kütüphanesi**
    * **Rust Kütüphanesi**

    Örnek olarak, bu projede **Arduino platformunda ESP32 kullanacağımız için Arduino Kütüphanesi'ni tercih edeceğiz.**\


    Aşağıda, ESP32 ve DHT11 sıcaklık & nem sensörünü kullanarak PxServ'e veri gönderen bir örnek kod bulunmaktadır:\


    ```cpp
    #include <PxServ.h>
    #include "DHT.h"

    #define DHT_PIN 4       // DHT11 Sensörünün bağlı olduğu pin
    #define DHT_TYPE DHT11  // Sensör tipi varsayılan olarak DHT11

    // PxServ API Anahtarı (Proje API anahtarınızı buraya girin)
    PxServ client("pxserv_api_key");
    DHT dht(DHT_PIN, DHT_TYPE);

    void setup() {
      // Wi-Fi ayarları (Wi-Fi SSID ve Şifre)
      Serial.begin(115200);
      PxServ::connectWifi("wifi_ssid", "wifi_sifre");
      dht.begin();
    }

    void loop() {
      float temperature = dht.readTemperature();
      float humidity = dht.readHumidity();

      if (isnan(temperature) || isnan(humidity)) {
        Serial.println("DHT11 sensöründen veri okunamadı!");
        return;
      }

      Serial.print("Sıcaklık: ");
      Serial.print(temperature);
      Serial.println("°C");
      Serial.print("Nem: ");
      Serial.print(humidity);
      Serial.println("%");

      // Verileri PxServ'e kaydetme
      PxServ::Callback tempResult = client.setData("temperature", String(temperature));
      PxServ::Callback humResult = client.setData("humidity", String(humidity));

      Serial.print("Sıcaklık Kaydetme Durumu: ");
      Serial.println(tempResult.status);
      Serial.print("Nem Kaydetme Durumu: ");
      Serial.println(humResult.status);
    }
    ```

    \
    [Arduino kütüphanesinin detaylı kullanımını ve ek özellikleri keşfetmek için buraya tıklayın.](arduino-kutuphanesi.md)
4.  **Verilerinizi PxServ ile Yönetin**

    * PxServ'in yönetim panelinden AI destekli veri analizleri yapabilirsiniz.
    * İstatistikler sayfasında verilerinizi inceleyebilirsiniz.
    * Veritabanı sayfasından kaydedilen verileri görüntüleyebilir ve yönetebilirsiniz.

    <div data-full-width="true"><figure><img src="../.gitbook/assets/resim (2).png" alt="" width="563"><figcaption><p>PxServ Websitesi</p></figcaption></figure> <figure><img src="../.gitbook/assets/resim (4).png" alt="" width="188"><figcaption><p>PxServ Mobil Uygulaması</p></figcaption></figure></div>
5. **Verilerinize Her Yerden Erişim Sağlayın**\
   Cihazınızın veya yazılımınızın verilerine aşağıdaki yöntemlerle erişebilir ve yönetebilirsiniz:
   * PxServ Yönetim Paneli
   * [PxServ Mobil Uygulaması](https://play.google.com/store/apps/details?id=net.pxserv.mobile)
   * PxServ kullanarak geliştirilen / geliştireceğiniz özel yönetim panelleri, web sayfaları veya mobil uygulamalar

PxServ ile IoT projelerinizi kolayca geliştirebilir, yönetebilir ve optimize edebilirsiniz. Daha fazla bilgi için resmi dökümantasyonumuza göz atmayı unutmayın!
