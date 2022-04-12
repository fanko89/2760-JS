function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }


function getMonthName(month) {
    let name 
    switch (month) {
        case 1:
            name= "january"
            break;
        case 2:
            name= "Febuary"
            break;
        case 3:
            name= "March"
            break;
        case 4:
            name= "April"
            break;
        case 5:
            name= "May"
            break;
        case 6:    
            name= "June"
            break;
        case 7:
            name= "July"
            break;
        case 8:
            name= "August"
            break;
        case 9:
            name= "September"
            break;
        case 10:
            name= "October"
            break;
        case 11:
            name= "November"
            break;
        case 12:
            name= "December"
            break;
        default:
            name= "not a month"
            break;
    }
return name
}

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message= 'You are going to have a baby!'
            break;
        case 2:
            message= 'You\'ll Find out that Donald Trump is your distant relative!'
            break;
        case 3:
            message= 'Something bad is going to happen to you!'
            break;
        case 4:
            message= 'You\'ll Get a million dollars from someone you do not know!'
            break;
        case 5:
            message= 'You\'re going to get a free lunch from a old friend!'
            break;
        case 6:
            message= 'Your live will have an epic change of events!'
            break;
        case 7:
            message= 'You\'re going to wake up with a six pack!'
            break;
        case 8:
            message= 'You\'re going to adopt a pet monkey!'
            break;
        case 9:
            message= 'Your birthday will suddenly be every month!'
            break;
        case 10:
            message= 'Your spouce will look 10 years younger overnight!'
            break;
        case 11:
            message= 'Nothing will change in your life rest of your days!'
            break;
        case 12:
            message= 'Someone will give you one of George W Bush\'s painting for free!'
            break;
        default:
            message= 'Error! Please try again.'
            break;
    }
    return message
}
let fate = getRandomIntInclusive(1, 12)
let day = getRandomIntInclusive(1, 30)
let month = getRandomIntInclusive(1,12)
let yourFate = getFortune(fate)
const monthName = getMonthName(month)


const fortuneRevealed = `On ${monthName} ${day}, ${yourFate}`

document.querySelector('#fortune').innerText = fortuneRevealed