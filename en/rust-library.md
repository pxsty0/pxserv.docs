# Rust Library

This sample code allows you to perform database operations with the PxServ project. You can perform the following operations:

## Installation

To add the `pxserv` library to your project, first run the following line in the terminal:

```sh
cargo add pxserv
```

## Usage

Below is an example of how to use the PxServ library:

```rust
use pxserv::PxServ;

fn main() {
    let client = PxServ::new("API_KEY");

    // Data saving
    let set_response = client.setdata("temperature", "22.5°C");
    println!(
        "Status: {}, Message: {}",
        set_response.status, set_response.message
    );

    // Data fetching
    let get_response = client.getdata("temperature");
    println!(
        "Status: {}, Message: {}, Data : {:?}",
        get_response.status, get_response.message, get_response.data
    );

    // Data removing
    let remove_response = client.removedata("temperature");
    println!(
        "Status: {}, Message: {}",
        remove_response.status, remove_response.message
    );
}
```

Sample Outputs Below is sample output that you can see in the console

```
Status: 200, Message: OK
Status: 200, Message: OK, Data : Some("22.5°C")
Status: 200, Message: OK
```
