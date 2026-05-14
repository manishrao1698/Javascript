const obj = {
    a: {
      b: {
        c: 5
      }
    }
  };

 // input : findPath(obj, 5)
 //output 'a.b.c"

 function findPath(obj, target, parent = "") {
    for (let key in obj) {
      const value = obj[key];
      const newPath = parent ? parent + "." + key : key;
  
      if (value === target) {
        return newPath;
      }
  
      if (typeof value === "object" && value !== null) {
        const result = findPath(value, target, newPath);
  
        if (result !== null) {
          return result;
        }
      }
    }
    return null;
  }