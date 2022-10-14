/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari 
(usando una funzione) Dichiariamo chi ha vinto. */


//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
/*
-costante
-prompt
*/

const userPariDispari = prompt('scegli tra pari e dispari');
console.log('hai scelto', userPariDispari);
const userNumber = Number(prompt('scegli un numero da 1 a 5'));
console.log(userNumber, 'è il numero che hai scelto');

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//-Math.random
function randomNumberGenerator(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}

const randomNumberPC = randomNumberGenerator(1, 5);
console.log(randomNumberPC, 'è il numero del PC');

//Sommiamo i due numeri 
const numbersSum = userNumber + randomNumberPC;
console.log(numbersSum, 'è la somma dei due numeri');

/*Stabiliamo se la somma dei due numeri è pari o dispari 
(usando una funzione)  
-if/else
*/
function evenOdd(numbers) {
    if (numbers % 2 == 0) {
        return true;//pari

    } else {
        return false;//dispari
    }
}

if (evenOdd(numbersSum)) {
    console.log('la somma dei due numeri è pari');

} else {
    console.log('la somma dei due numeri è dispari');
}


//Dichiariamo chi ha vinto.
if (userPariDispari == numbersSum) {
    console.log('la tua scelta è', userPariDispari, 'quindi hai vinto');
} else {
    console.log('la tua scelta è', userPariDispari, ',mi dispiace, hai perso');
}

