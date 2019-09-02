var addTo = function(passed){
    var add =  function(inner){
        return passed+inner;
    }
    return add;
};

var add = addTo(3);
console.log('add1 ',add);

var add1 = add(2);
console.log('add1 ',add1);



//Self invoking functions
(function(){
    console.log('Hey i am cool')
})();