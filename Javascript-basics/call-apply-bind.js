var obj = {
    num : 2
};

// var obj = {
//     num : 2,
//     addToThis : function(a,b,c){
//             return this.num+a+b+c;
//     }
// };

var addToThis = function(a,b,c){
    return this.num+a+b+c;
};
// console.log(obj.addToThis(1,2,3));
console.log(addToThis.call(obj,1,2,3));
console.log(addToThis.apply(obj,[1,2,3]));

var bound  = addToThis.bind(obj);

console.log('bound ',bound(1,2,3));