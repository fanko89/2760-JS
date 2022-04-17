// Create an array with 4 trees listed
const trees =['oak','pine','aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayReuslts = document.querySelector('#displayResults')



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
     if(trees.length>0){
    trees.shift()
    listTrees()
     }else{errorElement.textContent ='no trees to remove!'}
}

 //remove from the second tree down
 document.querySelector('#remove_tree2').onclick = () => {
     if (trees.length >1){
    trees.splice(1, 1);
    listTrees()
     }else{errorElement.textContent ='no second trees to remove!'}
}

 //remove from the last tree down
 document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length >0){
    trees.pop();
    listTrees()
    }else{errorElement.textContent ='no last trees to remove!'}
}

 //sort the list of trees
 document.querySelector('#sortTrees').onclick = () => {
    trees.sort();
    listTrees()
}

 //lowercase the list of trees
 document.querySelector('#lowerTrees').onclick = () => {
        let lowerCas =[]
        lowerCas = trees.map(tree => tree.toLowerCase())
        trees.splice(0, lowerCas.length, ...lowerCas)
        listTrees()
    } 


 //name of tree number 3
 document.querySelector('#showName_3').onclick = () => {
    if (trees.length > 2) {
        errorElement.textContent = trees[2]
    } else {errorElement.textContent = 'no 3rd tree'}
 }

 //name of tree number 4
 document.querySelector('#showName_4').onclick = () => {
    if (trees.length > 3) {
        errorElement.textContent = trees[3]
    } else {errorElement.textContent = 'no 4th tree'}
 }