//input 
const obj = {
  a: 1,
  b: {
    c: "hi",
    d: 3
  }
};
//output 
// {
//   "a": 1,
//   "b.d": 3
// }

function flat(obj, parent = "") {
    let outputObj = {};
  
    for (let key in obj) {
      const value = obj[key];
      const newKey = parent ? parent + "." + key : key;
  
      if (typeof value === "object" && value !== null) {
        const nested = flat(value, newKey); // recursion
        Object.assign(outputObj, nested);   // ✅ merge
      } 
      else if (typeof value === "number") {
        outputObj[newKey] = value;
      }
    }
  
    return outputObj;
  }