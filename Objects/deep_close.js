const obj = {
    a: 1,
    b: {
      c: 2
    }
  };

  //Deep close
   let result ={}
  const clone = deepClone(obj);
  //expected behaviour
  clone.b.c = 100;

console.log(obj.b.c); // 2 ✅ (original should NOT change)


function deepClone(obj) {
    // handle array
    if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item));
    }
  
    // handle object
    else if (typeof obj === "object" && obj !== null) {
      let result = {};
  
      for (let key in obj) {
        result[key] = deepClone(obj[key]);
      }
  
      return result;
    }
  
    // primitive (number, string, boolean, etc.)
    else {
      return obj;
    }
  }