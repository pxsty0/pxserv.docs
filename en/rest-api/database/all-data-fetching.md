# All Data Fetching

<mark style="color:green;">`GET`</mark> `https://api.pxserv.net/database/getAll`

This endpoint allows to read all data into the PxServ project database

**Headers**

| Key             | Value              |
| --------------- | ------------------ |
| Content-Type    | `application/json` |
| apikey          | `Project API Key`  |
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
