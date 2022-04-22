
function duplicateMenu() {
//get all the anchor elenments from the tip menu
let topList = document.querySelectorAll('ul#primaryNavigation li a')

// ceate the new list items for the bottom of the page
let newList = document.createElement('ul')

topList.forEach(menuItem => {
    let newLI = document.createElement('li')
    let newLink = document.createElement ('a')

    newLink.setAttribute('href', menuItem.getAttribute('href'))
    //'copy' the textContent from upper menu to new nemu
       // append children to make them appear in the DOM
    document.querySelector('#smallNavArea').appendChild(newList)
    newLI.appendChild(newLink)
    newList.appendChild(newLI)
    newLink.textContent = menuItem.innerText 


}) 
}

duplicateMenu()

