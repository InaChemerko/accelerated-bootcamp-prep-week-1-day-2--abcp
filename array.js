function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 var newArray = [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.unshift(element);
}

function addElementToEndOfArray(array, element) {
var newArray = [...array,element];
}

function destructivelyAddElementToEndOfArray(array, element) {
array.push(element);
}

function accessElementInArray(array, index) {
array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift();
}

function removeElementFromBeginningOfArray(array) {
}

function destructivelyRemoveElementFromEndOfArray(array) {

}

function removeElementFromEndOfArray(array) {

}
