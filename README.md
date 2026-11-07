# AquaRia — Toko Ikan Hias

Website toko online sederhana untuk menampilkan dan mensimulasikan pembelian ikan hias serta makanan ikan.

## Fitur
- Katalog 12 jenis ikan hias.
- Katalog makanan ikan.
- Filter kategori ikan dan pencarian produk.
- Keranjang belanja dengan pengaturan jumlah barang.
- Ringkasan pesanan simulasi.
- Tampilan responsif untuk desktop dan ponsel.

## Cara Menjalankan
1. Download atau clone repository ini.
2. Buka folder `aquaria-hias` di Visual Studio Code.
3. Buka file `index.html` menggunakan browser. Bisa juga memakai ekstensi Live Server di VS Code.
4. Pastikan perangkat terhubung ke internet agar gambar produk dan Google Fonts dapat dimuat.

## Struktur File
```text
aquaria-hias/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/              # Ilustrasi ikan dan pakan (file lokal)
```

## Catatan
Website ini merupakan proyek front-end/demo. Keranjang dan checkout hanya simulasi, belum terhubung ke database, akun pengguna, stok, maupun sistem pembayaran. Gambar produk dimuat dari layanan gambar eksternal LoremFlickr sehingga membutuhkan koneksi internet.


## Gambar Produk
Ilustrasi ikan dan pakan disimpan di folder `assets/` dan dipanggil menggunakan path relatif. Karena gambar disimpan bersama source code, gambar tidak bergantung pada layanan gambar eksternal.
