document.addEventListener('DOMContentLoaded', function() {
    const namaArray = ['Zulpa', 'Melani', 'Wulan', 'Husni', 'Agistina'];
    const namaList = document.getElementById('namaList');
    namaArray.forEach(function(nama) {
        const li = document.createElement('li');
        li.textContent = nama;
        namaList.appendChild(li);
    });
});


function redirectToAnotherPage() {
    window.location.href = 'hal_nama.html';
}
