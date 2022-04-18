function tellStory() {
    nString = document.querySelector('#noun').value.toLowerCase()
    aString = document.querySelector('#adjectives').value.toLowerCase()
    vString = document.querySelector('#verbs').value.toLowerCase()

    const nounArray = nString.split(/\s+/g)
    const adjArray = aString.split(/\s+/g)
    const verbArray = vString.split(/\s+/g)


const myStory = `Once upon a time there were 3 ${nounArray[0]}s named Kit, Kyle, and Sam. They ${verbArray[0]} to ${nounArray[1]} everyday to see if there were ${nounArray[2]}, but never ${adjArray[0]} what they needed. One day after ${nounArray[3]}, they ${adjArray[1]} a new ${nounArray[4]} before their parents found out. Never did they believe it would happen to them. Kit was the first to take the ${nounArray[5]} home and ${verbArray[1]} all the way to her house. Sam and Kyle never got to take the ${nounArray[6]} home with them.`

//get a reference to the querSelector('#story') = myStory
let sResults = document.querySelector('#story')
sResults.innerHTML = myStory
}