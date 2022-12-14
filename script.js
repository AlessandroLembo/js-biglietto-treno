console.log( " JS OK ");

/*
TRACCIA
Prezzo del biglietto del treno.

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


ANALISI
1 - Prendere l'elemento dalla pagina.
2 - Creare una variabile per il prezzo del biglietto per chilometro. 
3 - Chiedere all'utente quanti chilometri vuole percorrere e salvare la risposta nella variabile. 
4 - Chiedere all'utente la sua età e salvare la risposta nella variabile.
5 - Calcolare il prezzo del bioglietto in base ai chilometri (0.21 € al Km).
6 - In base all'età verficare se l'utente ha diritto a uno sconto:
    -- l'utente ha un'età compresa tra i 19 e i 64 anni: nessuno sconto.
    -- l'utente ha un'età minore o uguale ai 18 anni: calcola lo sconto del 20%.
    -- l'utente ha un'età maggiore o uguale a 65 anni: calcola lo sconto del 40%.
7 - Stampare il prezzo totale del viaggio.
*/

// SVOGLIMENTO
// 1 - Prendere l'elemento dalla pagina
const priceTicket = document.getElementById("price");
console.log(priceTicket);

// 2 - Creare una variabile per il prezzo del biglietto per chilometro.
const unitPrice = 0.21;

// 3 - Chiedere all'utente quanti chilometri vuole percorrere e salvare la risposta nella variabile. 
const distance = parseInt(prompt("Quanti chilometri devi percorrere?", 150).trim());

if (isNaN(distance)){
    alert("devi inserire solo valori numerici interi")
} else {
    console.log(`la distanza da percorrere è di ${distance} km`)
    
    // 4 - Chiedere all'utente la sua età e salvare la risposta nella variabile.
    const userAge = parseInt(prompt("Quanti anni hai?", 30).trim())
   
    if (isNaN(userAge)){
        alert("inserisci la tua età correttamente")
    } else {
        console.log(`la tua età è ${userAge} anni`)
    
        // 5 - Calcolare il prezzo del bioglietto in base ai chilometri (0.21 € al Km).
        const grossPrice = (unitPrice * distance).toFixed(2);
        //// console.log("il prezzo lordo è:" + ' ' + "£" + grossPrice);
        console.log(`il prezzo lordo è £ ${grossPrice}`)
    
        /* 6e7 - In base all'età verficare se l'utente ha diritto a uno sconto.
               - Stampare il prezzo totale del viaggio. */
        if (userAge > 18 && userAge < 65) {
            console.log(`Il prezzo da pagare è £ ${grossPrice}`)
            priceTicket.innerText = (`Il prezzo da pagare è £ ${grossPrice}`)
        } else if (userAge < 19){
            const youngPrice = ((grossPrice / 100) * 80).toFixed(2);
            console.log(`Il prezzo per i minorenni è di ${youngPrice}`)
    
            priceTicket.innerText = (`Il prezzo per i minorenni è di £ ${youngPrice}`)
        } else {
            const oldPrice = ((grossPrice / 100) * 60).toFixed(2);
            console.log(`Il prezzo per gli over 65 è di ${oldPrice}`)
            priceTicket.innerText = (`Il prezzo per gli over 65 è di £ ${oldPrice}`)
        }

    }

}
