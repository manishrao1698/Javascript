function countKeys(obj) {
    let count = 0;
  
    for (let key in obj) {
      count++;
  
      const value = obj[key];
  
      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        count += countKeys(value);
      }
    }
  
    return count;
  }