//header text
document.querySelector('header > h1').innerText = "Capstone Project"


//username
let userName= prompt("what is your name?")
//let message = "hello " + userName + ", welcome to the best logging in Utah!"
let message = `Hello ${userName}, Please take a look at my work`
document.querySelector('#greeting').innerText = message



//json file

//async await function for fetching data 
async function getShoppingData(){
    try{
     const response = await fetch('data.json')
     return await response.json() // build-in function that returns the JSON object   
    } catch (error) {
        console.error(error)
    }
}
//gives access to the shopping data
let shopData = {}
getShoppingData().then(data => shopData = data)


document.querySelector("#clothes").addEventListener("click", shoppingInfo)
document.querySelector("#food").addEventListener("click", shoppingInfo)


    
//event is the ckick event
function shoppingInfo(event) {
    let shoppingChoice = shopData.shopping.find(shop => {
        return event.target.id === shop.name.toLowerCase()
    })

document.querySelector("#shoppingName").textContent = `${shoppingChoice.name} list`
document.querySelector("#item1").textContent = shoppingChoice.item1
document.querySelector("#item2").textContent = shoppingChoice.item2
document.querySelector("#item3").textContent = shoppingChoice.item3
}







// append to a list
document.querySelector("#appendLine").addEventListener("click", append)
let clickCount = 1

function append() { 
    
    let createEl = document.createElement('li')
    docText = `${clickCount} item appended `
    document.getElementById("append").appendChild(createEl).textContent = docText 
    clickCount ++
    console.log(clickCount)

    
}



//if else statement
    
document.querySelector("#elseIf").addEventListener("click", ElseifTest)
numb = 1
function ElseifTest(){

    if (numb === 1){
 
        document.querySelector("#ifStatement p#if").innerHTML=`You clicked ${numb} times. Just one more click away :|`
        numb++
      
    }
    else if (numb === 2) {
        document.querySelector("#ifStatement p#if").innerHTML=`You clicked ${numb} times! <strong>Great job</strong> :)`
        numb++
     

    }
    else{
        document.querySelector("#ifStatement p#if").innerHTML=`You clicked ${numb} times. Please refresh the page to restart :(`
        numb++
    }
}

