function groupBy(arr, keyName) {
    const result = {};
  
    for (let item of arr) {
      const key = item[keyName];
  
      if (!result[key]) {
        result[key] = [];
      }
  
      result[key].push(item);
    }
  
    return result;
  }