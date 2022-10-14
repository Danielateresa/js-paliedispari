/* Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

//guardo la documentazione
//chiedo la parola all'utente con prompt inserendola in una costante
//forse dovrei usare .split per separare la parola che ho schiesto all'utente
//dopo dovrei creare un array delle singole lettere della parola (?)
//con .reverse dovrei poter invertire l'ordine degli elementi dell'array
//In qualche modo dovrei rimettere insiee gli elementi (in una costante?) per formare una stringa
//paragonare la nuova costante con la parola immessa dall'utente
//inserire if/else in una funzione

//chiedo la parola all'utente
let userWord = prompt('inserisci una parola');


//separo le parole con .plit()
//con gli apici vuoti la parola verrà scomposta in lettere formando un array
splittedWord = userWord.split('');
//console.log(splittedWord);

//inverto l'ordine dell'array provando .reverse() inserendo in una costante (è un array)
const reversedSplittedWord = splittedWord.reverse();
//console.log(reversedSplittedWord);

//per riunire le lettere posso usare .join('') la stringa vuota 
joinedWord = reversedSplittedWord.join('');
//console.log(joinedWord);

//confrontare la parola utente con la parola palindroma
if (userWord == joinedWord) {
    console.log('la parola che hai scelto è palindroma');
} else {
    console.log('la parola che hai scelto NON è palindroma');
}