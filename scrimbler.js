let myLeads = []

let inputEl = document.getElementById("input_el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input_btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click", function(){
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { 
    // })

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})


function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++){
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
      
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})











// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name, emoji) {
//     welcomeEl.textContent = `${greeting} ${name} ${emoji}`
// }

// greetUser("Howdy!", "Aluko Oluwaremilekun", "🍟")


// function add(num1, num2) {
//     return num1 + num2
// }

// console.log(add(3, 4))
// console.log(add(9, 102))


// function getFirst(arr) {
//     return arr[0]
// }

// console.log(getFirst(["BBC", "CNN", "Aljazeera", "Nigeria Info"]))

// const recipient = "James"
// const sender = "Remi"

// const email = `Hey 
// ${recipient}! 
// How is it going? 
// Cheers ${sender}`

// console.log(email)






// let buyBtn = document.getElementById("container")

// buyBtn.innerHTML = "<button onclick = 'buy()'>Buy!" + "</button>"

// function buy(){
//     buyBtn.innerHTML += "<p>Thank you for buying!</p>"
// }

















// let boxCtn = document.getElementById("box")

// boxCtn.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })






















// let count = 0 
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")

// function increment(){
//     count += 1
//     countEl.textContent = count
// }




// function save(){
//     let prevEntry = count + " - ";
//     saveEl.textContent += prevEntry
//     countEl.textContent = 0 
//     count = 0
// }


// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// let sumEl = document.getElementById("sum-el")

// function add() {
//     let sum = num1 + num2
//     sumEl.textContent = "Sum: " + sum
// }

// function subtract() {
//     let sum = num1 - num2
//     sumEl.textContent = "Sum: " + sum
// }

// function divide() {
//     let sum = num1 / num2
//     sumEl.textContent = "Sum: " + sum
// }

// function multiply() {
//     let sum = num1 * num2
//     sumEl.textContent = "Sum: " + sum
// }


// let player = {
//     name: "Remi",
//     chips: 145
// }
// let cards = []
// let sum = 0
// let hasBlackJack = false 
// let isAlive = false
// let msg = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")


// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips

// console.log(cards)

// function getRandomCard() {
//     let randomCard = Math.floor(Math.random() * 14) 
//     if (randomCard === 1){
//         return 11
//     }else if (randomCard > 10){
//         return 10
//     } else return randomCard
// }

// function startGame(){
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: " 
//     for (let i = 0; i < cards.length; i++){
//         cardsEl.textContent += cards[i] + " " 
//     }

//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20){
//         msg = "Do you want to draw a new card?"
//     } 
//     else if (sum === 21) {
//         msg = "You've got a Blackjack!"
//         hasBlackJack = true
//     }
//     else {
//         msg = "You're out of the game!"
//         isAlive = false
//     }
    
//     messageEl.textContent = msg
// }

// function newCard(){
//     if (isAlive === true && hasBlackJack === false) {
//         let newCard = getRandomCard()
//         sum += newCard
//         cards.push(newCard)
//         console.log(cards)
//         renderGame()

//     }
    
// }

// let age = 4

// if (age < 6) {
//     console.log("Free Ride")
// }
// else if (age < 18 ){
//     console.log("You get child discount")
// }
// else if (age < 27){
//     console.log("Student discount")
// }
// else if (age < 67) {
//     console.log("Full price")
// }else {
//     console.log("Senior citizen discount")
// }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// console.log("The 5 largest countries in the world:")
// for (i = 0; i < largeCountries.length; i++){
//     console.log("-" + largeCountries[i]) 
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// largeCountries.pop()
// largeCountries.shift()
// largeCountries.push("Pakistan")
// largeCountries.unshift("China")
// console.log(largeCountries)












// let fruit = ["🍎", "🍑", "🍎", "🍎", "🍑"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")


// function getfruits() {
//     for (let i = 0; i < fruit.length; i++) {
//         // console.log(fruit[i])

//         if (fruit[i] === "🍎") {
//             // console.log(fruit[i])
//             appleShelf.textContent += fruit[i]             
//         }
//         else {
//             orangeShelf.textContent += fruit[i]
//         }

//     }
// }
// getfruits()










// let hands = ["Rock", "Paper", "Scissors"]

// function randomHands() {
//     random = Math.floor(Math.random()*hands.length)
//     return hands[random]
// }

// console.log(randomHands())

















// let hands = ["rock", "paper", "scissors"]

// function rockPaperScissors() {
//     let getHands = Math.floor(Math.random(hands) * hands.length)
//     return hands[getHands]
// }


// console.log(rockPaperScissors())



// let person = {
//     name: "Remilekun",
//     age: 29,
//     country: "Nigeria"
// }

// function logData() {
//     return person.name + " is " + person.age + " years old and lives in " + person.country
// }

// console.log(logData())





// let castleLiting = {
//     description: "Private room in Galway",
//     title: "Live like a King in my castle",
//     price: 190, 
//     rating: 4.95,
//     isAvailable: true,
//     features: ["2 guests", "1 bedroom", "2 beds", "private half-bath"]
// }

// console.log(castleLiting.price)








// let course = {
//     title: "Learn CSS Grid for free",
//     creator: "Remi Aluko",
//     lessons: 16,
//     length: 63, 
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.tags)








// let likeDocumentaries = true 
// let likeStartups = true

// if (likeDocumentaries === likeStartups === true) {
//     recommendMovies()
// }

// function recommendMovies(){
//     console.log("Hey, check out this new film...")
// }
// let hasSolvedChallenge = false 
// let hasHintsLeft = false 

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }


// function showSolution() {
//     console.log("Showing the solution...")
// }


// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 7)
//     return randomNumber  
// }
// console.log(rollDice())


// let sentence = ["Hello", "my", "name", "is", "Remi"]
// let greetingEl = document.getElementById("greeting-el")


// for (let i = 0; i < sentence.length; i++) {
//     console.log(sentence[i])
//     greetingEl.textContent += sentence[i] + " "
// }














// let player1Time = 102 
// let player2Time = 102 

// function getFastestRaceTime(){
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time){
//         return player2Time
//     }else{
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()

// console.log(fastestRace)


// let raceTime1 = 100
// let raceTime2 = 200

// function totalRace(){
//     return raceTime1 + raceTime2
// }

// let totalRaceTime = totalRace()

// console.log(totalRaceTime)



// let messages = [
//     "Hey, how's it going?",
//     "I'm great. thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "Bye"
// ]


// for (let i = 0; i < messages.length; i++) {
//     // console.log(messages[i])
// }

// let cards = [7, 3, 9, 10]

// for (i = 0; i < cards.length; i += 1) {
//     console.log(cards[i])
// }






// let welcomeEl = document.getElementById("welcome-el")

// let name = "Remilekun"

// let greetings = "Welcome back"

// welcomeMessage = greetings + " " + name 

// welcomeEl.innerText = welcomeMessage

// newWelcomeMessage = welcomeMessage + " gher"

// welcomeEl.innerText = newWelcomeMessage
