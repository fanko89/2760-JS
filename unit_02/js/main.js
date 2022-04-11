//https://developer.mozilla.org/en-US/docs/Web/API/Window

document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "Inspector Clouseau checking window and document"

function readDisplay() {
let windowSizes = `windows size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixles tall.`
let offSet = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top of the display.`
let pageUrl = `The URL for this page is ${window.location}`
let docName = `Document title is ${window.document.title}`
let docUpdate = `This document was last updated on ${document.lastModified}`

let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offSet}  \n ${pageUrl}`
let myDocument = document.querySelector('#myDocument').innerText = `${docName} \n ${docUpdate}`
}
readDisplay()