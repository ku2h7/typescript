# Modules

Dalam TypeScript, Kita dapat mengorganisir kode Kita menggunakan modul internal atau modul eksternal untuk memisahkan dan mengelompokkan fungsi, kelas, atau variabel dalam file atau proyek yang berbeda. Berikut adalah contoh cara menggunakan modul di TypeScript:

**Catatan: Sebelum menggunakan modul, pastikan Kita telah mengonfigurasi proyek TypeScript Kita menggunakan file tsconfig.json dan mengaktifkan opsi "module": "commonjs" atau opsi modul lainnya.**

## Internal Modules

1. Mendefinisikan modul internal (namespace)

    ```
    namespace Matematika
    ```

2. Mendefinisikan kelas di dalam modul

    ```
    export class Kalkulator {
        tambah(a: number, b: number): number {
            return a + b;
        }
    }
    ```

3. Mendefinisikan fungsi di dalam modul

    ```
    export function kali(a: number, b: number): number {
        return a * b;
    }
    ```

4. Menggunakan kelas dari modul internal

    ```
    const kalkulator = new Matematika.Kalkulator();
    console.log(kalkulator.tambah(2, 3));  // Output: 5
    ```

5. Menggunakan fungsi dari modul internal

    ```
    console.log(Matematika.kali(4, 5));  // Output: 20
    ```

### Penjelasan

- **Baris 1:** Mendefinisikan modul internal (namespace) **Matematika**.
- **Baris 2:** Mendefinisikan kelas **Kalkulator** di dalam modul dan mengekspornya.
- **Baris 3:** Mendefinisikan fungsi **kali** di dalam modul dan mengekspornya.
- **Baris 4:** Menggunakan kelas **Kalkulator** dari modul internal.
- **Baris 5:** Menggunakan fungsi **kali** dari modul internal.

## External Modules

1. Mendefinisikan file matematika.ts sebagai modul eksternal

    ```
    export class Kalkulator {
        tambah(a: number, b: number): number {
            return a + b;
        }
    }

    export function kali(a: number, b: number): number {
        return a * b;
    }
    ```

2. Menggunakan modul eksternal di file lain

    ```
    import { Kalkulator, kali } from "./matematika";
    ```

3. Menggunakan kelas dari modul eksternal

    ```
    const kalkulator = new Kalkulator();
    console.log(kalkulator.tambah(2, 3));  // Output: 5
    ```

4. Menggunakan fungsi dari modul eksternal

    ```
    console.log(kali(4, 5));  // Output: 20
    ```

### Penjelasan

- **Baris 1:** Mendefinisikan file matematika.ts sebagai modul eksternal dengan mengekspor kelas Kalkulator dan fungsi kali.
- **Baris 2:** Menggunakan modul eksternal di file lain dengan pernyataan import.
- **Baris 3:** Menggunakan kelas Kalkulator dari modul eksternal.
- **Baris 4:** Menggunakan fungsi kali dari modul eksternal.

Dengan menggunakan modul, Kita dapat mengatur kode Kita dengan lebih baik dan mengelompokkan fungsionalitas terkait ke dalam unit yang lebih terpisah.