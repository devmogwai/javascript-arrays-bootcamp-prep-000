function addElementToBeginningOfArray (array, element) {
  newArray = array
  newArray.unshift(element)
  return newArray
}
function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}
// function addElementToEndOfArray (array, element) {
//   return array.push(element)
// }
// function destructivelyAddElementToEndOfArray (array, element) {
//   array = array.push(element)
//   return array
// }
// function accessElementInArray (array, index) {
  
// }