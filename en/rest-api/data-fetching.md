# Data Fetching

<mark style="color:green;">`POST`</mark> `https://api.pxserv.net/database/getData`

This endpoint allows reading data into the PxServ project database

**Headers**

| Key             | Value              |
| --------------- | ------------------ |
| Content-Type    | `application/json` |
| apikey          | `Project API Key`  |
| Accept-Language | `tr` \| `en`       |

**Body**

| Key   | Type             | Description |
| ----- | ---------------- | ----------- |
| `key` | string \| number | Data key    |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "status": 200,
  "message": "OK",
  "data": {
    "value": "<VALUE>"
  }
}
```
{% endtab %}

{% tab title="Error" %}
```json
{
  “status": 401,
  “message": “Invalid API key.”,
  “data": {}
}
```
{% endtab %}
{% endtabs %}
