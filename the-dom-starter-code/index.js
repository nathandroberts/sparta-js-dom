var listItems = ["Go out","Come back" , "Buy food" , "Eat food"];


function addListItem(value) {
  // var listInputForLoop = document.createElement('li');

  // createVar.innerHTML = 'test'
  loopFuntion()

}

// write append loop here
function loopFuntion() {
  for (var i = 0; i < listItems.length; i++) {
     var newListItem = document.createElement('li')
     newListItem.innerHTML = listItems[i];
     document.body.children[1].children[0].appendChild(newListItem);
     if (i % 2 === 0) {
       newListItem.classList.add('even')
     }
    }

}
//set class


}
// write the class loop here
console.log(document.body);
addListItem()
