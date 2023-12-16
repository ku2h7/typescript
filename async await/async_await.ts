function ambilData(): Promise<string> {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Data berhasil diambil");
      }, 2000);
  });
}

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

main();
