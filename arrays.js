function addElementToBeginningOfArray (array, element) {
  newArray = array
  newArray.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  newArray = array
  newArray.push(element)
  return newArray
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

function accessElementInArray (array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
}
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
}