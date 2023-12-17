# Async / Await in Asyncronous Operation

Async/await adalah fitur JavaScript yang memudahkan penanganan operasi asynchronous. TypeScript mendukung async/await dan dapat digunakan dengan mudah. Berikut adalah contoh penggunaan async/await dalam TypeScript:

1. Function asynchronous yang mengembalikan Promise

    ```
    function ambilData(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data berhasil diambil");
            }, 2000); // Simulasi operasi asynchronous (2 detik)
        });
    }
    ```

2. Function utama dengan async/await

    ```
    async function main() {
        console.log("Mulai");

        try {
            const hasil = await ambilData();

            console.log(hasil);
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        }

        console.log("Selesai");
    }
    ```

3. Menunggu operasi asynchronous selesai menggunakan await

    ```
    const hasil = await ambilData();
    ```

4. Setelah operasi selesai, melanjutkan eksekusi kode

    ```
    console.log(hasil);
    ```

5. Menangani error jika ada

    ```
    console.error("Terjadi kesalahan:", error);
    ```

6. Memanggil function utama

    ```
    main();
    ```

### Penjelasan

- **Baris 1:** Membuat function **ambilData** yang mengembalikan Promise dengan tipe string. Function ini mensimulasikan operasi asynchronous menggunakan **setTimeout**.

- **Baris 2:** Membuat function utama **main** dengan keyword **async**. Function ini akan menggunakan async/await untuk menangani operasi asynchronous.

- **Baris 3:** Menggunakan **await** untuk menunggu hasil dari operasi asynchronous yang didefinisikan di dalam function ambilData.

- **Baris 4:** Setelah operasi selesai, melanjutkan eksekusi kode dengan hasil yang diterima.

- **Baris 5:** Menggunakan blok **try-catch** untuk menangani error jika terjadi kesalahan dalam operasi asynchronous.

- **Baris 6:** Memanggil function utama **main**. Karena **main** menggunakan async/await, pemanggilannya harus di dalam async function atau dalam blok **then** pada Promise.

Dengan menggunakan async/await, kode asynchronous dapat ditulis dengan lebih bersih dan lebih mudah dipahami, terutama ketika ada banyak operasi asynchronous yang perlu diurutkan atau dikombinasikan.
