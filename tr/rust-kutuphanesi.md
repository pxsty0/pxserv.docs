---
icon: rust
---

# Rust Kütüphanesi

`pxserv` crate'i, Rust uygulamalarından PxServ API ile etkileşim kurmak için senkron bir istemci sağlar.

**Desteklenen işlemler:**

* Veritabanına veri kaydetme
* Değeri `0` ile `1` arasında geçiş yaptırma
* Veritabanından veri okuma
* Veritabanından veri silme

## Kurulum

```sh
cargo add pxserv
```

## Kullanım

```rust
use pxserv::PxServ;

fn main() {
    let client = PxServ::new("api_anahtariniz");

    // Veri Kaydetme
    let set_response = client.setdata("temp", "22.5°C");
    println!(
        "Kaydetme -> Durum: {}, Mesaj: {}",
        set_response.status, set_response.message
    );

    // Veri Geçişi (0 ile 1 arasında döngü)
    let toggle_response = client.toggledata("light");
    println!(
        "Geçiş -> Durum: {}, Mesaj: {}",
        toggle_response.status, toggle_response.message
    );

    // Veri Okuma
    let get_response = client.getdata("temp");
    println!(
        "Okuma -> Durum: {}, Mesaj: {}, Veri: {:?}",
        get_response.status, get_response.message, get_response.data
    );

    // Veri Silme
    let remove_response = client.removedata("temp");
    println!(
        "Kaldırma -> Durum: {}, Mesaj: {}",
        remove_response.status, remove_response.message
    );
}
```

## Örnek Çıktı

```
Kaydetme -> Durum: 200, Mesaj: OK
Geçiş -> Durum: 200, Mesaj: OK
Okuma -> Durum: 200, Mesaj: OK, Veri: Some("22.5°C")
Kaldırma -> Durum: 200, Mesaj: OK
```
