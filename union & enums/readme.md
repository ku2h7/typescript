# Union & Enums Type

## Union Type

Union types di TypeScript memungkinkan Kita mendefinisikan bahwa sebuah nilai dapat memiliki lebih dari satu tipe. Berikut adalah contoh penggunaan union types:

1. Mendefinisikan union type dengan '|' antara tipe-tipe

    ```
    type ID = string | number;
    ```

2. Fungsi yang menerima parameter bertipe union

    ```
    function cetakID(id: ID): void
    ```

3. Memeriksa tipe data menggunakan operator typeof dan menjalankan log sesuai tipe

    ```
    if (typeof id === 'string') {
        console.log(`ID String: ${id}`);
    } else {
        console.log(`ID Number: ${id}`);
    }
    ```

4. Memanggil fungsi dengan string sebagai argumen

    ```
    cetakID('ABC123');
    ```

5. Memanggil fungsi dengan number sebagai argumen

    ```
    cetakID(456);
    ```

6. Objek dengan properti bertipe union

    ```
    type HasStatus = { status: 'success' | 'error' };
    ```

7. Fungsi dengan nilai kembalian bertipe union

    ```
    function getRandomValue(): number | string {
        return Math.random() > 0.5 ? 'success' : 42;
    }
    ```

8. Menyimpan nilai kembalian dalam variabel bertipe union

    ```
    const result: number | string = getRandomValue();
    ```

9. Memeriksa tipe data sebelum penggunaan

    ```
    if (typeof result === 'number') {
        console.log(`Number Result: ${result}`);
    } else {
        console.log(`String Result: ${result}`);
    }
    ```

### Penjelasan

- Pada baris 1, kita mendefinisikan union type **ID** yang dapat berupa string atau number.
- Pada baris 2, kita membuat fungsi **cetakID** yang menerima parameter bertipe **ID**.
- Pada baris 4 dan 5, kita memanggil fungsi **cetakID** dengan parameter berupa string dan number.
- Pada baris 6, kita mendefinisikan objek dengan properti **status** yang dapat bernilai '**success**' atau '**error**'.
- Pada baris 7, kita mendefinisikan fungsi **getRandomValue** yang mengembalikan nilai bertipe union.
- Pada baris 8 dan 9, kita menggunakan nilai kembalian fungsi **getRandomValue** dengan menyimpannya dalam variabel bertipe union dan memeriksa tipe sebelum penggunaan.

## Enums

Enums di TypeScript memungkinkan Kita mendefinisikan satu set nilai yang memiliki nama yang bermakna. Berikut adalah contoh penggunaan enums:

1. Mendefinisikan enum dengan kata kunci 'enum'

    ```
    enum Warna {
        Merah,  // Nilai default dimulai dari 0
        Biru,   // Nilai selanjutnya secara otomatis bertambah satu dari nilai sebelumnya
        Hijau,  // Merah = 0, Biru = 1, Hijau = 2
    }
    ```

2. Menggunakan nilai dari enum

    ```
    let warnaPilihan: Warna = Warna.Biru;
    ```

3. Mencetak nilai dari enum

    ```
    console.log(warnaPilihan);  // Output: 1
    ```

4. Menggunakan enum untuk mendefinisikan tipe data

    ```
    enum Status {
        Aktif = 'ACTIVE',   // Nilai enum dapat diinisialisasi dengan nilai yang ditentukan
        NonAktif = 'INACTIVE',
    }
    ```

5. Menggunakan nilai dari enum tipe string

    ```
    let statusPengguna: Status = Status.Aktif;
    ```

6. Mencetak nilai dari enum tipe string

    ```
    console.log(statusPengguna);  // Output: 'ACTIVE'
    ```

### Penjelasan

- Pada baris 1, kita mendefinisikan enum Warna dengan nilai-nilai default yang dimulai dari 0.
- Pada baris 2, kita menginisialisasi variabel warnaPilihan dengan nilai dari enum Warna.
- Pada baris 3, kita mencetak nilai dari variabel warnaPilihan.
- Pada baris 4, kita mendefinisikan enum Status dengan nilai enum yang diinisialisasi dengan string.
- Pada baris 5, kita menginisialisasi variabel statusPengguna dengan nilai dari enum Status.
- Pada baris 6, kita mencetak nilai dari variabel statusPengguna.

