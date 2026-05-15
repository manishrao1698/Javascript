function mergeDeep(obj1, obj2) {
    const result = { ...obj1 };
  
    for (let key in obj2) {
      const value1 = result[key];
      const value2 = obj2[key];
  
      if (
        typeof value1 === "object" && value1 !== null &&
        typeof value2 === "object" && value2 !== null &&
        !Array.isArray(value1) &&
        !Array.isArray(value2)
      ) {
        result[key] = mergeDeep(value1, value2);
      } else {
        result[key] = value2;
      }
    }
  
    return result;
  }

  //input 
  const obj1 = {
  a: 1,
  b: {
    x: 10
  }
};

const obj2 = {
  b: {
    y: 20
  },
  c: 3
};

//output
// {
//     a: 1,
//     b: {
//       x: 10,
//       y: 20
//     },
//     c: 3
//   }