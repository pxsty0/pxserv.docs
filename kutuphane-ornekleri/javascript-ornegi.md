# PxServ JavaScript / TypeScript Örneği

Bu örnek, PxServ API'sini kullanarak verilerin nasıl kaydedileceğini, okunacağını ve silineceğini gösterir. Kod, Node.js ortamında CommonJS modül sistemi kullanılarak yazılmıştır.

## Gereksinimler

- Node.js ve npm (Node Paket Yöneticisi) yüklenmiş olmalıdır.
- `pxserv` npm paketinin yüklenmiş olması gerekir.

## Kurulum

1. **Node.js ve npm'yi yükleyin**: Node.js ve npm'yi [Node.js resmi web sitesinden](https://nodejs.org/) yükleyebilirsiniz.

2. **PxServ paketini yükleyin**: Proje dizininde terminali açarak aşağıdaki komutu çalıştırın:

```bash
npm install pxserv
```

## Örnek Kod (JavaScript)

```js
const PxServ = require("pxserv").default;

// Yapılandırma ayarları
const config = {
  apiKey: "YOUR_API_KEY",
  baseURL: "https://api.pxserv.net", // İsteğe bağlı, varsayılan olarak bu URL kullanılır
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

    console.log(`Current Temperature: ${currentTemperature}`); // 'Current Temperature: 22.5°C'
    console.log(`Current Humidity: ${currentHumidity}`); // 'Current Humidity: 45%'

    // Tüm verileri listeleme
    const allData = await pxServ.getAll();
    console.log(allData); // {'temperature': '22.5°C', 'humidity': '45%'}

    // Eski sıcaklık verisini silme
    await pxServ.removeData("temperature");
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();

```

## Kod Örneği (TypeScript)

```ts
import PxServ from "pxserv";

// Yapılandırma ayarları
const config = {
  apiKey: "YOUR_API_KEY",
  baseURL: "https://api.pxserv.net", // İsteğe bağlı, varsayılan olarak bu URL kullanılır
};

// PxServ örneği oluşturma
const pxServ = new PxServ(config);

// IoT cihazından sıcaklık ve nem verilerini alıp sunucuya kaydetme
const temperature = "22.5°C";
const humidity = "45%";

await pxServ.setData("temperature", temperature);
await pxServ.setData("humidity", humidity);

// Sıcaklık ve nem verilerini sunucudan çekme
const currentTemperature = await pxServ.getData("temperature");
const currentHumidity = await pxServ.getData("humidity");

console.log(`Current Temperature: ${currentTemperature}`); // 'Current Temperature: 22.5°C'
console.log(`Current Humidity: ${currentHumidity}`); // 'Current Humidity: 45%'

// Tüm verileri listeleme
const allData = await pxServ.getAll();
console.log(allData); // {'temperature': '22.5°C', 'humidity': '45%'}

// Eski sıcaklık verisini silme
await pxServ.removeData("temperature");
```
