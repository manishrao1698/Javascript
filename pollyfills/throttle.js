function throttle(fn, delay){
     let canRun = true
     return function(...args){
        if(!canRun) return;
        canRun = false;
        fn.apply(this, ...args)
        setTimeout(()=>{
            canRun= true;
        },delay)
     }
     }