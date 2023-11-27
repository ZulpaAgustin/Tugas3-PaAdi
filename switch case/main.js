let belanja = parseInt(prompt("Masukan Total Belanja : "));
let diskon = 0;

document.write(`Anda Belanja Sebanyak : ${belanja}`);

switch (true) {
  case belanja < 100000:
    document.write("Anda Tidak Mendapatkan Diskon");
    break;

  case belanja >= 100000 && belanja < 200000:
    diskon = (belanja * 10) / 100;
    document.write(`Anda Mendapatkan Diskon Sebanyak 10% Dan Total Bayar : ${belanja - diskon}`);
    break;

  case belanja > 200000:
    diskon = (belanja * 25) / 100;
    document.write(`Anda Mendapatkan DIskon Sebanyak 25% dan Total Bayar : ${belanja - diskon}`);
    break;
}
