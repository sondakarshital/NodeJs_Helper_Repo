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

function bubbleSort(array){
    for(var unsortedIndex = array.length-1 ;unsortedIndex >0 ; unsortedIndex--){
        for(var i = 0 ;i<unsortedIndex ;i++){
            if(array[i]>array[i+1]){
                swap(array,i,i+1);
            }
        }
    }
    return array;
}


var arr = [1,5,4,3,2,-1];
console.log("before sort",arr);
var sortedArray = bubbleSort(arr);
console.log("sorted array ",sortedArray);