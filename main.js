/*document.addEventListener('DOMContentLoaded', function() {
    const namaArray = ['Zulpa', 'Melani', 'Wulan', 'Husni', 'Agistina'];
    const list = document.getElementById('list');
    namaArray.forEach(function(nama) {
        const li = document.createElement('li');
        li.textContent = nama;
        list.appendChild(li);
    });
});*/

function validateForm() {
    var nama = document.getElementById('nama2').value;
    var password = document.getElementById('kunci').value;

    if (nama === 'Zulpa' && password === '12345678') {
        alert('Login berhasil!');
        loginSuccess = true;
        redirectToAnotherPage();
        
    } else {
        alert('Login gagal. Periksa kembali nama dan password.');
        
    }
}


function redirectToAnotherPage() {
if (loginSuccess) {
    window.location.href = 'hal_nama.html';
}
}

new gridjs.Grid({
      columns: ["Nama", "Kelas"],
      data: [
        ["Zulpa", "XI pplg 4"],
        ["Melani", "XI pplh 5"],
        ["Wulan", "XI pplg 6"],
        ["Husni", "XI pplg 7"],
        ["Agistina", "XI pplg 8"]
      ]
    }).render(document.getElementById("table"));
 