var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(newKitten){
  kittens.push(newKitten)
}

function destructivelyPrependKitten(newKitten){
  kittens.unshift(newKitten)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(newKitten){
  return kittens.concat(newKitten)
  }

function prependKitten(newKitten){
  var newArray
  newArray = [newKitten, ...kittens]
  return newArray
}
