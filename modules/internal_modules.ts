namespace Matematika {
  export class Kalkulator {
      tambah(a: number, b: number): number {
          return a + b;
      }
  }

  export function kali(a: number, b: number): number {
      return a * b;
  }
}

const kalkulator = new Matematika.Kalkulator();
console.log(kalkulator.tambah(2, 3));

console.log(Matematika.kali(4, 5));
