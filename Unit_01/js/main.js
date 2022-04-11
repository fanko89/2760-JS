//document.getElementById('company').innerHTML = "Joe's Bed and Breakfest"
document.querySelector('#company').innerText = "Joe's Bed and Breakfest"
document.querySelector('header > h2').innerText = "Love yor sleep and food"

let userName= prompt("what is your name?")
//let message = "hello " + userName + ", welcome to the best logging in Utah!"
let message = `Hello ${userName}, welcome to the best logging in Utah`
document.querySelector('#greeting').innerText = message