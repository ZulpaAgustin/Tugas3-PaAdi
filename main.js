document.addEventListener('DOMContentLoaded', function() {
    const namaArray = ['Zulpa', 'Melani', 'Wulan', 'Husni', 'Agistina'];
    const namaList = document.getElementById('namaList');
    namaArray.forEach(function(nama) {
        const li = document.createElement('li');
        li.textContent = nama;
        namaList.appendChild(li);
    });
});

function validateForm() {
    var nama = document.getElementById('nama2').value;
    var password = document.getElementById('kunci').value;

    // Validasi hanya jika username dan password sesuai
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
