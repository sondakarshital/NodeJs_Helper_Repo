
function recursion(num){

    if(num==0){
        return 1;
    }
    console.log("num ",num);
    return 2 *recursion(num-1);
};

console.log(recursion(4));