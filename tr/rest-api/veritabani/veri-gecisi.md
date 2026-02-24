# Veri Geçişi

<mark style="color:green;">`POST`</mark> `https://api.pxserv.net/database/toggleData`

Proje veritabanındaki bir anahtarın değerini `0` ile `1` arasında geçiş yaptırır.

**Headers**

| Anahtar | Değer |
| ------- | ----- |
| `Content-Type` | `application/json` |
| `apikey` | Proje API anahtarınız |
| `Accept-Language` | `tr` \| `en` |

**Body**

| Anahtar | Tip | Açıklama |
| ------- | --- | -------- |
| `key` | string | Veri anahtarı |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "status": 200,
  "message": "OK",
  "data": {}
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
