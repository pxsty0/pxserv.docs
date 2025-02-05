---
icon: js
---

# JavaScript / TypeScript Kütüphanesi

Bu örnek kod, PxServ projesi ile veri tabanı işlemleri yapmanızı sağlar. Aşağıdaki işlemleri gerçekleştirebilirsiniz:

* Veritabanına veri kaydetme
* Veritabanından veri okuma
* Veritabanından veri silme

## Gereksinimler

Bu örneği kullanmadan önce aşağıdaki kütüphanelerin yüklü olduğundan emin olun:

* **pxserv**: PxServ API'si ile iletişim kurmak için.

## Kurulum

PxServ kütüphanesini npm kullanarak yükleyebilirsiniz:

```sh
npm install pxserv
```

## Bağlantı Ayarları

PxServ API anahtarınızı ve isteğe bağlı olarak temel URL'yi aşağıdaki alanlara girmeniz gerekmektedir:

### JavaScript

```javascript
const PxServ = require("pxserv").default;

// Yapılandırma ayarları
const config = {
  apiKey: "API_KEY",
};

// PxServ örneği oluşturma
const pxServ = new PxServ(config);

// IoT cihazından sıcaklık ve nem verilerini alıp sunucuya kaydetme
const temperature = "22.5°C";
const humidity = "45%";

(async () => {
  try {
    // Sıcaklık ve nem verilerini sunucuya kaydet
    await pxServ.setData("temperature", temperature);
    await pxServ.setData("humidity", humidity);

    // Sıcaklık ve nem verilerini sunucudan çekme
    const currentTemperature = await pxServ.getData("temperature");
    const currentHumidity = await pxServ.getData("humidity");

    console.log(`Güncel Sıcaklık: ${currentTemperature}`); // 'Güncel Sıcaklık: 22.5°C'
    console.log(`Güncel Nem: ${currentHumidity}`); // 'Güncel Nem: 45%'

    // Tüm verileri listeleme
    const allData = await pxServ.getAll();
    console.log(allData); // {'temperature': '22.5°C', 'humidity': '45%'}

    // Eski sıcaklık verisini silme
    await pxServ.removeData("temperature");
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
})();

```

### TypeScript

```javascript
import PxServ from "pxserv";

// Yapılandırma ayarları
const config = {
  apiKey: "API_KEY",
};

// PxServ örneği oluşturma
const pxServ = new PxServ(config);

// IoT cihazından sıcaklık ve nem verilerini alıp sunucuya kaydetme
const temperature = "22.5°C";
const humidity = "45%";

(async () => {
  try {
    // Sıcaklık ve nem verilerini sunucuya kaydet
    await pxServ.setData("temperature", temperature);
    await pxServ.setData("humidity", humidity);

    // Sıcaklık ve nem verilerini sunucudan çekme
    const currentTemperature = await pxServ.getData("temperature");
    const currentHumidity = await pxServ.getData("humidity");

    console.log(`Güncel Sıcaklık: ${currentTemperature}`); // 'Güncel Sıcaklık: 22.5°C'
    console.log(`Güncel Nem: ${currentHumidity}`); // 'Güncel Nem: 45%'

    // Tüm verileri listeleme
    const allData = await pxServ.getAll();
    console.log(allData); // {'temperature': '22.5°C', 'humidity': '45%'}

    // Eski sıcaklık verisini silme
    await pxServ.removeData("temperature");
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
})();

```

## Kullanım

Bu kodları kendi projenize ekleyin ve gerekli kütüphaneleri yükledikten sonra çalıştırın. Kod, PxServ API'si ile veri ekleme, okuma ve silme işlemlerini gerçekleştirecektir.

Örnek Çıktılar Aşağıda, konsolda görebileceğiniz örnek çıktılar bulunmaktadır:

```
Current Temperature: 22.5°C
Current Humidity: 45%
{'temperature': '22.5°C', 'humidity': '45%'}
```

Bu çıktılar, verilerin başarıyla eklendiğini, okunduğunu ve silindiğini göstermektedir.
