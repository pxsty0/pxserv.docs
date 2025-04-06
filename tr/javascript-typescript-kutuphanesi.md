---
icon: js
---

# JavaScript / TypeScript Kütüphanesi

Bu örnek kod, PxServ projesi ile veri tabanı işlemleri yapmanızı sağlar. Aşağıdaki işlemleri gerçekleştirebilirsiniz:

- Veritabanına veri kaydetme
- Veritabanınada veriyi 0 ile 1 arasında geçiş yaptırma
- Veritabanından veri okuma
- Veritabanından veri silme

## Gereksinimler

Bu örneği kullanmadan önce aşağıdaki kütüphanelerin yüklü olduğundan emin olun:

- **pxserv**: PxServ API'si ile iletişim kurmak için.

## Kurulum

PxServ kütüphanesini npm kullanarak yükleyebilirsiniz:

```sh
npm install pxserv
```

## Bağlantı Ayarları

PxServ API anahtarınızı ve isteğe bağlı olarak temel URL'yi aşağıdaki alanlara girmeniz gerekmektedir:

### JavaScript

```javascript
// PxServ kütüphanesini projeye dahil et
const PxServ = require("pxserv").default;

// API anahtarınızı girerek yeni bir PxServ Instancesi oluşturun
const pxServ = new PxServ({
  apiKey: "API_KEY", // Kendi API anahtarınızı buraya yazın
});

// Temsili veriler
const temp = "24.3°C"; // Ortam sıcaklığı
const hum = "58%"; // Nem oranı
const light = "1"; // Aydınlatma açık (1 = açık, 0 = kapalı)

(async () => {
  try {
    // Veri Kaydetme
    await pxServ.setData("temp", temp);
    await pxServ.setData("hum", hum);
    await pxServ.setData("light", light);
    console.log("Sıcaklık, nem ve aydınlatma durumu PxServ'e kaydedildi.");

    // Veri Okuma
    const currentTemp = await pxServ.getData("temp");
    const currentHum = await pxServ.getData("hum");
    const currentLight = await pxServ.getData("light");

    console.log(`Sıcaklık: ${currentTemp}`);
    console.log(`Nem: ${currentHum}`);
    console.log(`Aydınlatma: ${currentLight === "1" ? "Açık" : "Kapalı"}`);

    // Veri Geçişi
    await pxServ.toggleData("light");
    console.log("Aydınlatma durumu değiştirildi.");
    const toggledLight = await pxServ.getData("light");
    console.log(
      `Yeni aydınlatma durumu: ${toggledLight === "1" ? "Açık" : "Kapalı"}`
    );

    // Tüm Verileri Görüntüleme
    const allData = await pxServ.getAll();
    console.log("Tüm veriler:");
    console.log(allData);

    // Veri Silme
    await pxServ.removeData("temp");
    await pxServ.removeData("hum");
    await pxServ.removeData("light");
    console.log("Test verileri başarıyla silindi.");
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
})();
```

### TypeScript

```javascript
// PxServ kütüphanesini projeye dahil et
import PxServ from "pxserv";

// API anahtarınızı girerek yeni bir PxServ Instancesi oluşturun
const pxServ = new PxServ({
  apiKey: "API_KEY", // Kendi API anahtarınızı buraya yazın
});

// Temsili veriler
const temp = "24.3°C"; // Ortam sıcaklığı
const hum = "58%"; // Nem oranı
const light = "1"; // Aydınlatma açık (1 = açık, 0 = kapalı)

(async () => {
  try {
    // Veri Kaydetme
    await pxServ.setData("temp", temp);
    await pxServ.setData("hum", hum);
    await pxServ.setData("light", light);
    console.log("Sıcaklık, nem ve aydınlatma durumu PxServ'e kaydedildi.");

    // Veri Okuma
    const currentTemp = await pxServ.getData("temp");
    const currentHum = await pxServ.getData("hum");
    const currentLight = await pxServ.getData("light");

    console.log(`Sıcaklık: ${currentTemp}`);
    console.log(`Nem: ${currentHum}`);
    console.log(`Aydınlatma: ${currentLight === "1" ? "Açık" : "Kapalı"}`);

    // Veri Geçişi
    await pxServ.toggleData("light");
    console.log("Aydınlatma durumu değiştirildi.");
    const toggledLight = await pxServ.getData("light");
    console.log(
      `Yeni aydınlatma durumu: ${toggledLight === "1" ? "Açık" : "Kapalı"}`
    );

    // Tüm Verileri Görüntüleme
    const allData = await pxServ.getAll();
    console.log("Tüm veriler:");
    console.log(allData);

    // Veri Silme
    await pxServ.removeData("temp");
    await pxServ.removeData("hum");
    await pxServ.removeData("light");
    console.log("Test verileri başarıyla silindi.");
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
})();
```

## Kullanım

Bu kodları kendi projenize ekleyin ve gerekli kütüphaneleri yükledikten sonra çalıştırın. Kod, PxServ API'si ile veri ekleme, okuma ve silme işlemlerini gerçekleştirecektir.

Örnek Çıktılar Aşağıda, konsolda görebileceğiniz örnek çıktılar bulunmaktadır:

```
Sıcaklık, nem ve aydınlatma durumu PxServ'e kaydedildi.
Sıcaklık: 24.3°C
Nem: 58%
Aydınlatma: Açık
Aydınlatma durumu değiştirildi.
Yeni aydınlatma durumu: Kapalı
Tüm veriler:
{
  temp: {
    lastUpdate: '2025-04-06T09:10:43.234Z',
    icon: 'defaultIcon',
    value: '24.3°C'
  },
  hum: {
    lastUpdate: '2025-04-06T09:10:43.300Z',
    icon: 'defaultIcon',
    value: '58%'
  },
  light: {
    lastUpdate: '2025-04-06T09:10:43.636Z',
    icon: 'defaultIcon',
    value: '0'
  }
}
Test verileri başarıyla silindi.
```

Bu çıktılar, verilerin başarıyla eklendiğini, okunduğunu ve silindiğini göstermektedir.
