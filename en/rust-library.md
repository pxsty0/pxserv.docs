# PxServ Rust Library

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
    // Create a PxServ instance
    let client = PxServ::new("API_KEY".to_string());

    // Saving data
    let status = client.setdata("temperature".to_string(), "22.5°C".to_string());
    println!("Status: {}, Message: {}", status.status, status.message);

    // Data extraction
    let response = client.getdata("temperature".to_string());
    if let Some(data) = response.data {
        println!("Data: {}", data);
    }

    // Data deletion
    let delete_status = client.removedata("temperature".to_string());
    println!(
        "Delete Status: {}, Message: {}",
        delete_status.status, delete_status.message
    );
}
```

Sample Outputs
Below is sample output that you can see in the console

```
Status: success, Message: Data saved
Data 22.5°C
Deletion Status: success, Message: Data deleted
```
