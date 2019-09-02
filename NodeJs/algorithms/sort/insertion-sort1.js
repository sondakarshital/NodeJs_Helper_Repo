
function insertionSort(array) {
    for (var firstUnsortedIndex = array.length-1; firstUnsortedIndex>=0 ; firstUnsortedIndex--) {
       console.log("firstUnsortedIndex ",firstUnsortedIndex,array);
        var newElement = array[firstUnsortedIndex];
        
        console.log('newElement',newElement)
        var i;
        for (i = firstUnsortedIndex; i >= 0 && array[i + 1] > newElement; ++i) {
            array[i] = array[i + 1]; 
        }
        console.log("newElement 111",newElement);
        array[i] = newElement;
    }
    return array;
}


var arr = [85,36,34,109,49,36];




console.log("before sort", arr);
var sortedArray = insertionSort(arr);
console.log("sorted array ", sortedArray);                  