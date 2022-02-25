// Genero numero a caso per utente 
// genero num random per pc
// confronto num utente e num pc
// --se num utente > num pc
    // -hai vinto
// --se num utente< num pc 
    // -haiperso

let mainContainer = document.querySelector(".main_container");



const btnDice = document.createElement("button");
btnDice.classList.add("btn_dice");
btnDice.innerHTML = ("Roll dice");
mainContainer.append(btnDice);

btnDice.addEventListener("click", function (){
    let randomNumberPc = Math.floor(Math.random() * 6) + 1;
    let randomNumberUser = Math.floor(Math.random() * 6) + 1; 
})

    
/*const boxRed = document.createElement("div");
boxRed.classList.add("box", "red");
boxRed.innerHTML = randomNumberPc;
mainContainer.append(boxRed);*/

const boxGreen = document.createElement("div");
boxGreen.classList.add("box", "green");
boxGreen.innerHTML = randomNumberUser;
mainContainer.append(boxGreen);



/*btnOpenMenu.addEventListener("click", function(){
    hiddenMenu.classList.add("active");
//     hiddenMenu.style.display = "block";
})*/

// let computerNumber = Math.floor(Math.random() * 6) +1;

// if( userNumber > computerNumber){
//     console.log("Hai vinto!");

// }else if ( userNumber < computerNumber){
//     console.log("Hai perso!");
// }







// const box = document.createElement("div");
// box.classList.add("box", "red");
// box.innerHTML = userNumber;
// mainContainer.append(box);

// const box = document.createElement("div");
// box.classList.add("box", "green");
// box.innerHTML = computerNumber;
// mainContainer.append(box);





/*for (let i = 1; i <= 100; i++) {

    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = i;

    if(i % 3 == 0 && i % 5 == 0){
        // itemContainer.innerHTML += `<div class="box blue">fizzbuzz</div>`;
        box.classList.add("blue")
        box.innerHTML = ("fizzbuzz");
    }else if (i % 5 == 0){
        // itemContainer.innerHTML += `<div class="box green">buzz</div>`;
        box.classList.add("green")
        box.innerHTML = ("buzz");
    }else if(i % 3 == 0){
        // itemContainer.innerHTML += `<div class="box red">fizz</div>`;
        box.classList.add("red")
        box.innerHTML = ("fiz");
    }

    itemContainer.append(box);
}*/