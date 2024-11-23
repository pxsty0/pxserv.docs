# PxServ Rust Kütüphanesi

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
    // PxServ örneği oluşturma
    let client = PxServ::new("API_KEY".to_string());

    // Veri kaydetme
    let status = client.setdata("temperature".to_string(), "22.5°C".to_string());
    println!("Durum: {}, Mesaj: {}", status.status, status.message);

    // Veri çekme
    let response = client.getdata("temperature".to_string());
    if let Some(data) = response.data {
        println!("Veri: {}", data);
    }

    // Veri silme
    let delete_status = client.removedata("temperature".to_string());
    println!(
        "Silme Durumu: {}, Mesaj: {}",
        delete_status.status, delete_status.message
    );
}
```

Örnek Çıktılar
Aşağıda, konsolda görebileceğiniz örnek çıktılar bulunmaktadır

```
Durum: success, Mesaj: Veri kaydedildi
Veri: 22.5°C
Silme Durumu: success, Mesaj: Veri silindi
```
