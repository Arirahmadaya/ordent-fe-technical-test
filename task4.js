function generateAcronym(name) {
  // memisahkan string berdasarkan spasi
  let parts = name.split(" ");
  //menampung hasil akronim
  let acronym = "";

  // memisahkan nama depan yang memiliki tanda "-", Ex, "Jan-Erich" -> ["Jan", "Erich"]
  let firstNameParts = parts[0].split("-");
  for (let part of firstNameParts) {
    // Ambil huruf pertama dari setiap bagian nama depan dan ubah ke huruf besar
    // Tambahkan ke variabel acronym
    acronym += part[0].toUpperCase();
  }

  // memisahkan nama belakang yang memiliki tanda "-", Ex, "Martin von Lahnstein-Meyer" -> ["Martin", "von", "lahnstein", "Meyer"]
  let lastNameParts = parts.slice(1);

  for (let part of lastNameParts) {
    // Jika bagian dari nama belakang adalah "von" || "Von"
    if (part === "von" || part === "Von") {
      // Maka Tambahkan "v"
    } else {
      // Jika bukan, proses setiap bagian nama belakang. dan jika bagian ini memiliki tanda "-", Ex, "lahnstein-meyer" -> ["lahnstein", "meyer"]
      let subParts = part.split("-");
      for (let subPart of subParts) {
        // Ambil huruf pertama dari setiap bagian nama belakang dan ubah ke huruf besar
        acronym += subPart[0].toUpperCase();
      }
    }
  }

  // Mengembalikan hasil
  return acronym;
}

console.log(generateAcronym("Thomas Meyer"));
console.log(generateAcronym("mARtIn schMIDT"));
console.log(generateAcronym("Jan-Erich Schmidt"));
console.log(generateAcronym("Paul Meyer-Schmidt"));
console.log(generateAcronym("Paul Von Lahnstein"));
console.log(generateAcronym("Martin von Lahnstein-Meyer"));
