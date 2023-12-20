# Decorator

Decorator adalah fitur di TypeScript yang memungkinkan Anda menambahkan metadata atau perilaku tambahan pada class, metode, atau property. Berikut adalah contoh penggunaan simple decorator:

1. Mendeklarasikan decorator sederhana `logMethod` untuk metode class. Decorator ini menerima tiga parameter: `target` (class yang memiliki metode), `key` (nama metode), dan `descriptor` (deskripsi metode).
    ```
    // Deklarasi decorator sederhana untuk metode
    function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    ```

2. Menyimpan referensi ke function asli (metode yang akan dimodifikasi) menggunakan `descriptor.value`.
    ```
    // Simpan referensi ke function asli
    const originalMethod = descriptor.value;
    ```

3. Modifikasi metode yang ada dengan menetapkan function baru yang akan menjalankan logika sebelum dan setelah eksekusi metode asli.

    ```
    // Modifikasi metode yang ada
    descriptor.value = function (...args: any[]) {
    ```


4. Bagian dalam decorator yang mencetak informasi sebelum eksekusi metode.
   
    ```
    // Outputkan informasi sebelum eksekusi metode
    console.log(`Executing method ${key} with arguments: ${args}`);
    ```


5. Eksekusi function asli (metode yang dimodifikasi).

    ```
    // Eksekusi function asli
    const result = originalMethod.apply(this, args);
    ```

6. Bagian dalam decorator yang mencetak informasi setelah eksekusi metode.

    ```
    // Outputkan informasi setelah eksekusi metode
    console.log(`Method ${key} executed with result: ${result}`);
    ```

7. Mengembalikan hasil eksekusi metode.

    ```
    // Kembalikan hasil eksekusi
    return result;
    ```

8. Mendeklarasikan class `MyClass`.

    ```
    // Contoh penggunaan decorator pada class
    class MyClass {
    ```

9. Menggunakan decorator @logMethod pada metode myMethod dalam class MyClass. Decorator ini akan memodifikasi perilaku metode tersebut.

    ```
    // Penggunaan decorator pada metode
    @logMethod
    public myMethod(arg1: number, arg2: string): string {
      console.log(`Executing myMethod logic with arguments: ${arg1}, ${arg2}`);
      return `Result for ${arg1}, ${arg2}`;
    }
    ```

10. Memanggil metode myMethod dari instance yang telah dibuat, dan output akan dicetak ke konsol.

    ```
    // Membuat instance dari class yang menggunakan decorator
    const myInstance = new MyClass('Hello, Decorator!');
    ```

12. Membuat instance dari class `MyClass` dengan memberikan nilai parameter ke constructor.

    ```
    // Memanggil metode dari instance
    const result = myInstance.myMethod(42, 'TypeScript');
    ```
