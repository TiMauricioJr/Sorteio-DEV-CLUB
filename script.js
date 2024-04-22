
///// Função pra pegar um numero aleatório está dentro da função de contagem regressiva

///// Função para contagem regressiva 

const countDownElement = document.querySelector(".countdown")
let seconds = 4;
const popup = document.querySelector(".popup-wrapper")
const closePopUp = document.querySelector(".popup-close")
const contentInput1 = document.querySelector(".primeiro-input")
const contentInput2 = document.querySelector(".segundo-input")

function countDown(){
    //Clique do popup
       
    //Contruindo o calculo pra pegar um numero inteiro aleatório
    const min = Math.ceil (document.querySelector(".primeiro-input").value)
    const max = Math.floor (document.querySelector(".segundo-input").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    //
    
    //colcoando o JS para mudar o display do popup no CSS
    popup.style.display = "block"
    //

    // Construindo a função de countdown
    let contagemOnScreen
    if (contentInput1.value === contentInput2.value) {

        countDownElement.textContent = "Resultado inválido! " + "por favor, não digite valores iguais"
        countDownElement.style.fontSize = "30px"
        countDownElement.style.color = "red"
    }else if (seconds > 1){
        countDownElement
        countDownElement.style.color = "red"
        countDownElement.style.fontSize = "50px"
        seconds--
        contagemOnScreen = countDownElement.textContent = seconds + " "
        console.log(seconds)
        setTimeout(countDown, 1000)
    }else{
        countDownElement.textContent =  "-> " + result + " <-"
        countDownElement.style.color = "white"
        countDownElement.style.fontSize = "90px"
        console.log(countDownElement)
        seconds = 4
    }
   
    
} 

function closeButtonPopUp(){
    popup.style.display = "none"
}


