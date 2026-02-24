# Data Saving

<mark style="color:green;">`POST`</mark> `https://api.pxserv.net/database/setData`

Save or update a key-value pair in the project database.

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
| `value` | string | Data value |

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
