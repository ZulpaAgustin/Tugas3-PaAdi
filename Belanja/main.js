let Belanja = parseInt(prompt("Masukan Total Harga : "));

document.write(`Anda Belanja ${Belanja}`);
document.write(`\n`);

if (Belanja <= 100000) {
  document.write(`Anda Tidak Dapat Diskon`);
} else if (Belanja >= 100000 && Belanja < 200000) {
  let Diskon = (Belanja * 10) / 100;
  document.write(`Anda Mendapatkan Diskon 10%, Sehingga Total Menjadi ${Belanja - Diskon}`);
} else if (Belanja >= 200000) {
  let Diskon = (Belanja * 25) / 100;
  document.write(`Anda Mendapatkan Diskon 25%, Sehingga Total Menjadi ${Belanja - Diskon}`);
}
