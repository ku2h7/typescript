# Code Formatting & Style Guides

Code formatting dan style guides sangat penting dalam pengembangan perangkat lunak karena membantu menjaga konsistensi, mempermudah kerjasama tim, dan membuat kode lebih mudah dibaca. Berikut adalah contoh cara menggunakan code formatting dan style guides di TypeScript:

## Penerapan Prettier dan ESLint (Sebagai Contoh)

**1. Instalasi Prettier dan ESLint:**

    npm install --save-dev prettier eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
  
**2. Konfigurasi ESLint:**

  Buat file konfigurasi **.eslintrc.js**:

    module.exports = {
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      rules: {
        // Atur aturan ESLint sesuai kebutuhan Anda
      },
    };

**3. Konfigurasi Prettier:**

  Buat file konfigurasi **.prettierrc**:

    {
      "semi": false,
      "singleQuote": true,
      "printWidth": 80,
      // Atur opsi Prettier sesuai kebutuhan Anda
    }

**4. Konfigurasi NPM Scripts:**

  Tambahkan script dalam file **package.json**:

    {
      "scripts": {
        "lint": "eslint . --ext .ts",
        "format": "prettier --write \"**/*.ts\""
      },
    }

**5. Penggunaan Prettier dan ESLint:**

  Jalankan linting dan formatting melalui script NPM:


    npm run lint   # Untuk menjalankan ESLint
    npm run format # Untuk menjalankan Prettier

**6. Komentar per Line:**

    // 1. Interface dengan nama yang deskriptif
    interface Pengguna {
      id: number;
      nama: string;
    }

    // 2. Fungsi dengan blok kode yang di-indentasi dengan 2 spasi
    function sambutPengguna(user: Pengguna): void {
      console.log(`Halo, ${user.nama}!`);
    }

    // 3. Fungsi dengan tipe kembalian yang jelas
    function hitungJumlah(a: number, b: number): number {
      return a + b;
    }

    // 4. Fungsi dengan parameter yang dinamis menggunakan Rest Parameter
    function gabungString(...kata: string[]): string {
      return kata.join(' ');
    }

    // 5. Kondisional dengan tanda kurung untuk meningkatkan keterbacaan
    if (hasilJumlah > 10 && pengguna.status === 'aktif') {
      console.log('Selamat!');
    }

    // 6. Objek dengan properti diurutkan secara alfanumerik
    const pengguna: Pengguna = {
      id: 1,
      nama: 'John Doe',
    };

    // 7. Template literal untuk string yang kompleks
    const pesan = `Halo, ${pengguna.nama}! ID Anda adalah ${pengguna.id}.`;

Pada contoh di atas, komentar per baris memberikan penjelasan tentang praktik-praktik yang diterapkan, seperti menggunakan nama yang deskriptif, indentasi, tipe kembalian yang jelas, rest parameter, kondisional yang lebih terbaca, urutan properti objek, dan template literals untuk string yang kompleks. Setiap tim atau proyek dapat memiliki preferensi tertentu, tetapi kunci utamanya adalah untuk konsisten dan mudah dibaca.

