


let player = {
    name:"Mike",
    chips:20000
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let playerEl = document.getElementById('player-el')

function getRandom(){
    let randomNumer =  Math.floor((Math.random() * 13) +1)
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }

}

function startGame(){
    isAlive = true
    let firstCard = getRandom()
    let secondCard = getRandom()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
   
    playerEl.textContent = `${player.name} : ${player.chips}$`
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += `${cards[i]} `
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandom()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}
