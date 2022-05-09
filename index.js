function selecWrongNum(userNum){
    const wrongNum = userNum < 0 || userNum > 10 || isNaN(userNum)
    if (wrongNum){
        alert('Numero incorrecto. Elija un numero del 0 al 10')
    }
}

function getRandomNum() {

    const randomNum = parseInt(Math.ceil((Math.random() * 10)+1));
    let userNum = parseInt(document.getElementById('usernumber').value)
    console.log(randomNum)

    for(let tries=0; tries<5; tries++){

        if(userNum == randomNum){
            document.getElementById('result').innerHTML = 
            `Enhorabuena, el número era ${randomNum} y has 
            necesitado ${tries + 1} intentos para acertar`
            break
        }
        if(tries==4){
            document.getElementById('result').innerHTML = `¡Has utilizado demasiados intentos! El número es ${randomNum}`
            break
        }
        if(userNum != randomNum){
            selecWrongNum(userNum)
            userNum = prompt("Lo siento, ese no es el numero. Vuelve a intentarlo")
        }
    }

   
    /* let userWin = false
    let tries = 0

    while(tries<5 && !userWin){

        if(userNum == randomNum){
            document.getElementById('result').innerHTML = 
            `Enhorabuena, el número era ${randomNum} y has 
            necesitado ${tries + 1} intentos para acertar`

            userWin = true
        }

        if(tries==4){
            document.getElementById('result').innerHTML = `¡Has utilizado demasiados intentos! El número es ${randomNum}`
            break
        }

        if(userNum != randomNum){
            selecWrongNum(userNum)
            userNum = prompt("Lo siento, ese no es el numero. Vuelve a intentarlo")
        }
        tries++
    } */
}
