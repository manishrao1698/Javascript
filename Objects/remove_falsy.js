function removeFalsy(obj) {
    const result = {};
  
    for (let key in obj) {
      const value = obj[key];
  
      if (typeof value === "object" && value !== null) {
        const cleaned = removeFalsy(value);
  
        if (Object.keys(cleaned).length > 0) {
          result[key] = cleaned;
        }
      } else if (value) {
        result[key] = value;
      }
    }
  
    return result;
  }

  const obj = {
    a: 0,
    b: 1,
    c: false,
    d: {
      e: null,
      f: 2
    }
  };
  
  console.log(removeFalsy(obj));
  // { b: 1, d: { f: 2 } }