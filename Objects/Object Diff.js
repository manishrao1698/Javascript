function objectDiff(oldObj, newObj) {
    const result = {};
  
    for (let key in newObj) {
      if (oldObj[key] !== newObj[key]) {
        result[key] = {
          old: oldObj[key],
          new: newObj[key]
        };
      }
    }
  
    return result;
  }