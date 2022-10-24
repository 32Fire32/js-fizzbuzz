'strict mode'


// cicliamo i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
        console.log(i);
        // ora che abbiamo i valori selezioniamo il container e creiamo le caselle
        let containerElement = document.querySelector("div.container");
        let containednumber = document.createElement("div");
        // ora aggiungiamo la classe alle caselle create e ci appendiamo il numero ciclato
        containednumber.classList.add('number');
        containednumber.append(i);
        // al container selezionato ora appendiamo le caselle con il suo numero all'interno
        containerElement.append(containednumber);

    // mettiamo le condizioni varie per inserire i fizz e i buzz

    if (i % 5 === 0 && i % 3 === 0) {
        containednumber.innerHTML = "fizzbuzz";
        containednumber.classList.add("fizzbuzz");

    } else if (i % 5 === 0) {
        containednumber.innerHTML = "buzz";
        containednumber.classList.add("buzz");
    
    } else if (i % 3 === 0 ) {
        containednumber.innerHTML = "fizz";
        containednumber.classList.add ("fizz");
    }
}


