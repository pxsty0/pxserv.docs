# Veri Kaydetme

<mark style="color:green;">`POST`</mark> `https://api.pxserv.net/database/setData`

Proje veritabanına bir anahtar-değer çifti kaydeder veya günceller.

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
| `value` | string | Veri değeri |

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
