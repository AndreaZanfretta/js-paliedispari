/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

let userNum = document.getElementById("num").value;
let button = document.getElementById("btn");

button.addEventListener("click", Gioco);

function Gioco(){
    let userNum = parseInt(document.getElementById("num").value);
    let pcNum = random();
    console.log(pcNum);
    if(userNum > 5 || userNum < 0 || isNaN(userNum) ){
        alert("Inserisci un valore compreso tra 1 e 5");
    }else{
        sommaNum = sommaNumeri(userNum, pcNum);
        console.log(sommaNum)
    }
    console.log(check())
    if(check() == null){
        alert("seleziona un opzione corretta");
        return;
    }
    if(check() === true){
        let pari = true;
        let dispari = false;
        pariDispari(sommaNum, pari, dispari);
    } else{
        let pari = false;
        let dispari = true;
        pariDispari(sommaNum, pari, dispari);
    }
}

function check(){
    let userPari = document.getElementById("pari");
    let userDispari = document.getElementById("dispari");
    if(userPari.checked && userDispari.checked || userPari.unchecked && userDispari.unchecked ){
        return null;
    }
    if(userPari.checked){
        userPari = true;
        return userPari;
    }
    if(userDispari.checked){
        userPari = false;
        return userPari;
    }
    let pcRandom = random();
    console.log(pcRandom)
}

function random(){
   let pcRandom = Math.floor((Math.random() * 5) + 1);
   return pcRandom;
}

function sommaNumeri(num1, num2){
    let risultato = num1 + num2;
    return risultato;
}

function pariDispari(num, pari, dispari){
    console.log(pari, dispari)
    if(num %2 === 0){
        if(pari){
            alert("Il numero è pari, HAI VINTO!")
        } else {
            alert("Il numero è pari, HAI PERSO!")
        }
    } else{
        if(dispari){
            alert("Il numero è dispari, HAI VINTO!")
        } else {
            alert("Il numero è dispari, HAI PERSO!")
        }
    }
    
}
