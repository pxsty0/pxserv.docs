---
icon: rust
---

# Rust Kütüphanesi

Bu örnek kod, PxServ projesi ile veri tabanı işlemleri yapmanızı sağlar. Aşağıdaki işlemleri gerçekleştirebilirsiniz:

## Kurulum

Projenize `pxserv` kütüphanesini eklemek için öncelikle terminalde şu satırı çalıştırın:

```sh
cargo add pxserv
```

## Kullanım

Aşağıda, PxServ kütüphanesinin nasıl kullanılacağını gösteren bir örnek bulunmaktadır:

```rust
use pxserv::PxServ;

fn main() {
    let client = PxServ::new("API_KEY");

    // Veri kaydetme
    let set_response = client.setdata("temperature", "22.5°C");
    println!(
        "Durum: {}, Mesaj: {}",
        set_response.status, set_response.message
    );

    // Veri çekme
    let get_response = client.getdata("temperature");
    println!(
        "Durum: {}, Mesaj: {}, Veri : {:?}",
        get_response.status, get_response.message, get_response.data
    );

    // Veri silme
    let remove_response = client.removedata("temperature");
    println!(
        "Durum: {}, Mesaj: {}",
        remove_response.status, remove_response.message
    );
}
```

Örnek Çıktılar Aşağıda, konsolda görebileceğiniz örnek çıktılar bulunmaktadır

```
Durum: 200, Mesaj: OK
Durum: 200, Mesaj: OK, Veri : Some("22.5°C")
Durum: 200, Mesaj: OK
```
