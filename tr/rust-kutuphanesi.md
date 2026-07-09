---
icon: rust
---

# Rust Kütüphanesi

`pxserv` crate'i, Rust uygulamalarından PxServ API ile çalışmak için kullanılan senkron bir istemcidir. CLI araçları, backend servisleri, veri işleme uygulamaları ve donanım dışı otomasyon süreçleri için sade bir API sunar.

## Ne zaman kullanılır?

Rust kütüphanesi şu senaryolar için uygundur:

* Komut satırı araçlarından PxServ verisi yazmak veya okumak
* Backend servislerinde cihaz durumlarını yönetmek
* Otomasyon görevlerinde değerleri kontrol etmek
* Güvenilir ve tip güvenliği yüksek yardımcı servisler geliştirmek

## Kurulum

```sh
cargo add pxserv
```

## İstemci oluşturma

```rust
use pxserv::PxServ;

fn main() {
    let client = PxServ::new("api_anahtariniz");
}
```

{% hint style="warning" %}
API anahtarınızı kaynak kod içinde sabitlemek yerine ortam değişkeni veya secret yönetimi üzerinden vermeniz önerilir.
{% endhint %}

## Temel kullanım

```rust
use pxserv::PxServ;

fn main() {
    let client = PxServ::new("api_anahtariniz");

    let set_response = client.setdata("temperature", "22.5");
    println!(
        "Kaydetme -> Durum: {}, Mesaj: {}",
        set_response.status, set_response.message
    );

    let get_response = client.getdata("temperature");
    println!(
        "Okuma -> Durum: {}, Mesaj: {}, Veri: {:?}",
        get_response.status, get_response.message, get_response.data
    );

    let toggle_response = client.toggledata("relay");
    println!(
        "Geçiş -> Durum: {}, Mesaj: {}",
        toggle_response.status, toggle_response.message
    );

    let remove_response = client.removedata("temperature");
    println!(
        "Kaldırma -> Durum: {}, Mesaj: {}",
        remove_response.status, remove_response.message
    );
}
```

## Metot referansı

| Metot | Açıklama |
|---|---|
| `PxServ::new(api_key)` | PxServ istemcisini proje API anahtarıyla oluşturur. |
| `setdata(key, value)` | Veritabanına anahtar-değer çifti kaydeder. |
| `getdata(key)` | Belirtilen anahtarın güncel değerini okur. |
| `toggledata(key)` | Belirtilen değeri `0` ve `1` arasında değiştirir. |
| `removedata(key)` | Belirtilen anahtarı veritabanından kaldırır. |

## Örnek çıktı

```text
Kaydetme -> Durum: 200, Mesaj: OK
Okuma -> Durum: 200, Mesaj: OK, Veri: Some("22.5")
Geçiş -> Durum: 200, Mesaj: OK
Kaldırma -> Durum: 200, Mesaj: OK
```

## Ortam değişkeniyle kullanım

Üretim projelerinde API anahtarını kod içinde tutmak yerine ortam değişkeninden okumak daha güvenlidir.

```rust
use pxserv::PxServ;
use std::env;

fn main() {
    let api_key = env::var("PXSERV_API_KEY")
        .expect("PXSERV_API_KEY ortam değişkeni tanımlı olmalıdır");

    let client = PxServ::new(&api_key);
    let response = client.setdata("service/status", "online");

    println!("Durum: {}, Mesaj: {}", response.status, response.message);
}
```

## İyi pratikler

* API anahtarını ortam değişkeni veya secret yönetimiyle sağlayın.
* Yanıtın `status` ve `message` alanlarını loglayın.
* Anahtar isimlerini proje içinde tutarlı bir şemayla kullanın.
* Servis uygulamalarında gereksiz sık istek göndermekten kaçının.
* Hata durumlarında yeniden deneme stratejisini uygulama tarafında planlayın.

## Sorun giderme

**Crate derlenmiyor**

* `Cargo.toml` içindeki paket adının `pxserv` olduğundan emin olun.
* Rust toolchain'inizin güncel olduğundan emin olun.

**API isteği başarısız oluyor**

* API anahtarını ve proje yetkisini kontrol edin.
* İnternet bağlantısını doğrulayın.
* Dönen `status` ve `message` alanlarını loglayın.

**Okuma sonucunda veri boş geliyor**

* Anahtar adının doğru yazıldığını kontrol edin.
* Değerin daha önce `setdata()` ile kaydedildiğinden emin olun.
