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
2 - Chiedere all'utente quanti chilometri vuole percorrere e salvare la risposta nella variabile. 
3 - Calcolare il prezzo del bioglietto in base ai chilometri (0.21 € al Km).
4 - Chiedere all'utente la sua età e salvare la risposta nella variabile.
5 - In base all'età verficare se l'utente ha diritto a uno sconto:
    -- l'utente ha un'età compresa tra i 19 e i 64 anni: nessuno sconto.
    -- l'utente ha un'età minore o uguale ai 18 anni: calcola lo sconto del 20%.
    -- l'utente ha un'età maggiore o uguale a 65 anni: calcola lo sconto del 40%.
6 - Stampare il prezzo totale del viaggio.
*/