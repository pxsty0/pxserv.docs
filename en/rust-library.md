---
icon: rust
---

# Rust Library

The `pxserv` crate is a synchronous client for working with the PxServ API from Rust applications. It provides a straightforward API for CLI tools, backend services, data-processing applications, and non-hardware automation workflows.

## When should you use it?

The Rust library is a good fit when you want to:

* Write or read PxServ data from command-line tools
* Manage device state from backend services
* Check values from automation jobs
* Build reliable helper services with Rust's type safety

## Installation

```sh
cargo add pxserv
```

## Creating a Client

```rust
use pxserv::PxServ;

fn main() {
    let client = PxServ::new("your_api_key");
}
```

{% hint style="warning" %}
Prefer passing the API key through an environment variable or secret manager instead of hardcoding it in source code.
{% endhint %}

## Basic Usage

```rust
use pxserv::PxServ;

fn main() {
    let client = PxServ::new("your_api_key");

    let set_response = client.setdata("temperature", "22.5");
    println!(
        "Set -> Status: {}, Message: {}",
        set_response.status, set_response.message
    );

    let get_response = client.getdata("temperature");
    println!(
        "Get -> Status: {}, Message: {}, Data: {:?}",
        get_response.status, get_response.message, get_response.data
    );

    let toggle_response = client.toggledata("relay");
    println!(
        "Toggle -> Status: {}, Message: {}",
        toggle_response.status, toggle_response.message
    );

    let remove_response = client.removedata("temperature");
    println!(
        "Remove -> Status: {}, Message: {}",
        remove_response.status, remove_response.message
    );
}
```

## Method Reference

| Method | Description |
|---|---|
| `PxServ::new(api_key)` | Creates a PxServ client with the project API key. |
| `setdata(key, value)` | Saves a key-value pair to the database. |
| `getdata(key)` | Reads the current value of the specified key. |
| `toggledata(key)` | Toggles the specified value between `0` and `1`. |
| `removedata(key)` | Removes the specified key from the database. |

## Sample Output

```text
Set -> Status: 200, Message: OK
Get -> Status: 200, Message: OK, Data: Some("22.5")
Toggle -> Status: 200, Message: OK
Remove -> Status: 200, Message: OK
```

## Using an Environment Variable

In production projects, reading the API key from an environment variable is safer than storing it in source code.

```rust
use pxserv::PxServ;
use std::env;

fn main() {
    let api_key = env::var("PXSERV_API_KEY")
        .expect("PXSERV_API_KEY environment variable must be set");

    let client = PxServ::new(&api_key);
    let response = client.setdata("service/status", "online");

    println!("Status: {}, Message: {}", response.status, response.message);
}
```

## Best Practices

* Provide the API key through an environment variable or secret manager.
* Log the `status` and `message` fields from responses.
* Use a consistent key naming scheme across the project.
* Avoid sending unnecessarily frequent requests from service applications.
* Plan retry behavior in your own application for failure cases.

## Troubleshooting

**The crate does not compile**

* Make sure the package name in `Cargo.toml` is `pxserv`.
* Make sure your Rust toolchain is up to date.

**API requests fail**

* Check the API key and project permissions.
* Verify internet connectivity.
* Log the returned `status` and `message` fields.

**Read result is empty**

* Check that the key name is spelled correctly.
* Make sure the value was previously saved with `setdata()`.
