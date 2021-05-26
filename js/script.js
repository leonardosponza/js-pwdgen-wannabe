var testo = prompt ('inserisci il nome');
console.log(testo);
var cognome = prompt('inserisci cognome');
console.log(cognome);
var color = prompt('inserisci colore preferito');
console.log(color);
document.getElementById('testo').innerHTML =  testo + cognome + color + '21';