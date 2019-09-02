
function linearSearch(array,searchValue){
    for(var i= 0;i<array.length ;i++){
        if(array[i] == searchValue){
            return i;
        };
    }
    return -1;
}

var arr = [-5, 1, 4, -1, 2, -1];

console.log(linearSearch(arr,4));
console.log(linearSearch(arr,0));