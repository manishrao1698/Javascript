Array.prototype.reduce=function(callback, initialValue){
 let acc= initialValue;
 let index=0
 if(acc===undefined){

    if (this.length === 0) {
        throw new TypeError(
            "Reduce of empty array with no initial value"
        );
    }
    acc=this[0]
    index=1;
 }
 for(let i=index;i<this.length;i++){
    if(i in this){
    acc=callback(acc,this[i], i, this)
    }
 }
 return acc

}