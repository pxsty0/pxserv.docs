---
description: PxServ Veritabanı Servisine REST API aracılığıyla nasıl bağlanacağınızı açıklayan dokümantasyon.
icon: database
---

# Veritabanı

Veritabanı servisi, projenize kapsamlı rastgele anahtar-değer çiftleri depolar. Verilerinizi yönetmek için aşağıdaki endpoint'leri kullanın.

| Endpoint | Yöntem | Açıklama |
| -------- | ------ | -------- |
| [/database/setData](veri-kaydetme.md) | `POST` | Değer kaydet veya güncelle |
| [/database/toggleData](veri-gecisi.md) | `POST` | Değeri `0` ile `1` arasında geçiş yaptır |
| [/database/getData](veri-okuma.md) | `POST` | Anahtara göre tek bir değer getir |
| [/database/getAll](tum-verileri-okuma.md) | `GET` | Tüm anahtar-değer çiftlerini getir |
| [/database/removeData](veri-kaldirma.md) | `POST` | Anahtara göre değeri sil |
