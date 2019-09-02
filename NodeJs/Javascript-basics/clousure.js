var addTo = function(passed){
    var add =  function(inner,inner1){
        return passed+inner+inner1;
    }
    return add;
};

var add = addTo(3)(2,1);
console.log('add1 ',add);

// var add1 = add(2);
// console.log('add1 ',add1);
