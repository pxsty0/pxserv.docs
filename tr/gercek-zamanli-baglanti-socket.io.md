---
icon: tower-cell
---

# Gerçek Zamanlı Bağlantı (Socket.IO)

Bu doküman, PxServ API'ye **Socket.IO** kullanarak nasıl gerçek zamanlı bağlanabileceğinizi açıklar. **Socket.IO**, istemci ve sunucu arasında çift yönlü iletişim sağlayan güclü bir kütüphanedir. Aşağıda verilen örnek **JavaScript / TypeScript** için hazırlanmıştır, ancak **Rust, Java, Python ve Go** gibi dillerde uygun Socket.IO kütüphanesi kullanılarak benzer event yapısı ve **API anahtarı (API Key) ile kimlik doğrulama** sağlanabilir.

## Kullanım

Aşağıdaki kod ile **JavaScript / TypeScript** kullanarak **PxServ API'ye** gerçek zamanlı olarak bağlanabilirsiniz:

```js
const socket = io("https://api.pxserv.net", {
  auth: {
    apiKey: "Proje API Keyi",
  },
});

socket.on("connect", () => {
  console.log("Sunucuya başarılı şekilde bağlanıldı.");
});
```

### Örnek Console Çıktısı:

```
Sunucuya başarılı şekilde bağlanıldı.
```

Bu bağlantı, **API anahtarı** ile kimlik doğrulama yaparak sunucuya bağlanmayı sağlar.

## Eventler

Socket.IO ile bağlantı kurulduğunda belirli eventler dinlenerek veri kaydedilmesi ve silinmesi gibi işlemlerin durumları takip edilebilir.

### Veri Güncelleme Olayı

Sunucuya yeni veri kaydedildiğinde aşağıdaki event tetiklenir.

#### Olay Adı: `setData`

#### Kullanım (JavaScript)

```js
socket.on("setData", (data) => {
  console.log("Yeni veri alındı:", data);
});
```

### Örnek Console Çıktısı:

```
Yeni veri alındı:
{ key: "sıcaklık", lastUpdate: "2025-03-31T17:40:19.653Z", icon: "hum", value: "64.11" }
```

***

### Veri Silme Olayı

Bir veri silindiğinde aşağıdaki event tetiklenir.

#### Olay Adı: `removeData`

#### Kullanım (JavaScript)

```js
socket.on("removeData", (data) => {
  console.log("Bir veri kaldırıldı:", data);
});
```

### Örnek Console Çıktısı:

```
Bir veri kaldırıldı:
{ key: "sıcaklık" }
```

***

## Bağlantıyı Sonlandırma

Bağlantıyı sonlandırmak için şu kod kullanılabilir:

```js
socket.disconnect();
console.log("Bağlantı sonlandırıldı.");
```

### Örnek Console Çıktısı:

```
Bağlantı sonlandırıldı.
```

## Diğer Dillerde Kullanım

**Socket.IO**, farklı dillerde de desteklenmektedir. Aşağıdaki dillerde **aynı event yapısı** ve **API anahtarı ile kimlik doğrulama** kullanarak bağlantı kurulabilir:

* [**JavaScript / TypeScript**](https://socket.io/docs/v4/client-initialization/)
* [**Python**](https://python-socketio.readthedocs.io/en/latest/client.html)
* [**Rust**](https://github.com/1c3t3a/rust-socketio)
* [**Go**](https://github.com/googollee/go-socket.io)

Her dil için uygun Socket.IO istemci kütüphanesi kullanılarak benzer şekilde bağlanılabilir.
