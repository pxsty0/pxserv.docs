# Tüm Verileri Okuma

<mark style="color:green;">`GET`</mark> `https://api.pxserv.net/database/getAll`

Bu endpoint, PxServ proje veritabanına tüm verileri okumayı sağlar

**Headers**

| Anahtar         | Değer              |
| --------------- | ------------------ |
| Content-Type    | `application/json` |
| apikey          | `Proje API Keyi`   |
| Accept-Language | `tr` \| `en`       |

**Body**

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
