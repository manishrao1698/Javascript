const obj = {
    a: 1,
    b: "hello",
    c: {
      d: "world",
      e: 2
    }
  };

  //output: ["hello", "world"]

  function solve(obj) {
    let output = [];
  
    for (let key in obj) {
      const value = obj[key];
  
      if (typeof value === "object" && value !== null) {
        //to avoid array inside array 
        output.push(...solve(value)); // ✅ flatten result
      } 
      else if (typeof value === "string") {
        output.push(value);
      }
    }
  
    return output;
  }