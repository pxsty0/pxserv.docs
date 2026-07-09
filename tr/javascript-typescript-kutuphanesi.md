---
icon: js
---

# JavaScript / TypeScript Kütüphanesi

PxServ npm paketi, Node.js ve TypeScript projelerinden PxServ API ile güvenli ve okunabilir şekilde çalışmak için kullanılan resmi istemcidir. Web panelleri, otomasyon servisleri, backend uygulamaları ve cihaz verilerini işleyen yardımcı servisler için uygundur.

## Ne zaman kullanılır?

Bu kütüphaneyi şu senaryolarda kullanabilirsiniz:

* Node.js backend servisinden PxServ veritabanına veri yazmak
* Web panelinden cihaz durumlarını okumak
* Bir anahtarı `0` ve `1` arasında değiştirmek
* Tüm proje verilerini tek istekte almak
* Otomasyon veya cron işleriyle verileri düzenli kontrol etmek

## Kurulum

```sh
npm install pxserv
```

TypeScript için ek bir kurulum gerekmez; paket tiplendirilmiş istemci olarak kullanılabilir.

## İstemci oluşturma

PxServ istemcisi proje API anahtarıyla oluşturulur.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const PxServ = require("pxserv").default;

const pxServ = new PxServ({
  apiKey: "api_anahtariniz",
});
```
{% endtab %}

{% tab title="TypeScript" %}
```typescript
import PxServ from "pxserv";

const pxServ = new PxServ({
  apiKey: "api_anahtariniz",
});
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
API anahtarınızı istemci tarafında herkese açık şekilde kullanmayın. Tarayıcı tabanlı projelerde anahtarı korumak için istekleri kendi backend servisiniz üzerinden yönlendirmeniz önerilir.
{% endhint %}

## Temel kullanım

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const PxServ = require("pxserv").default;

const pxServ = new PxServ({
  apiKey: "api_anahtariniz",
});

async function main() {
  try {
    const setResult = await pxServ.setData("temperature", "24.3");
    console.log("Kaydetme:", setResult);

    const getResult = await pxServ.getData("temperature");
    console.log("Okuma:", getResult);

    const toggleResult = await pxServ.toggleData("relay");
    console.log("Geçiş:", toggleResult);

    const allData = await pxServ.getAll();
    console.log("Tüm veriler:", allData);

    const removeResult = await pxServ.removeData("temperature");
    console.log("Kaldırma:", removeResult);
  } catch (error) {
    console.error("PxServ isteği başarısız:", error);
  }
}

main();
```
{% endtab %}

{% tab title="TypeScript" %}
```typescript
import PxServ from "pxserv";

const pxServ = new PxServ({
  apiKey: "api_anahtariniz",
});

async function main(): Promise<void> {
  try {
    const setResult = await pxServ.setData("temperature", "24.3");
    console.log("Kaydetme:", setResult);

    const getResult = await pxServ.getData("temperature");
    console.log("Okuma:", getResult);

    const toggleResult = await pxServ.toggleData("relay");
    console.log("Geçiş:", toggleResult);

    const allData = await pxServ.getAll();
    console.log("Tüm veriler:", allData);

    const removeResult = await pxServ.removeData("temperature");
    console.log("Kaldırma:", removeResult);
  } catch (error) {
    console.error("PxServ isteği başarısız:", error);
  }
}

main();
```
{% endtab %}
{% endtabs %}

## Metot referansı

| Metot | Açıklama |
|---|---|
| `setData(key, value)` | Veritabanına anahtar-değer çifti kaydeder veya mevcut değeri günceller. |
| `getData(key)` | Belirtilen anahtarın güncel değerini okur. |
| `toggleData(key)` | Belirtilen değeri `0` ve `1` arasında değiştirir. |
| `getAll()` | Projedeki tüm verileri tek istekte döndürür. |
| `removeData(key)` | Belirtilen anahtarı veritabanından kaldırır. |

## Yanıt yapısı

Kütüphane metotları genellikle aşağıdaki yapıda bir sonuç döndürür:

```json
{
  "status": 200,
  "message": "OK",
  "data": {}
}
```

Okuma işlemlerinde `data` alanı ilgili anahtarın değerini ve ek meta bilgileri içerebilir:

```json
{
  "status": 200,
  "message": "OK",
  "data": {
    "lastUpdate": "2025-05-23T20:27:06.587Z",
    "icon": "defaultIcon",
    "value": "24.3"
  }
}
```

## İyi pratikler

* API anahtarınızı `.env` dosyasında veya güvenli bir secret yönetiminde saklayın.
* Kullanıcıdan gelen `key` değerlerini doğrudan güvenmeden önce doğrulayın.
* Sensör değerlerini mümkün olduğunca tutarlı formatta gönderin.
* Hata yönetimi için tüm istekleri `try/catch` ile sarın.
* Sık çalışan servislerde gereksiz `getAll()` çağrılarından kaçının.

## Sorun giderme

**Yetkilendirme hatası alıyorum**

* API anahtarının doğru projeye ait olduğundan emin olun.
* Anahtarın başında veya sonunda boşluk kalmadığını kontrol edin.

**Veri beklediğim formatta gelmiyor**

* Veriyi hangi istemcinin yazdığını kontrol edin.
* Aynı anahtara farklı tipte değerler yazılmadığından emin olun.

**Tarayıcıda API anahtarımı gizleyemiyorum**

* API anahtarını doğrudan frontend koduna koymayın.
* Kendi backend endpoint'inizi oluşturup PxServ işlemlerini backend üzerinden yapın.
