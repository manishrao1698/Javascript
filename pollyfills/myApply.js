Function.prototype.apply=function(context, args){
    context= context || globalThis;
    const fnKey = Symbol();
    context[fnKey]= this;
    let result;
    if (args == null){
        result = context[fnKey]();
    }
    else{
        if(!Array.isArray(args)){
            throw new TypeError("Pass args are array")
        }
        result=context[fnKey](...args);
    }
    delete context[fnKey];
    return result
}