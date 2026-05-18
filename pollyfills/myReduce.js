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




if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback, initialValue) {
      // Step 1: Validate callback
      if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
      }
  
      const arr = this;
      const length = arr.length;
  
      // Step 2: Handle empty array with no initial value
      if (length === 0 && initialValue === undefined) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
  
      let accumulator;
      let startIndex;
  
      // Step 3: Set initial accumulator value
      if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
      } else {
        accumulator = arr[0];
        startIndex = 1;
      }
  
      // Step 4: Iterate through array
      for (let i = startIndex; i < length; i++) {
        // Skip empty slots in sparse arrays
        if (i in arr) {
          accumulator = callback(accumulator, arr[i], i, arr);
        }
      }
  
      return accumulator;
    };
  }