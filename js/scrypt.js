'strict mode'

// 1 definire l'elemento che contiene il valore


// 2 cicliamo i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
        console.log(i);
        let containerElement = document.querySelector("div.container");
        let containednumber = document.createElement("div");
        containednumber.classList.add('number');
        containednumber.append(i);
        containerElement.append(containednumber);

    // mettiamo le condizioni varie per inserire i fizz e i buzz

    if (i % 5 === 0 && i % 3 === 0) {
        containednumber.innerHTML = "fizzbuzz";

    } else if (i % 5 === 0) {
        containednumber.innerHTML = "buzz";
    
    } else if (i % 3 === 0 ) {
        containednumber.innerHTML = "fizz";
    }
}


