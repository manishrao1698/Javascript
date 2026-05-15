function findDuplicateValues(obj) {
    const freq = {};
    const result = [];
  
    for (let key in obj) {
      const value = obj[key];
  
      freq[value] = (freq[value] || 0) + 1;
    }
  
    for (let key in freq) {
      if (freq[key] > 1) {
        result.push(Number(key));
      }
    }
  
    return result;
  }