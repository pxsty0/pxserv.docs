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
    // API anahtarı ile PxServ class'ının bir instance'ını oluşturuyoruz
    let client = PxServ::new("API_KEY");

    // Veri Kaydetme
    // "temp" anahtarı ile sıcaklık verisini PxServ'e kaydediyoruz
    let set_response = client.setdata("temp", "22.5°C");
    println!(
        "Veri Kaydetme -> Durum: {}, Mesaj: {}",
        set_response.status, set_response.message
    );

    // Veri Geçişi
    // "light" anahtarını 0 ile 1 arasında geçiş yapıyoruz (Aydınlatma durumu)
    let toggle_response = client.toggledata("light");
    println!(
        "Veri Geçiş -> Durum: {}, Mesaj: {}",
        toggle_response.status, toggle_response.message
    );

    // Veri Okuma
    // "temp" anahtarındaki sıcaklık verisini PxServ den okuyoruz
    let get_response = client.getdata("temp");
    println!(
        "Veri Okuma -> Durum: {}, Mesaj: {}, Veri: {:?}",
        get_response.status, get_response.message, get_response.data
    );

    // Veri Silme
    // "temp" anahtarındaki sıcaklık verisini PxServ den siliyoruz
    let remove_response = client.removedata("temp");
    println!(
        "Veri Silme -> Durum: {}, Mesaj: {}",
        remove_response.status, remove_response.message
    );
}
```

Örnek Çıktılar Aşağıda, konsolda görebileceğiniz örnek çıktılar bulunmaktadır

```
Veri Kaydetme -> Durum: 200, Mesaj: OK
Veri Geçiş -> Durum: 200, Mesaj: OK
Veri Okuma -> Durum: 200, Mesaj: OK, Veri: Some("22.5°C")
Veri Silme -> Durum: 200, Mesaj: OK
```
