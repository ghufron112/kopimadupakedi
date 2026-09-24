# Kopi Madu Website 🍯☕

Website landing page modern dan responsif untuk kedai kopi "Kopi Madu". Website ini dibangun tanpa menggunakan database dan sangat mudah untuk dimodifikasi bagi pemula.

## Teknologi yang Digunakan
- HTML5
- CSS3 (Vanilla)
- JavaScript (Vanilla)
- Font: Poppins & Playfair Display (Google Fonts)
- Ikon: Font Awesome 6

---

## 1. Cara Menjalankan Website
Karena website ini statis, Anda tidak memerlukan server khusus (seperti XAMPP atau Node.js).
1. Buka folder `kopimadu`.
2. Klik ganda (double-click) pada file `index.html`.
3. Website akan terbuka di browser bawaan Anda.

---

## 2. Cara Mengganti Logo
1. Siapkan file logo Anda (disarankan format `.png` dengan background transparan).
2. Simpan logo tersebut di folder `images/`.
3. Buka `index.html` dengan text editor (Notepad, VS Code, atau Sublime Text).
4. Cari baris berikut:
   ```html
   <a href="#" class="logo">
       <i class="fa-solid fa-bug"></i> KOPI MADU
   </a>
   ```
5. Ubah menjadi gambar:
   ```html
   <a href="#" class="logo">
       <img src="images/logo-anda.png" alt="Logo Kopi Madu" height="40">
   </a>
   ```

---

## 3. Cara Mengganti Foto
Semua foto saat ini menggunakan link dari Unsplash (placeholder). Untuk menggantinya dengan foto produk asli:
1. Simpan foto asli ke dalam folder `images/`.
2. Buka file `index.html` (untuk foto Hero, About, Promo) atau `js/script.js` (untuk foto produk).
3. Cari link foto contoh, misal: `https://images.unsplash.com/...`
4. Ganti menjadi: `images/nama-foto.jpg`.

---

## 4. Cara Menambah Menu & Mengubah Harga
Semua data menu disimpan dalam format JavaScript yang mudah dibaca.
1. Buka file `js/script.js`.
2. Di bagian paling atas, terdapat variabel `const menuData = [...]`.
3. Untuk mengubah harga, cari produk yang diinginkan, ubah nilai pada `"price": "13K"`.
4. Untuk menambah menu, tambahkan blok data baru di dalam kategori yang sesuai:
   ```javascript
   {
     id: 16, // pastikan id unik (tidak boleh sama)
     name: "Menu Baru",
     category: "Milk Based", // Pastikan nama kategori sesuai filter (Milk Based, Classic Coffee, dll)
     description: "Deskripsi singkat minuman.",
     price: "15K",
     image: "images/foto-baru.jpg",
     isBestSeller: false // true jika ingin ada badge best seller
   },
   ```

---

## 5. Cara Mengubah Nomor WhatsApp
1. Buka file `js/script.js`.
2. Cari kode berikut (di bawah bagian MENU DATA):
   ```javascript
   const WA_NUMBER = "6285791437530";
   ```
3. Ubah angkanya dengan nomor WhatsApp Anda (gunakan kode negara `62` sebagai pengganti `0`).

Untuk tombol WhatsApp di bagian 'Contact' (`index.html`):
1. Buka `index.html`.
2. Cari link: `href="https://wa.me/6285791437530"`
3. Ubah nomornya sesuai keinginan.

---

## 6. Cara Mengubah Instagram
1. Buka `index.html`.
2. Cari teks `@kopimadupakedy` dan link `href="https://instagram.com/kopimadupakedy"`.
3. Ganti nama dan link sesuai akun Instagram asli kedai Anda.

---

## 7. Cara Upload Website ke GitHub Pages (Gratis)
Jika Anda ingin website ini dapat diakses secara online (misal: `https://username.github.io/kopimadu`), Anda bisa menggunakan GitHub Pages:
1. Buat akun di [GitHub](https://github.com/).
2. Buat **New Repository**, beri nama (contoh: `kopimadu`).
3. Upload seluruh isi folder ini (index.html, css, js, images) ke repository tersebut.
4. Pergi ke tab **Settings** di repository tersebut.
5. Pilih menu **Pages** di sebelah kiri.
6. Pada bagian **Source**, pilih branch `main` (atau `master`), lalu klik **Save**.
7. Tunggu beberapa menit, GitHub akan memberikan link website Anda yang sudah online!
