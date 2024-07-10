# Tüm Verileri Okuma

<mark style="color:green;">`POST`</mark> `/database/getAll`

Bu endpoint, PxServ proje veritabanına tüm verileri okumayı sağlar

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**Body**

| Name     | Type   | Description           |
| -------- | ------ | --------------------- |
| `apiKey` | string | apiKey of the project |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "status": 200,
  "message": "OK",
  "data": {
    "<key>": "<value>",
    "<key>": "<value>",
    "<key>": "<value>",
    "<key>": "<value>",
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
