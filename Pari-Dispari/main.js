/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari 
(usando una funzione) Dichiariamo chi ha vinto. */


//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
/*
-costante
-prompt
*/
const buttonEl = document.getElementById('play');
buttonEl.addEventListener('click', function () {

    const userPariDispari = document.getElementById('true_false_selector').value;
    console.log('hai scelto', userPariDispari);
    const userNumber = Number(document.getElementById('number_selector').value);
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

    //Dichiariamo chi ha vinto.
    //il giocatore ha vinto se (il suo numero è pari) e (è pari anche la somma dei numeri) oppure (la sua scelta è dispari) e (la somma dei numeri è dispari)
    //( usernumber == 'pari' && evenOdd(numbersSum) ) || ( )
    if (userPariDispari == 'pari' && evenOdd(numbersSum) || userPariDispari == 'dispari' && evenOdd(numbersSum) == false) {
        console.log('la tua scelta è', userPariDispari, 'quindi hai vinto');
    } else {
        console.log('la tua scelta è', userPariDispari, ',mi dispiace, hai perso');
    }


})
