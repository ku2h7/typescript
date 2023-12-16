interface Hewan {
  nama: string;
  jenis: string;
}

interface Mamalia extends Hewan {
  jumlahKaki: number;
}

const kucing: Mamalia = {
  nama: "Meow",
  jenis: "Kucing",
  jumlahKaki: 4,
};

console.log(`${kucing.nama} adalah sejenis ${kucing.jenis} dan memiliki ${kucing.jumlahKaki} kaki.`);

interface Reptil extends Hewan {
  panjangEkor: number;
}

const ular: Reptil = {
  nama: "Slippy",
  jenis: "Ular",
  panjangEkor: 2,
};

console.log(`${ular.nama} adalah sejenis ${ular.jenis} dan memiliki ekor sepanjang ${ular.panjangEkor} meter.`);
