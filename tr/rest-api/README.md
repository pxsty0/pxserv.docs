---
icon: webhook
---

# REST API

PxServ REST API, HTTP üzerinden proje verilerini okuyup yazmanıza olanak tanır. Tüm endpoint'ler istek başlıklarında bir API anahtarı gerektirir.

**Temel URL:** `https://api.pxserv.net`

## Kimlik Doğrulama

Her isteğe şu başlığı ekleyin:

| Başlık | Değer |
| ------ | ----- |
| `apikey` | Proje API anahtarınız |

## Endpoint'ler

| Kaynak | Açıklama |
| ------ | -------- |
| [Veritabanı](veritabani/README.md) | Anahtar-değer verilerini kaydet, geçiş yaptır, oku ve sil |
