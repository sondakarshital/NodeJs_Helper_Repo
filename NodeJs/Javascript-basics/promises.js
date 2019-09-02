let cleanRoom = ()=>{
    return new Promise((resolve,reject)=>{
        resolve('Cleaned');
    })
};

let removeGarbage = (message)=>{
    return new Promise((resolve,reject)=>{
        resolve(message+' Remove garbage');
    })
};

let winIcecream = (message)=>{
    return new Promise((resolve,reject)=>{
        resolve(message+' Win icecream');
    })
};

// cleanRoom().then((message)=>{
//     return removeGarbage(message);
// }).then((message)=>{
//     return winIcecream(message);
// }).then((message)=>{
//     console.log('message ',message);
// });

//Excutes all promises
Promise.all([cleanRoom(),removeGarbage(),winIcecream()]).then((message)=>{
    console.log('all excuted',message);
})

//Promise get resolved when one of the promise get resolved
Promise.race([cleanRoom(),removeGarbage(),winIcecream()]).then((message)=>{
    console.log('all excuted',message);
})
