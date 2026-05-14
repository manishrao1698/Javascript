const obj = {
    a: 1,
    b: {
      c: 2,
      d: 3
    }
  };
  // when value only contains number
  function solve(obj) {
    let sum = 0;
  
    for (let key in obj) {
      const value = obj[key];
  
      if (typeof value === "object" && value !== null) {
        sum += solve(value);
      } else {
        sum += value;
      }
    }
  
    return sum;
  }

  // when input contains value of diff type
  function solve(obj) {
    let sum = 0;
  
    for (let key in obj) {
      const value = obj[key];
  
      if (typeof value === "object" && value !== null) {
        sum += solve(value);
      } 
      else if (typeof value === "number") {
        sum += value;
      }
    }
  
    return sum;
  }

  console.log(solve(obj,0))