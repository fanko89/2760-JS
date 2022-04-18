function tellStory() {
    nString = document.querySelector('#noun').value.toLowerCase()
    aString = document.querySelector('#adjectives').value.toLowerCase()
    vString = document.querySelector('#verbs').value.toLowerCase()

    const nounArray = nString.split(/\s+/g)
    const adjArray = aString.split(/\s+/g)
    const verbArray = vString.split(/\s+/g)


const myStory = `Once upon a time there were 3 <strong>${nounArray[0]}s</strong> named Kit, Kyle, and Sam. They <strong>${verbArray[0]}</strong> to <strong>${nounArray[1]}</strong> everyday to see if there were <strong>${nounArray[2]}</strong>, but never <strong>${adjArray[0]}</strong> what they needed. One day after <strong>${nounArray[3]}</strong>, they <strong>${adjArray[1]}</strong> a new <strong>${nounArray[4]}</strong> before their parents found out. Never did they believe it would happen to them. Kit was the first to take the <strong>${nounArray[5]}</strong> home and <strong>${verbArray[1]}</strong> all the way to her house. Sam and Kyle never got to take the <strong>${nounArray[6]}</strong> home with them.`

//get a reference to the querSelector('#story') = myStory
let sResults = document.querySelector('#story')
sResults.innerHTML = myStory
}