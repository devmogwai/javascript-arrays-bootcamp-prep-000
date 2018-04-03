function addElementToBeginningOfArray (array, element) {
  var newArray = array.unshift(element)
  console.log (newArray)
}
addElementToBeginningOfArray([1], "stuff")

// function destructivelyAddElementToBeginningOfArray (array, element) {
//   array = array.unshift(element)
//   return array
// }
// function addElementToEndOfArray (array, element) {
//   return array.push(element)
// }
// function destructivelyAddElementToEndOfArray (array, element) {
//   array = array.push(element)
//   return array
// }
// function accessElementInArray (array, index) {
  
// }