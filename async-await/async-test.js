
//  async function add(a){
//      var result = new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             resolve(a);
//          },10000)
        
//      })
//     return result;
// };

//  add(100).then((data)=>{
//     console.log(data);
//  },(err)=>{

//  });

 async function f() {
    
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject("done!"), 1000)
      });
    
       await promise.then((data,err)=>{
        //console.log("data ",data);
        console.log("err",err);
      }); // wait till the promise resolves (*) 
    }
    
    f();