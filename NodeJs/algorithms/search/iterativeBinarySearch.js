function iterativeBinarySearch(array,searchValue){

    var start = 0;
    var end = array.length;
     while(start<end){
         var midpoint = Math.floor((start+end)/2);
         if(array[midpoint] == searchValue){
             return midpoint;
         }else if(array[midpoint]<searchValue){
             start = midpoint+1;
         }else{
             end = midpoint;
         }
     }
     return -1;
}

var arr = [1,2,3,4,5,6];

console.log(iterativeBinarySearch(arr,6));
console.log(iterativeBinarySearch(arr,0));