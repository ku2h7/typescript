const panjangMaksimalNamaPengguna: number = 20;

function apakahNamaPenggunaValid(namaPengguna: string): boolean {
    return namaPengguna.length <= panjangMaksimalNamaPengguna;
}

enum StatusPengguna {
    Aktif = 'ACTIVE',
    NonAktif = 'INACTIVE',
}

function ubahStatusPengguna(namaPengguna: string, status: StatusPengguna): void {
    console.log(`Status pengguna ${namaPengguna} diubah menjadi ${status}`);
}

interface DataPengguna {
    nama: string;
    umur: number;
}

function cetakInfoPengguna(dataPengguna: DataPengguna): void {
    console.log(`Nama: ${dataPengguna.nama}, Umur: ${dataPengguna.umur}`);
}

const daftarNamaPengguna: string[] = ["John", "Jane", "Doe"];

function cariIndeksNamaPengguna(namaDicari: string): number {
    return daftarNamaPengguna.indexOf(namaDicari);
}
