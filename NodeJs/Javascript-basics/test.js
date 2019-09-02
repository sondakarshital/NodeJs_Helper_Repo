

var add = (function () {
    var counter = 0;
    return function () {
        counter += 1; 
        return counter
    }
  })();
// Call add() 3 times
console.log(add());
console.log(add());
console.log(add());