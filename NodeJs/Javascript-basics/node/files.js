var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log('data',data);

var data = fs.readFile('input.txt',(err,data)=>{
    console.log('async data',data);
});

console.log('Finished');
