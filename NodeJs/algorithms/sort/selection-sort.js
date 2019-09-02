function swap(arr,left,right){
    var temp;
    if(left==right) return;
    if(arr[left]>arr[right]){
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    return arr;
}

function selectionSort(array){
    for(var unsortedIndex = array.length-1 ;unsortedIndex >0 ; unsortedIndex--){
        var largest = 0;
        for(var i = 1 ;i<=unsortedIndex ;i++){
            if(array[i]>array[largest]){
                largest  = i;
            }
        }
        swap(array,largest,unsortedIndex);
    }
    return array;
}


var arr = [85,36,34,109,49,36];
console.log("before sort",arr);
var sortedArray = selectionSort(arr);
console.log("sorted array ",sortedArray);