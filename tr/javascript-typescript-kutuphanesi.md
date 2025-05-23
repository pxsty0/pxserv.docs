---
icon: js
---

# JavaScript / TypeScript Kütüphanesi

Bu örnek kod, PxServ projesi ile veri tabanı işlemleri yapmanızı sağlar. Aşağıdaki işlemleri gerçekleştirebilirsiniz:

* Veritabanına veri kaydetme
* Veritabanınada veriyi 0 ile 1 arasında geçiş yaptırma
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
// PxServ kütüphanesini projeye dahil et
const PxServ = require("pxserv").default;

// API anahtarınızı girerek yeni bir PxServ Instancesi oluşturun
const pxServ = new PxServ({
  apiKey: "API_KEY", // Kendi API anahtarınızı buraya yazın
});

(async () => {
  try {
    // Veri Kaydetme
    const setTempResult = await pxServ.setData("temp", "24.3°C");
    console.log("Sıcaklık Kaydetme Sonucu:", setTempResult);

    // Veri Okuma
    const getTempResult = await pxServ.getData("temp");
    console.log("Sıcaklık Okuma Sonucu", getTempResult);

    // Geçiş işlemi
    const toggleLightResult = await pxServ.toggleData("light");
    console.log("Light Geçiş(Toggle) Sonucu:", toggleLightResult);

    // Tüm Veriler
    const tumVeriler = await pxServ.getAll();
    console.log("Tüm Veriler:", tumVeriler);

    // Veri Silme
    await pxServ.removeData("temp");
    await pxServ.removeData("light");
    console.log("Veriler silindi.");
  } catch (err) {
    console.error("Hata oluştu:", err);
  }
})();

```

### TypeScript

```typescript
// PxServ kütüphanesini projeye dahil et
import PxServ from "pxserv";

// API anahtarınızı girerek yeni bir PxServ Instancesi oluşturun
const pxServ = new PxServ({
  apiKey: "API_KEY", // Kendi API anahtarınızı buraya yazın
});

(async () => {
  try {
    // Veri Kaydetme
    const setTempResult = await pxServ.setData("temp", "24.3°C");
    console.log("Sıcaklık Kaydetme Sonucu:", setTempResult);

    // Veri Okuma
    const getTempResult = await pxServ.getData("temp");
    console.log("Sıcaklık Okuma Sonucu", getTempResult);

    // Geçiş işlemi
    const toggleLightResult = await pxServ.toggleData("light");
    console.log("Light Geçiş(Toggle) Sonucu:", toggleLightResult);

    // Tüm Veriler
    const tumVeriler = await pxServ.getAll();
    console.log("Tüm Veriler:", tumVeriler);

    // Veri Silme
    await pxServ.removeData("temp");
    await pxServ.removeData("light");
    console.log("Veriler silindi.");
  } catch (err) {
    console.error("Hata oluştu:", err);
  }
})();

```

## Kullanım

Bu kodları kendi projenize ekleyin ve gerekli kütüphaneleri yükledikten sonra çalıştırın. Kod, PxServ API'si ile veri ekleme, okuma ve silme işlemlerini gerçekleştirecektir.

Örnek Çıktılar Aşağıda, konsolda görebileceğiniz örnek çıktılar bulunmaktadır:

```javascript
Sıcaklık Kaydetme Sonucu: { status: 200, message: 'OK', data: {} }
Sıcaklık Okuma Sonucu {
  status: 200,
  message: 'OK',
  data: {
    lastUpdate: '2025-05-23T20:27:06.587Z',
    icon: 'defaultIcon',
    value: '24.3°C'
  }
}
Light Geçiş(Toggle) Sonucu: { status: 200, message: 'OK', data: {} }
Tüm Veriler: {
  status: 200,
  message: 'OK',
  data: {
    temp: {
      lastUpdate: '2025-05-23T20:27:06.587Z',
      icon: 'defaultIcon',
      value: '24.3°C'
    },
    light: {
      lastUpdate: '2025-05-23T20:27:06.716Z',
      icon: 'defaultIcon',
      value: '1'
    }
  }
}
Veriler silindi.
```

Bu çıktılar, verilerin başarıyla eklendiğini, okunduğunu ve silindiğini göstermektedir.
