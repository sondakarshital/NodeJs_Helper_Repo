
function insertionSort(array) {
    for (var firstUnsortedIndex = 1; firstUnsortedIndex < array.length; firstUnsortedIndex++) {

        var newElement = array[firstUnsortedIndex];
        var i;
        for (i = firstUnsortedIndex; i > 0 && array[i - 1] > newElement; i--) {
            array[i] = array[i - 1];
        }
        
        array[i] = newElement;
    }
    return array;
}


var arr = [-5, 1, 4, -1, 2, -1];




console.log("before sort", arr);
var sortedArray = insertionSort(arr);
console.log("sorted array ", sortedArray);                  