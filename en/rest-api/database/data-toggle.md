# Data Toggle

<mark style="color:green;">`POST`</mark> `https://api.pxserv.net/database/toggleData`

This endpoint allows you to toggle the data in the PxServ project database between transition 0 and 1

**Headers**

| Key             | Value              |
| --------------- | ------------------ |
| Content-Type    | `application/json` |
| apikey          | `Project API Key`  |
| Accept-Language | `tr` \| `en`       |

**Body**

| Key   | Type   | Description |
| ----- | ------ | ----------- |
| `key` | string | Data key    |

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
