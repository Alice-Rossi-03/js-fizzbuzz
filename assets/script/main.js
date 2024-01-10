// Scrivi un programma che stampi in console i numeri da 1 a 100
        // per i multipli di 3 stampi “Fizz” 
        // per i multipli di 5 stampi “Buzz”
        // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”


// BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.




// creating for-cycle
for (let i = 1; i <= 100; i++){

    if (((i % 3) === 0) && ((i % 5) === 0)){
        let divFizzBuzz = document.createElement("div");
        let divContainer = document.getElementById("container")
        divFizzBuzz.className = "fizz-buzz"
        divContainer.append(divFizzBuzz) 
        divFizzBuzz.innerHTML += 'FizzBuzz'
        // console.log('FizzBuzz')
    } else if ((i % 3) === 0){
        let divFizz = document.createElement("div");
        let divContainer = document.getElementById("container")
        divFizz.className = "fizz"
        divContainer.append(divFizz) 
        divFizz.innerHTML += 'Fizz'
        // console.log('Fizz')
    } else if ((i % 5) === 0){
        let divBuzz = document.createElement("div");
        let divContainer = document.getElementById("container")
        divBuzz.className = "buzz"
        divContainer.append(divBuzz) 
        divBuzz.innerHTML += 'Buzz'
        // console.log('Buzz')
    } else {
        let divNumber = document.createElement("div");
        let divContainer = document.getElementById("container")
        divNumber.className = "number"
        divContainer.append(divNumber)  
        divNumber.innerHTML += i 
        // console.log(i)
    }
}

