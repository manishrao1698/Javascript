function memoize(fn){
    let cache={}
    return function(...args){
        //let key = args.toString(); better to use stringyfy bcoz [1,2] and ["1","2"] will give same result for toString which is key collison
        let key= JSON.stringify(args)
        // if(cache[key]!==undefined){ better to check (key in object) bcoz what is function returns undefind value
        if(key in cache){
            return cache[key];
        }
        let result = fn(...args);
        cache[key]= result;
        return result
    }

}


//using map

function memoize(fn){
    let map = new Map()
    return function(...args){
        let key = args.toString();
        if(map.has(key)){
            return cache[key];
        }
        let result = fn(...args);
        map.set(key, result)
        return result
    }

}


//using weakmap
function memoize(fn){
    let map = new WeakMap()
    return function(...args){
        let key = args.toString();
        if(map.has(key)){
            return cache[key];
        }
        let result = fn(...args);
        map.set(key, result)
        return result
    }

}



// Use Map
// When:
// keys are primitives
// need iteration
// need size
// want stable cache

// Use WeakMap
// When:
// keys are objects
// temporary caching
// want automatic cleanup
// avoiding memory leaks is important
