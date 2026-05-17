if(!Array.prototype.filter){
    Array.prototype.filter = function(callback){
        let result=[];
        for(let i=0;i<this.length;i++){
            if(callback(this[i],i,this)){
                result.push(this[i])
            }
        }
        return result;
    }
}

//more native like
if(!Array.prototype.filter){
    Array.prototype.filter = function(callback, thisArgs){
        let result=[];
        if(typeof callback !=="function"){
            throw new TypeError("Please provide a valid callback function")
        }
        for(let i=0;i<this.length;i++){
            if(i in this){
            if(callback.call(thisArgs, this[i],i,this)){
                result.push(this[i])
            }
        }
        }
        return result;
    }
}