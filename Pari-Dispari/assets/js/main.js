/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari 
(usando una funzione) Dichiariamo chi ha vinto. */


//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
/*
-costante
-prompt
*/

//ho ripreso il codice per dare possibilità reimpostate all'utente
const buttonEl = document.getElementById('play');

//il programma parte solo al click
buttonEl.addEventListener('click', function () {

    //richiamo i dati dscelti dall'utente attraverso i tag select
    const userPariDispari = document.getElementById('true_false_selector').value;

    const resultBoxEl = document.querySelector('.results_box');

    //console.log('hai scelto', userPariDispari);
    const userNumber = Number(document.getElementById('number_selector').value);
    //console.log(userNumber, 'è il numero che hai scelto');

    //Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    //-Math.random
    function randomNumberGenerator(min, max) {

        return Math.floor(Math.random() * (max - min)) + min;

    }

    const randomNumberPC = randomNumberGenerator(1, 5);
    //console.log(randomNumberPC, 'è il numero del PC');
    h3Generator = `<h3>${randomNumberPC} è il numero generato dal Pc</h3>`;
    resultBoxEl.insertAdjacentHTML('beforeend', h3Generator);

    //Sommiamo i due numeri 
    const numbersSum = userNumber + randomNumberPC;
    //console.log(numbersSum, 'è la somma dei due numeri');

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
        //console.log('la somma dei numeri è pari');
        h3sum = `<h3>la somma dei due numeri è pari: ${numbersSum}</h3>`;
        resultBoxEl.insertAdjacentHTML('beforeend', h3sum);
    } else {
        //console.log('la somma dei numeri è dispari');
        h3sum = `<h3>la somma dei due numeri è dispari: ${numbersSum}</h3>`;
        resultBoxEl.insertAdjacentHTML('beforeend', h3sum);
    }


    //Dichiariamo chi ha vinto.
    //il giocatore ha vinto se (il suo numero è pari) e (è pari anche la somma dei numeri) oppure (la sua scelta è dispari) e (la somma dei numeri è dispari)
    //( usernumber == 'pari' && evenOdd(numbersSum) ) || ( )
    if (userPariDispari == 'pari' && evenOdd(numbersSum) || userPariDispari == 'dispari' && evenOdd(numbersSum) == false) {
        //console.log('la tua scelta è', userPariDispari, 'quindi hai vinto');
        h3Result = `<h2>la tua scelta è ${userPariDispari} , quindi hai vinto</h2>`;
        resultBoxEl.insertAdjacentHTML('beforeend', h3Result);

    } else {
        //console.log('la tua scelta è', userPariDispari, ',mi dispiace, hai perso');
        h3Result = `<h2>la tua scelta è ${userPariDispari} , mi dispiace, hai perso</h2>`;
        resultBoxEl.insertAdjacentHTML('beforeend', h3Result);
    }


})
