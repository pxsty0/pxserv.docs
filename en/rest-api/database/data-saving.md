# Data Saving

<mark style="color:green;">`POST`</mark> `https://api.pxserv.net/database/setData`

This endpoint allows saving data to the PxServ project database

**Headers**

| Key             | Value              |
| --------------- | ------------------ |
| Content-Type    | `application/json` |
| apikey          | `Project API Key`  |
| Accept-Language | `tr` \| `en`       |

**Body**

| Key     | Type   | Description |
| ------- | ------ | ----------- |
| `key`   | string | Data key    |
| `value` | string | Data Value  |

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
