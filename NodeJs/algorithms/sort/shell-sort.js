
function shellSort(array) {
    console.log(Math.floor(array.length/2))
    for(var gap = Math.floor(array.length/2);gap >0 ;gap = Math.floor(gap/2)){
        console.log("gap ",gap);
        for(var i = gap; i<array.length;i++){
            var newElement = array[i];
            var j = i;
            while(j>=gap && array[j-gap]>newElement){
                array[j] = array[j-gap];
                j = j-gap;
            }
            array[j] = newElement;
            console.log("array ",array);
        } 
    }
    return array;
}


var arr = [11, 1, 4, -1, 2, -1,10];
             




console.log("before sort", arr);
var sortedArray = shellSort(arr);
console.log("sorted array ", sortedArray);                  