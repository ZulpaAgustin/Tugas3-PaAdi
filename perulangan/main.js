var poin = 0;
alert(`Point Sekarang Adalah ${poin}`);
var soal = prompt("1. 5 x 15 : ");

if (soal == 75) {
  alert(`Jawaban Kamu Benar dan Mendapatkan Point, Point Sekarang ${poin}`);
  var soal1 = prompt("2. Siapa Presiden Pertama Indonesia? ");
  if (soal1 == "Soekarno" || soal1 == "Bung Karno") {
    poin == 1;
    alert(`Jawaban Kamu Benar dan Mendapatkan Point, Point Sekarang ${poin}`);
    var soal2 = prompt("3. Bahasa Internasional Adalah ");
    if (soal2 == "Bahasa Inggris" || soal2 == "bahasa inggris") {
      poin == 1;
      alert(`Jawaban Kamu Benar dan Mendapatkan Point, Point Sekarang ${poin}`);
    } else {
      poin == 0;
      alert(`Jawaban Kamu Salah!, Pointmu Sekarang ${poin}`);
    }
  } else {
    poin == 0;
    alert(`Jawaban Kamu Salah!, Pointmu Sekarang ${poin}`);
    var soal2 = prompt("3. Bahasa Internasional Adalah ");
    if (soal2 == "Bahasa Inggris" || soal2 == "bahasa inggris") {
      poin == 1;
      alert(`Jawaban Kamu Benar dan Mendapatkan Point, Point Sekarang ${poin}`);
    }
  }
} else {
  poin == 0;
  alert(`Jawaban Kamu Salah!, Pointmu Sekarang ${poin}`);
  var soal1 = prompt("2. Siapa Presiden Pertama Indonesia? ");
  if (soal1 == "Soekarno" || soal1 == "Bung Karno") {
    poin == 1;
    alert(`Jawaban Kamu Benar dan Mendapatkan Point, Point Sekarang ${poin}`);
  }
}
