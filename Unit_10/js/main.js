//header text
document.querySelector('header > h1').innerText = "Hotel California"
document.querySelector('header > h2').innerText = "You can never leave"

//async await function for fetching data 
async function getHotelData(){
    try{
     const response = await fetch('hotel.json')
     return await response.json() // build-in function that returns the JSON object   
    } catch (error) {
        console.error(error)
    }
}
//gives access to the hotel data
let hotelData = {}
getHotelData().then(data => hotelData = data)

//let hotelSelect = document.querySelectorAll('a')
//hotelSelect.forEach(list => {
 // let item = document.createElement ('a')

document.querySelector("#marriott").addEventListener("click", hotelInfo)
document.querySelector("#sheraton").addEventListener("click", hotelInfo)
document.querySelector("#hilton").addEventListener("click", hotelInfo)

    
//event is the ckick event
function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })

document.querySelector("#hotelName").textContent = `${hotelChoice.name} hotel`
document.querySelector("#address").textContent = hotelChoice.address
document.querySelector("#rooms").textContent = hotelChoice.rooms
document.querySelector("#gym").textContent = hotelChoice.gym
document.querySelector("#type").textContent = hotelChoice.roomTypes
document.querySelector("#picture").src = hotelChoice.picture
}
