# REST API Veri Kaydetme

<mark style="color:green;">`POST`</mark> `https://api.pxserv.net/database/setData`

Bu endpoint, PxServ proje veritabanına veri kaydetmeyi sağlar

**Headers**

| Anahtar         | Değer              |
| --------------- | ------------------ |
| Content-Type    | `application/json` |
| apikey          | `Proje API Keyi`   |
| Accept-Language | `tr` \| `en`       |

**Body**

| Anahtar | Tip    | Açıklama      |
| ------- | ------ | ------------- |
| `key`   | string | Veri anahtarı |
| `value` | string | Veri Değeri   |

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

{% tab title="Error" %}

```json
{
  "status": 401,
  "message": "Invalid API key.",
  "data": {}
}
```

{% endtab %}
{% endtabs %}
