function identitas<T>(arg: T): T {
  return arg;
}

const hasilString: string = identitas<string>("Hello, Generics!");

const hasilAngka: number = identitas(42);

interface Pasangan<T, U> {
  nilai1: T;
  nilai2: U;
}

const pasangan: Pasangan<string, number> = {
  nilai1: "Satu",
  nilai2: 2,
};

class Kotak<T> {
  nilai: T;

  constructor(nilai: T) {
      this.nilai = nilai;
  }
}

const kotakBoolean = new Kotak<boolean>(true);

const kotakString = new Kotak("Halo, Generics!");

function panjangArray<T extends { length: number }>(arg: T): number {
  return arg.length;
}

const panjang: number = panjangArray([1, 2, 3]);

const panjangString: number = panjangArray("Hello");
