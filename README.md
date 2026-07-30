# PxServ Documentation

PxServ’in API, SDK ve IoT özellikleri için hazırlanan Türkçe ve İngilizce dokümantasyon projesidir.

## Özellikler

- Türkçe ve İngilizce içerik desteği
- Arduino, JavaScript/TypeScript ve Rust istemci dokümantasyonu
- REST API, gerçek zamanlı bağlantı, harita ve OTA rehberleri
- Statik site çıktısı ve Pagefind tabanlı arama
- Mobil uyumlu dokümantasyon arayüzü

## Teknolojiler

- Next.js
- Nextra
- React
- TypeScript
- Pagefind

## Kurulum

Node.js 20.9 veya daha yeni bir sürüm gereklidir.

```bash
npm install
npm run dev
```

Geliştirme sunucusu varsayılan olarak `http://localhost:3000` adresinde çalışır.

## Kullanılabilir Komutlar

```bash
npm run dev        # Geliştirme sunucusunu başlatır
npm run typecheck  # TypeScript kontrolünü çalıştırır
npm run build      # Üretim derlemesini ve arama indeksini oluşturur
```

Statik üretim çıktısı `out/` dizininde oluşturulur.

## İçerik Yapısı

Dokümantasyon içerikleri MDX formatında tutulur:

```text
content/
├── tr/  # Türkçe dokümantasyon
└── en/  # İngilizce dokümantasyon
```

Yeni veya güncellenen sayfalarda iki dildeki içerik yapısının uyumlu tutulması önerilir.

## İletişim

PxServ hakkında daha fazla bilgi için [pxserv.net](https://pxserv.net) adresini ziyaret edebilir veya [support@pxserv.net](mailto:support@pxserv.net) üzerinden iletişime geçebilirsiniz.
