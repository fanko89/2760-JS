
document.querySelector('header > h1').innerText = "Guessing Game"
document.querySelector('header > h2').innerText = "Loops"


//pick a random number between 0 and 16
let correctNumber = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
let award = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess() {
    totalGuesses += 1
    gamerGuess = document.querySelector('#guess').value
    console.log(totalGuesses, gamerGuess)
    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber && award == 0) {
        console.log(`correct number!`)
        giveAward()
        feedback.innerText = 'you win!'
        award += 1
        
    }
 
        else if (gamerGuess > correctNumber && gamerGuess < 16) {
            feedback.innerText = 'too high, try again'    
        }
        else if (gamerGuess < correctNumber && gamerGuess > 0) {
            feedback.innerText = 'too low, try again'
        }
        else {
            feedback.innerText = 'number must \nbe between 1 and 15'
            totalGuesses -= 1
        }
        document.querySelector('#attempts').innerText = totalGuesses
    }

function giveAward() {
console.log('you did it!')
let imagePath ='#'
switch(totalGuesses) {
    case 1:
    case 2:
    case 3:
    imagePath = 'img/ribbonBlue.png'
    break;
    case 4:
    case 5:
    case 6:
        imagePath = 'img/ribbonRed.png'
    break;
    default:
        imagePath = 'img/ribbonYellow.png'
    break;
}

let award = 0
const awardImage = document.createElement('img') // creates a <img> element
awardImage.setAttribute('src', imagePath )
const ribbon = document.querySelector('#ribbon')
ribbon.appendChild(awardImage)
}