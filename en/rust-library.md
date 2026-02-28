---
icon: rust
---

# Rust Library

The `pxserv` crate provides a synchronous client for interacting with the PxServ API from Rust applications.

**Supported operations:**

* Save data to the database
* Toggle a value between `0` and `1`
* Read data from the database
* Delete data from the database

## Installation

```sh
cargo add pxserv
```

## Usage

```rust
use pxserv::PxServ;

fn main() {
    let client = PxServ::new("your_api_key");

    // Save data
    let set_response = client.setdata("temp", "22.5°C");
    println!(
        "Set -> Status: {}, Message: {}",
        set_response.status, set_response.message
    );

    // Toggle data (cycles between 0 and 1)
    let toggle_response = client.toggledata("light");
    println!(
        "Toggle -> Status: {}, Message: {}",
        toggle_response.status, toggle_response.message
    );

    // Read data
    let get_response = client.getdata("temp");
    println!(
        "Get -> Status: {}, Message: {}, Data: {:?}",
        get_response.status, get_response.message, get_response.data
    );

    // Remove data
    let remove_response = client.removedata("temp");
    println!(
        "Remove -> Status: {}, Message: {}",
        remove_response.status, remove_response.message
    );
}
```

## Sample Output

```
Set -> Status: 200, Message: OK
Toggle -> Status: 200, Message: OK
Get -> Status: 200, Message: OK, Data: Some("22.5°C")
Remove -> Status: 200, Message: OK
```
