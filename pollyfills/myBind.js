Function.prototype.bind = function(context, ...args){
 context = context || globalThis;
 const fn= this;
  return function(...newArgs){
    return  fn.apply(context,[...args, ...newArgs])
  }
}