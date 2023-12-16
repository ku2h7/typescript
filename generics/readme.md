# Generics

Generics di TypeScript memungkinkan Kita membuat fungsi, kelas, atau interface yang dapat bekerja dengan berbagai jenis data tanpa kehilangan keamanan tipe data. Berikut adalah contoh penggunaan generics:

1. Mendefinisikan fungsi generik dengan parameter tipe T

    ```
    function identitas<T>(arg: T): T {
        return arg;
    }
    ```

2. Menggunakan fungsi generik dengan tipe string

    ```
    const hasilString: string = identitas<string>("Hello, Generics!");
    ```

3. Menggunakan fungsi generik tanpa menyediakan tipe (Type Inference)

    ```
    const hasilAngka: number = identitas(42);
    ```

4. Mendefinisikan interface generik

    ```
    interface Pasangan<T, U> {
        nilai1: T;
        nilai2: U;
    }
    ```

5. Menggunakan interface generik dengan tipe string dan number

    ```
    const pasangan: Pasangan<string, number> = {
        nilai1: "Satu",
        nilai2: 2,
    };
    ```

6. Mendefinisikan kelas generik

    ```
    class Kotak<T> {
        nilai: T;

        constructor(nilai: T) {
            this.nilai = nilai;
        }
    }
    ```

7. Menggunakan kelas generik dengan tipe boolean

    ```
    const kotakBoolean = new Kotak<boolean>(true);
    ```

8. Menggunakan kelas generik tanpa menyediakan tipe (Type Inference)

    const kotakString = new Kotak("Halo, Generics!");
    ```
    ```

9. Mendefinisikan fungsi generik dengan constraint

    ```
    function panjangArray<T extends { length: number }>(arg: T): number {
        return arg.length;
    }
    ```

10. Menggunakan fungsi generik dengan constraint pada array

    ```
    const panjang: number = panjangArray([1, 2, 3]);

    ```

11. Menggunakan fungsi generik dengan constraint pada string

    ```
    const panjangString: number = panjangArray("Hello");
    ```

### Penjelasan

- Pada baris 1, kita mendefinisikan fungsi generik **identitas** dengan parameter tipe **T**. Fungsi ini mengembalikan nilai dengan tipe yang sama dengan parameter.
- Pada baris 2 dan 3, kita menggunakan fungsi generik dengan menyediakan tipe **string** dan menggunakan Type Inference.
- Pada baris 4, kita mendefinisikan interface generik **Pasangan** dengan dua parameter tipe, **T** dan **U**.
- Pada baris 5, kita menggunakan interface generik untuk membuat objek **pasangan**.
- Pada baris 6, kita mendefinisikan kelas generik **Kotak** dengan parameter tipe T.
- Pada baris 7 dan 8, kita menggunakan kelas generik untuk membuat objek **kotakBoolean** dan **kotakString**.
- Pada baris 9, kita mendefinisikan fungsi generik **panjangArray** dengan constraint bahwa tipe **T** harus memiliki properti **length**.
- Pada baris 10 dan 11, kita menggunakan fungsi generik dengan constraint pada array dan string.

