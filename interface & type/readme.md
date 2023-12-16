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

## Interface Inheritance

Penjelasan konsep pewarisan pada Interface di Typescript:

1. Mendefinisikan interface induk

        ```
        interface Hewan {
            nama: string;
            jenis: string;
        }
        ```

2. Mendefinisikan interface anak yang mewarisi dari interface induk

        ```
        interface Mamalia extends Hewan {
            jumlahKaki: number;
        }
        ```

3. Implementasi objek yang memenuhi interface Mamalia

        ```
        const kucing: Mamalia = {
            nama: "Meow",
            jenis: "Kucing",
            jumlahKaki: 4,
        };
        ```

4. Mencetak informasi hewan mamalia

        ```
        console.log(`${kucing.nama} adalah sejenis ${kucing.jenis} dan memiliki ${kucing.jumlahKaki} kaki.`);
        ```

5. Mendefinisikan interface lain yang mewarisi dari Hewan

        ```
        interface Reptil extends Hewan {
            panjangEkor: number;
        }
        ```

6. Implementasi objek yang memenuhi interface Reptil

        ```
        const ular: Reptil = {
            nama: "Slippy",
            jenis: "Ular",
            panjangEkor: 2,
        };
        ```

7. Mencetak informasi hewan reptil

        ```
        console.log(`${ular.nama} adalah sejenis ${ular.jenis} dan memiliki ekor sepanjang ${ular.panjangEkor} meter.`);
        ```

### Penjelasan

- Pada baris 1, kita mendefinisikan interface induk **Hewan** dengan properti **nama** dan **jenis**.
- Pada baris 2, kita mendefinisikan interface anak **Mamalia** yang mewarisi dari **Hewan** dan menambahkan properti **jumlahKaki**.
- Pada baris 3, kita mengimplementasikan objek kucing yang memenuhi interface Mamalia.
- Pada baris 5, kita mendefinisikan interface lain **Reptil** yang mewarisi dari **Hewan** dan menambahkan properti **panjangEkor**.
- Pada baris 6, kita mengimplementasikan objek ular yang memenuhi interface Reptil.

Dengan cara ini, interface anak (**Mamalia** dan **Reptil**) dapat memiliki properti dari interface induk (**Hewan**) dan menambahkan properti tambahan sesuai dengan kebutuhan.

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

   - **interface** dapat diperluas (extended) atau diimplementasikan (implemented), memungkinkan Kita menggabungkan beberapa definisi interface.
   - **type** dapat digunakan untuk membuat jenis baru, namun tidak dapat diperluas atau diimplementasikan secara langsung.

2. Pewarisan:

   - **interface** mendukung pewarisan, yang memungkinkan satu interface untuk menggabungkan properti dan metode dari interface lain.
   - **type** mendukung pembuatan union, intersection, dan jenis lainnya, tetapi tidak memiliki mekanisme resmi untuk pewarisan.

3. Penggunaan dalam Deklarasi:

   - **interface** biasanya lebih sering digunakan untuk mendefinisikan bentuk objek atau struktur data.
   - **type** sering digunakan untuk membuat jenis yang lebih kompleks, seperti union dan intersection types.

Secara umum, pilihlah antara **interface** dan **type** berdasarkan kebutuhan spesifik Kita. Dalam beberapa kasus, keduanya dapat digunakan secara bergantian, tergantung pada preferensi atau kebutuhan proyek.