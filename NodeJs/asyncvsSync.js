
//Asynchronous way of handling data
// var fs = require('fs');
// var data = fs.readFile('example1.js',function(err,data){
//     console.log('data',data);
//     console.log('err',err);
// })


//synchronous way of handling data
 var fs = require('fs');
 var data = fs.readFileSync('example1.js'); // blocks here until file is read
 console.log('data:::',data);
 console.log('data1')




