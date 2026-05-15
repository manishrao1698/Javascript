function collectArrays(obj) {
    let result = [];
  
    for (let key in obj) {
      const value = obj[key];
  
      if (Array.isArray(value)) {
        result.push(...value);
      } else if (typeof value === "object" && value !== null) {
        result.push(...collectArrays(value));
      }
    }
  
    return result;
  }

  