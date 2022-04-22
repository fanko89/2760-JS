//header text
document.querySelector('header > h1').innerText = "Grant's Tomb"
document.querySelector('header > h2').innerText = "Literal Objects"

const question = {
    stem: "who is buried in grant's tomb?",
    option1: "Tom",
    option2: "Grant",
    option3: "Larry",
    option4: "Jake",
    correct: 2,
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        document.querySelector('#answer1').textContent = question.option1
        document.querySelector('#answer2').textContent = question.option2
        document.querySelector('#answer3').textContent = question.option3
        document.querySelector('#answer4').textContent = question.option4
        // dispay the question options here
    },
    check: (userChoice) => {
        if (userChoice === question.correct){
            document.querySelector(".feedback").textContent = "you are correct!"
        }
        else {document.querySelector(".feedback"). textContent = "please try again"}
        }
            //else
        }

document.querySelector('#answer1').addEventListener('click', () =>{question.check(1)})
document.querySelector('#answer2').addEventListener('click', () =>{question.check(2)})
document.querySelector('#answer3').addEventListener('click', () =>{question.check(3)})
document.querySelector('#answer4').addEventListener('click', () =>{question.check(4)})

question.display()