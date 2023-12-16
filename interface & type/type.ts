type Pengguna = {
  nama: string;
  umur: number;
  pekerjaan?: string;
};

function sambutPengguna(user: Pengguna): void {
  console.log(`Halo, ${user.nama}!`);
  console.log(`Umur: ${user.umur}`);

  if (user.pekerjaan !== undefined) {
      console.log(`Pekerjaan: ${user.pekerjaan}`);
  } else {
      console.log("Pekerjaan belum diisi.");
  }
}

const pengguna1: Pengguna = {
  nama: "John Doe",
  umur: 25,
  pekerjaan: "Developer",
};

sambutPengguna(pengguna1);

const pengguna2: Pengguna = {
  nama: "Jane Doe",
  umur: 30,
};

sambutPengguna(pengguna2);

export {};