function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var grandNode = document.getElementById("grand-node").querySelectorAll('div')
  return grandNode[grandNode.length - 1]
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')

  var firstList = rankedLists[0]
  var secondList = rankedLists[1]

  for(var i = 0; i < rankedLists.length; i++) {
  	var currentList = rankedLists[i]
    for(var j = 0; j < currentList.children.length; j++) {
      var listElement = currentList.children[j].innerHTML
      var number = parseInt(listElement)
      number = number + n

      currentList.children[j].innerHTML = number.toString()
    }
  }
}
