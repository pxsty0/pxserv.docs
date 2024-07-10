# Veri Kaldırma

<mark style="color:green;">`POST`</mark> `/database/removeData`

Bu endpoint, PxServ proje veritabanından veri kaldırmayı sağlar

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
    "oldData1":"oldData1Value",
    "oldData2":"oldData2Value",
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
