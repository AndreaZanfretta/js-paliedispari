/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

let parola = prompt("Inserisci una parola e scopri se è palindroma!");

function palindromo(parola) {
    let lettere = parola.split("");
    let reverse = "";
    for(let i = lettere.length -1; i>= 0; i--){
        reverse += lettere[i];
    }
    if(parola === reverse){
        return alert("La parola è palindroma")
    } else {
        return alert("La parola non è palindroma")
    }
}
let palindroma = palindromo(parola);
console.log(palindroma)