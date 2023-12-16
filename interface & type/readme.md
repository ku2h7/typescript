# Interface & Type

## Intreface

Dalam TypeScript, *interface* digunakan untuk mendefinisikan kontrak tipe atau bentuk data. Berikut adalah contoh penggunaan *interface*:

1. Mendefinisikan interface

    ```
    interface Pengguna {
      nama: string;
      umur: number;
      pekerjaan?: string; // Properti pekerjaan bersifat opsional
    }
    ```

2. Membuat fungsi yang menerima parameter bertipe interface

    ```
    function sambutPengguna(user: Pengguna): void
    ```

3. Menggunakan properti dari interface dalam fungsi

    ```
    console.log(`Halo, ${user.nama}!`);
    console.log(`Umur: ${user.umur}`);
    ```

4. Memeriksa apakah properti pekerjaan diisi atau tidak
    
    ```
    if (user.pekerjaan !== undefined) {
        console.log(`Pekerjaan: ${user.pekerjaan}`);
    } else {
        console.log("Pekerjaan belum diisi.");
    }
    ```

5. Membuat objek yang memenuhi interface Pengguna
    ```
    const pengguna1: Pengguna = {
        nama: "John Doe",
        umur: 25,
        pekerjaan: "Developer",
    };
    ```

6. Memanggil fungsi dengan objek sebagai argumen

    ```
    sambutPengguna(pengguna1);
    ```

7. Membuat objek lain yang memenuhi interface Pengguna

    ```
    const pengguna2: Pengguna = {
        nama: "Jane Doe",
        umur: 30,
        // Properti pekerjaan tidak diisi (opsional)
    };
    ```

8. Memanggil fungsi dengan objek lain sebagai argumen

    ```
    sambutPengguna(pengguna2);
    ```

### Penjelasan

Kita mendefinisikan interface **Pengguna** yang memiliki beberapa properti, termasuk properti opsional (**pekerjaan**). Kemudian, kita membuat fungsi **sambutPengguna** yang menerima parameter bertipe **Pengguna** dan mencetak informasi berdasarkan properti yang ada. Objek **pengguna1** dan **pengguna2** dibuat sesuai dengan interface **Pengguna** dan digunakan sebagai argumen saat memanggil fungsi.

## Type

Dalam TypeScript, *type* digunakan untuk mendefinisikan kontrak tipe atau bentuk data. Berikut adalah contoh penggunaan *type*:

1. Mendefinisikan type

    ```
    type Pengguna {
      nama: string;
      umur: number;
      pekerjaan?: string; // Properti pekerjaan bersifat opsional
    }
    ```

2. Membuat fungsi yang menerima parameter bertipe type

    ```
    function sambutPengguna(user: Pengguna): void
    ```

3. Menggunakan properti dari type dalam fungsi

    ```
    console.log(`Halo, ${user.nama}!`);
    console.log(`Umur: ${user.umur}`);
    ```

4. Memeriksa apakah properti pekerjaan diisi atau tidak
    
    ```
    if (user.pekerjaan !== undefined) {
        console.log(`Pekerjaan: ${user.pekerjaan}`);
    } else {
        console.log("Pekerjaan belum diisi.");
    }
    ```

5. Membuat objek yang memenuhi type Pengguna
    ```
    const pengguna1: Pengguna = {
        nama: "John Doe",
        umur: 25,
        pekerjaan: "Developer",
    };
    ```

6. Memanggil fungsi dengan objek sebagai argumen

    ```
    sambutPengguna(pengguna1);
    ```

7. Membuat objek lain yang memenuhi type Pengguna

    ```
    const pengguna2: Pengguna = {
        nama: "Jane Doe",
        umur: 30,
        // Properti pekerjaan tidak diisi (opsional)
    };
    ```

8. Memanggil fungsi dengan objek lain sebagai argumen

    ```
    sambutPengguna(pengguna2);
    ```

### Penjelasan

kita menggunakan **type** untuk mendefinisikan struktur data **Pengguna**. Kemudian, fungsi **sambutPengguna** menggunakan parameter bertipe **Pengguna**. Objek **pengguna1** dan **pengguna2** dibuat sesuai dengan tipe **Pengguna** dan digunakan sebagai argumen saat memanggil fungsi. **type** dapat digunakan untuk membuat alias untuk tipe data yang kompleks.

## Perbedaan antara interface dan type:

1. Ekstensibilitas:

   - **interface** dapat diperluas (extended) atau diimplementasikan (implemented), memungkinkan Anda menggabungkan beberapa definisi interface.
   - **type** dapat digunakan untuk membuat jenis baru, namun tidak dapat diperluas atau diimplementasikan secara langsung.

2. Pewarisan:

   - **interface** mendukung pewarisan, yang memungkinkan satu interface untuk menggabungkan properti dan metode dari interface lain.
   - **type** mendukung pembuatan union, intersection, dan jenis lainnya, tetapi tidak memiliki mekanisme resmi untuk pewarisan.

3. Penggunaan dalam Deklarasi:

   - **interface** biasanya lebih sering digunakan untuk mendefinisikan bentuk objek atau struktur data.
   - **type** sering digunakan untuk membuat jenis yang lebih kompleks, seperti union dan intersection types.

Secara umum, pilihlah antara **interface** dan **type** berdasarkan kebutuhan spesifik Anda. Dalam beberapa kasus, keduanya dapat digunakan secara bergantian, tergantung pada preferensi atau kebutuhan proyek.