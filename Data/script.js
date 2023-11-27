// execution content, hoisting dan scope


var nama = 'zulpa';
console.log(nama);

var nama = 'zulpa';
var username = '@pplg4';

function cetakURL(){
    var instragamURL = 'hhtps/instagram';
    return instragamURL + username;
}
console.log(cetakURL('@zulpa'));
console.log(username);