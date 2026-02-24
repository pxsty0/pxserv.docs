---
icon: js
---

# JavaScript / TypeScript Kütüphanesi

PxServ npm paketi, Node.js veya tarayıcı ortamlarından PxServ API ile etkileşim kurmak için tiplendirilmiş bir istemci sağlar.

**Desteklenen işlemler:**

* Veritabanına veri kaydetme
* Değeri `0` ile `1` arasında geçiş yaptırma
* Veritabanından veri okuma
* Tüm verileri çekme
* Veritabanından veri silme

## Kurulum

```sh
npm install pxserv
```

## Kullanım

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const PxServ = require("pxserv").default;

const pxServ = new PxServ({
  apiKey: "api_anahtariniz",
});

(async () => {
  try {
    // Veri Kaydetme
    const setResult = await pxServ.setData("temp", "24.3°C");
    console.log("Kaydetme:", setResult);

    // Veri Okuma
    const getResult = await pxServ.getData("temp");
    console.log("Okuma:", getResult);

    // Veri Geçişi
    const toggleResult = await pxServ.toggleData("light");
    console.log("Geçiş:", toggleResult);

    // Tüm Verileri Çek
    const allData = await pxServ.getAll();
    console.log("Tümü:", allData);

    // Veri Silme
    await pxServ.removeData("temp");
    await pxServ.removeData("light");
    console.log("Veriler silindi.");
  } catch (err) {
    console.error("Hata:", err);
  }
})();
```
{% endtab %}

{% tab title="TypeScript" %}
```typescript
import PxServ from "pxserv";

const pxServ = new PxServ({
  apiKey: "api_anahtariniz",
});

(async () => {
  try {
    // Veri Kaydetme
    const setResult = await pxServ.setData("temp", "24.3°C");
    console.log("Kaydetme:", setResult);

    // Veri Okuma
    const getResult = await pxServ.getData("temp");
    console.log("Okuma:", getResult);

    // Veri Geçişi
    const toggleResult = await pxServ.toggleData("light");
    console.log("Geçiş:", toggleResult);

    // Tüm Verileri Çek
    const allData = await pxServ.getAll();
    console.log("Tümü:", allData);

    // Veri Silme
    await pxServ.removeData("temp");
    await pxServ.removeData("light");
    console.log("Veriler silindi.");
  } catch (err) {
    console.error("Hata:", err);
  }
})();
```
{% endtab %}
{% endtabs %}

## Örnek Çıktı

```json
Kaydetme: { "status": 200, "message": "OK", "data": {} }
Okuma: {
  "status": 200,
  "message": "OK",
  "data": {
    "lastUpdate": "2025-05-23T20:27:06.587Z",
    "icon": "defaultIcon",
    "value": "24.3°C"
  }
}
Geçiş: { "status": 200, "message": "OK", "data": {} }
Tümü: {
  "status": 200,
  "message": "OK",
  "data": {
    "temp": {
      "lastUpdate": "2025-05-23T20:27:06.587Z",
      "icon": "defaultIcon",
      "value": "24.3°C"
    },
    "light": {
      "lastUpdate": "2025-05-23T20:27:06.716Z",
      "icon": "defaultIcon",
      "value": "1"
    }
  }
}
Veriler silindi.
```
