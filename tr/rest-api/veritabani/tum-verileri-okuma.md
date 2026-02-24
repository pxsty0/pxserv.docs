# Tüm Verileri Okuma

<mark style="color:green;">`GET`</mark> `https://api.pxserv.net/database/getAll`

Proje veritabanındaki tüm anahtar-değer çiftlerini getirir.

**Headers**

| Anahtar | Değer |
| ------- | ----- |
| `Content-Type` | `application/json` |
| `apikey` | Proje API anahtarınız |
| `Accept-Language` | `tr` \| `en` |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "status": 200,
  "message": "OK",
  "data": {
    "exampleData1": "exampleValue1",
    "exampleData2": "exampleValue2"
  }
}
```
{% endtab %}

{% tab title="Hata" %}
```json
{
  "status": 401,
  "message": "Invalid API key.",
  "data": {}
}
```
{% endtab %}
{% endtabs %}
