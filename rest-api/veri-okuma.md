# Veri Okuma

<mark style="color:green;">`POST`</mark> `/database/getData`

Bu endpoint, PxServ proje veritabanına veri okumayı sağlar

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**Body**

| Name     | Type             | Description           |
| -------- | ---------------- | --------------------- |
| `key`    | string \| number | Key of the data       |
| `apiKey` | string           | apiKey of the project |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "status": 200,
  "message": "OK",
  "data": {
    "value": "<value>"
  }
}
```
{% endtab %}

{% tab title="Error" %}
```json
{
  "status": 404,
  "message": "Geçersiz 'apiKey'",
  "data": {}
}
```
{% endtab %}
{% endtabs %}
