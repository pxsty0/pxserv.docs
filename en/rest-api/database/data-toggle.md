# Data Toggle

<mark style="color:green;">`POST`</mark> `https://api.pxserv.net/database/toggleData`

Toggle the value of a key between `0` and `1` in the project database.

**Headers**

| Key | Value |
| --- | ----- |
| `Content-Type` | `application/json` |
| `apikey` | Your project API key |
| `Accept-Language` | `en` \| `tr` |

**Body**

| Key | Type | Description |
| --- | ---- | ----------- |
| `key` | string | Data key |

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
