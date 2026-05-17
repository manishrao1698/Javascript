Function.prototype.call=function(context, ...args){
context = context || globalThis;
let fnKey= Symbol();
//assigig this (function on whoch call is called) as a temprorary function in obj on which call is called
// this is function like greet(), context is object like obj:{name:"xcfgh"}
context[fnKey]=this;
let result = context[fnKey](...args);

//delete the temp property from object
delete context[fnKey];
return result

}