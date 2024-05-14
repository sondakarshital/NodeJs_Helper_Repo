// setTimeout(function(){
// console.log('hello')
// },2000);

// setInterval(()=>{
//     console.log('hello!!!')
// },2000);

function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 var t = setTimeout(printHello, 2000);
 
 // Now clear the timer

 setTimeout(()=>{
    clearTimeout(t);
 },1000)
 
