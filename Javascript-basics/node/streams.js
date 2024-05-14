var fs = require('fs');
var data = '';
var readStream = fs.createReadStream('input.txt');
fs.stat("input.txt", (err, stats) => {
    this.fileSize = stats.size;
    this.counter = 1;

readStream.setEncoding('UTF8');

readStream.on('data',(chunk)=>{
    console.log('data',data);
    data+=chunk;
    let percentageCopied = ((chunk.length * this.counter) / this.fileSize) * 100;
   // process.stdout.clearLine();  // clear current text
    //process.stdout.cursorTo(0);
    process.stdout.write(`${Math.round(percentageCopied)}%`);
});

readStream.on('end',()=>{
    console.log('data',data);
    var writeStream = fs.createWriteStream('input1.txt');


    readStream.pipe(writeStream);
    
    writeStream.on('finish',()=>{
        console.log('finished writing');
    });
    
    writeStream.on('error',(err)=>{
        console.log('err',err)
    });
});

readStream.on('error',(err)=>{
    console.log('err',err)
});
});
var readStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('input1.txt');

readStream.pipe(writeStream);

console.log("Program Ended");




