# Veri Kaydetme

<mark style="color:green;">`POST`</mark> `/database/setData`

Bu endpoint, PxServ proje veritabanına veri kaydetmeyi sağlar

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**Body**

| Name     | Type             | Description           |
| -------- | ---------------- | --------------------- |
| `key`    | string \| number | Key of the data       |
| `value`  | string \| number | value of the data     |
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
    "<key>":"<value>"
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
