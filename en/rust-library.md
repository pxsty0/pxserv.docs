---
icon: rust
---

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
    // Create an instance of the PxServ class with the API key
    let client = PxServ::new("API_KEY");

    // Save data
    // Save the temperature data to PxServ with the ”temp" key
    let set_response = client.setdata("temp", "22.5°C");
    println!(
        "Save Data -> Status: {}, Message: {}",
        set_response.status, set_response.message
    );

    // Toggle data
    // Toggle the ”light" key between 0 and 1
    let toggle_response = client.toggledata("light");
    println!(
        "Veri Geçiş -> Status: {}, Message: {}",
        toggle_response.status, toggle_response.message
    );

    // Get data
    // Get the temperature data in the ”temp" key from PxServ
    let get_response = client.getdata("temp");
    println!(
        "Get Data -> Status: {}, Message: {}, Data: {:?}",
        get_response.status, get_response.message, get_response.data
    );

    // Remove data
    // Remove the temperature data in the “temp” key from PxServ
    let remove_response = client.removedata("temp");
    println!(
        "Remove Data -> Status: {}, Message: {}",
        remove_response.status, remove_response.message
    );
}
```

Sample Outputs Below is sample output that you can see in the console

```
Save Data -> Status: 200, Message: OK
Toggle Data -> Status: 200, Message: OK
Get Data -> Status: 200, Message: OK, Data: Some("22.5°C")
Remove Data -> Status: 200, Message: OK
```
