const emailArr = ['juni4@gmail.com', 'junaid4567@gmail.com', 'juni1@gmail.com', 'juni1@yahoo.com', 'juni2@yahoo.com', 'juni3@yahoo.com', 'juni2@rocketmail.com', 'juni3@rocketmail.com', 'juni1@rocketmail.com', 'juni2@ymail.com', 'juni3@ymail.com', 'juni1@ymail.com'];

const userEmail = document.getElementById("#user_email");

const btnCheck = document.getElementById("#btn_check");

btnCheck.addEventListener("click", function(){    
    let found = false;
    
    for (let i = 0; i < emailArr.length; i++) {
        
        if(emailArr[i] == userEmail){
            found = true;
        }
    }
    
    if(found){
        console.log("Email trovata");
    }else{
        console.log("Email non trovata");
    }
})


// if(userEmail == emailArr){
//     console.log("Email trovata");
// }else{
//     console.log("Email non trovata");
// }


/*

- chiedere email all'utente
- controllare ogni email nell'array
    - se trovo email a cui sono arrivato == a quella dell'utente me lo segno
- se dove mi sono segnato l'informazione di prima c'è scritto che la mail è stata trovata
    - lo scrivo
    - altrimenti scrivo il contrario

*/