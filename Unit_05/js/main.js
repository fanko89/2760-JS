// Create an array with 4 trees listed
const trees =['oak','pine','aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayReuslts = document.querySelector('#displayResults')


errorElement.textContent = 'hello'

//display the list of trees inside the displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach (tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>` 
 }
 listTrees()

 //Add a redwood to the end the old way
 /*
 var addTreeStart = function() {
     trees.push("redwood")
     listTrees();
 };
 var readwood = document.getElementById('add_redwood');
 */

 //add a redwood to the end new way
 document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees()
}

 //add a pair to the start new way
 document.querySelector('#add_pear').onclick = () => {
    trees.unshift('pare')
    listTrees()
}

 //remove the first tree from the list
 document.querySelector('#remove_tree1').onclick = () => {
    trees.shift()
    listTrees()
}

 //remove from the second tree down
 document.querySelector('#remove_tree2').onclick = () => {
    trees.splice(1, 1);
    listTrees()
}

 //remove from the second tree down
 document.querySelector('#remove_treeLast').onclick = () => {
    trees.pop();
    listTrees()
}

 //sort the list of trees
 document.querySelector('#sortTrees').onclick = () => {
    trees.sort();
    listTrees()
}