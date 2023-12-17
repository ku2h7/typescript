# Generics

Generics di TypeScript memungkinkan Kita membuat function, class, atau interface yang dapat bekerja dengan berbagai jenis data tanpa kehilangan keamanan tipe data. Berikut adalah contoh penggunaan generics:

1. Mendefinisikan function generics dengan parameter tipe T

    ```
    function identitas<T>(arg: T): T {
        return arg;
    }
    ```

2. Menggunakan generics function dengan tipe string

    ```
    const hasilString: string = identitas<string>("Hello, Generics!");
    ```

3. Menggunakan generics function tanpa menyediakan tipe (Type Inference)

    ```
    const hasilAngka: number = identitas(42);
    ```

4. Mendefinisikan generics interface

    ```
    interface Pasangan<T, U> {
        nilai1: T;
        nilai2: U;
    }
    ```

5. Menggunakan generics interface dengan tipe string dan number

    ```
    const pasangan: Pasangan<string, number> = {
        nilai1: "Satu",
        nilai2: 2,
    };
    ```

6. Mendefinisikan generics class

    ```
    class Kotak<T> {
        nilai: T;

        constructor(nilai: T) {
            this.nilai = nilai;
        }
    }
    ```

7. Menggunakan generics class dengan tipe boolean

    ```
    const kotakBoolean = new Kotak<boolean>(true);
    ```

8. Menggunakan generics class tanpa menyediakan tipe (Type Inference)

    const kotakString = new Kotak("Halo, Generics!");
    ```
    ```

9. Mendefinisikan generics function dengan constraint

    ```
    function panjangArray<T extends { length: number }>(arg: T): number {
        return arg.length;
    }
    ```

10. Menggunakan generics function dengan constraint pada array

    ```
    const panjang: number = panjangArray([1, 2, 3]);

    ```

11. Menggunakan generics function dengan constraint pada string

    ```
    const panjangString: number = panjangArray("Hello");
    ```

### Penjelasan

- Pada baris 1, kita mendefinisikan generics function **identitas** dengan parameter tipe **T**. Function ini mengembalikan nilai dengan tipe yang sama dengan parameter.
- Pada baris 2 dan 3, kita menggunakan generics function dengan menyediakan tipe **string** dan menggunakan Type Inference.
- Pada baris 4, kita mendefinisikan generics interface **Pasangan** dengan dua parameter tipe, **T** dan **U**.
- Pada baris 5, kita menggunakan generics interface untuk membuat objek **pasangan**.
- Pada baris 6, kita mendefinisikan generics class **Kotak** dengan parameter tipe T.
- Pada baris 7 dan 8, kita menggunakan generics class untuk membuat objek **kotakBoolean** dan **kotakString**.
- Pada baris 9, kita mendefinisikan generics function **panjangArray** dengan constraint bahwa tipe **T** harus memiliki properti **length**.
- Pada baris 10 dan 11, kita menggunakan generics function dengan constraint pada array dan string.

