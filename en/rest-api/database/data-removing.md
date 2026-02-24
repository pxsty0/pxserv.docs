# Data Removing

<mark style="color:green;">`POST`</mark> `https://api.pxserv.net/database/removeData`

Delete a key-value pair from the project database.

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
