//header text
document.querySelector('header > h1').innerText = "Pizza Emporium"
document.querySelector('header > h2').innerText = "Literal Objects"


let message

const pizza ={
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza:function (){
        message=`Baking a ${pizza.size} pizza on a ${pizza.crust} curst with a ${pizza.topping} topping and cheese just for you.`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        let flour = 1
        if(pizza.crust === 'thick') flour *= 2
        if(pizza.size === 'large') flour *= 2
        // do same for large
        message = `you will need to purchase ${flour} cups of flour and 1 lb of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message
    }

}
//PIZZA CRUST
//slow
let thinButton = document.querySelector('#thin')
thinButton.addEventListener('click', function(){
    return pizza.crust ='thin'
})
//quick way
document.querySelector('#thick').addEventListener('click',() => pizza.crust = 'thick' )

//PIZZA TOPPING
document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

//PIZZA SIZE
document.querySelector('#small').addEventListener('click',() => pizza.size ='small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

//BUILDING BUTTON
//build button being invoked and calling the buildPizza function
document.querySelector('#build').addEventListener('click', pizza.buildPizza)

//SHOPPING BUTTON
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)


