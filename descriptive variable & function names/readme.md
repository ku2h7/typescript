# Descriptive Variable & Function Names

Pemberian nama variable dan function yang descriptive (descriptive) adalah praktik yang baik dalam pengembangan perangkat lunak. Ini membantu meningkatkan keterbacaan kode dan mempermudah pemahaman maksud dari variable atau function tersebut. Berikut adalah contoh penggunaan nama variable dan function yang descriptive dalam TypeScript:

1. Variable dengan nama descriptive

    ```
    const panjangMaksimalNamaPengguna: number = 20;
    ```

2. function dengan nama descriptive untuk memeriksa panjang nama pengguna

    ```
    function apakahNamaPenggunaValid(namaPengguna: string): boolean {
        return namaPengguna.length <= panjangMaksimalNamaPengguna;
    }
    ```

3. Enum untuk status pengguna

    ```
    enum StatusPengguna {
        Aktif = 'ACTIVE',
        NonAktif = 'INACTIVE',
    }
    ```

4. function untuk mengganti status pengguna

    ```
    function ubahStatusPengguna(namaPengguna: string, status: StatusPengguna): void {
        // Logika untuk mengganti status pengguna
        console.log(`Status pengguna ${namaPengguna} diubah menjadi ${status}`);
    }
    ```

5. Interface untuk data pengguna

    ```
    interface DataPengguna {
        nama: string;
        umur: number;
    }
    ```

6. function untuk mencetak informasi pengguna

    ```
    function cetakInfoPengguna(dataPengguna: DataPengguna): void {
        console.log(`Nama: ${dataPengguna.nama}, Umur: ${dataPengguna.umur}`);
    }
    ```

7. Variable dengan nama yang menjelaskan isinya

    ```
    const daftarNamaPengguna: string[] = ["John", "Jane", "Doe"];
    ```

8. function untuk mencari indeks nama pengguna dalam array

    ```
    function cariIndeksNamaPengguna(namaDicari: string): number {
        return daftarNamaPengguna.indexOf(namaDicari);
    }
    ```

### Penjelasan

- **Baris 1:** panjangMaksimalNamaPengguna adalah variable yang menyimpan panjang maksimal nama pengguna. Nama variable ini menjelaskan penggunaannya.

- **Baris 2:** apakahNamaPenggunaValid adalah function yang memeriksa apakah nama pengguna valid. Nama function ini dengan jelas menyatakan tujuannya.

- **Baris 3:** StatusPengguna adalah enum yang menyimpan status pengguna. Nama enum dan nilai-nilainya memberikan informasi tentang status pengguna yang mungkin.

- **Baris 4:** ubahStatusPengguna adalah function untuk mengganti status pengguna. Nama function ini mengindikasikan tindakan yang diambil.

- **Baris 5:** DataPengguna adalah interface yang mendefinisikan struktur data pengguna. Nama interface ini menyatakan jenis data yang diharapkan.

- **Baris 6:** cetakInfoPengguna adalah function untuk mencetak informasi pengguna. Nama function ini menjelaskan tindakan yang dilakukan.

- **Baris 7:** daftarNamaPengguna adalah array yang berisi daftar nama pengguna. Nama array ini dengan jelas menyatakan isinya.

- **Baris 8:** cariIndeksNamaPengguna adalah function untuk mencari indeks nama pengguna dalam array. Nama function ini menjelaskan tindakan pencarian yang dilakukan.

