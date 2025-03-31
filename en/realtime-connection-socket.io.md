---
hidden: true
icon: tower-cell
---

# Realtime Connection (Socket.IO)

This document explains how to establish a real-time connection to the **PxServ API** using **Socket.IO**. **Socket.IO** is a powerful library that enables bidirectional communication between the client and server. The example provided below is for **JavaScript / TypeScript**, but a similar event structure and **API key authentication** can be used with **Rust, Java, Python, and Go** by utilizing the appropriate Socket.IO library.

## Usage

The following code demonstrates how to connect to **PxServ API** in real-time using **JavaScript / TypeScript**:

```js
const socket = io("https://api.pxserv.net", {
  auth: {
    apiKey: "Project API Key",
  },
});

socket.on("connect", () => {
  console.log("Successfully connected to the server.");
});
```

### Example Console Output:

```
Successfully connected to the server.
```

This connection ensures authentication with the **API key** while connecting to the server.

## Events

When a connection is established via Socket.IO, specific events can be listened to track actions such as data storage and deletion.

### Data Update Event

When new data is stored on the server, the following event is triggered.

#### Event Name: `setData`

#### Usage (JavaScript)

```js
socket.on("setData", (data) => {
  console.log("New data received:", data);
});
```

### Example Console Output:

```
New data received:
{ key: "temperature", lastUpdate: "2025-03-31T17:40:19.653Z", icon: "hum", value: "64.11" }
```

---

### Data Deletion Event

When data is deleted, the following event is triggered.

#### Event Name: `removeData`

#### Usage (JavaScript)

```js
socket.on("removeData", (data) => {
  console.log("A data entry was removed:", data);
});
```

### Example Console Output:

```
A data entry was removed:
{ key: "temperature" }
```

---

## Terminating the Connection

To terminate the connection, use the following code:

```js
socket.disconnect();
console.log("Connection terminated.");
```

### Example Console Output:

```
Connection terminated.
```

## Usage in Other Languages

**Socket.IO** is also supported in various other programming languages. You can establish a connection using **the same event structure** and **API key authentication** with the following languages:

- [**JavaScript / TypeScript**](https://socket.io/docs/v4/client-initialization/)
- [**Python**](https://python-socketio.readthedocs.io/en/latest/client.html)
- [**Rust**](https://github.com/1c3t3a/rust-socketio)
- [**Go**](https://github.com/googollee/go-socket.io)

By utilizing the appropriate Socket.IO client library for each language, a similar connection can be established.
