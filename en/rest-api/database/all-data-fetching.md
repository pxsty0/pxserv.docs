# All Data Fetching

<mark style="color:green;">`GET`</mark> `https://api.pxserv.net/database/getAll`

Fetch all key-value pairs from the project database.

**Headers**

| Key | Value |
| --- | ----- |
| `Content-Type` | `application/json` |
| `apikey` | Your project API key |
| `Accept-Language` | `en` \| `tr` |

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
