const doPromises = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('This is an error')
    },2000);
});

doPromises.then((data)=>{
    console.log("got",data);
}).catch((err)=>{
    console.log('error occured',err);
})