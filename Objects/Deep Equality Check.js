function deepEqual(a, b) {
    // same primitive/reference
    if (a === b) {
      return true;
    }
  
    // invalid object cases
    if (
      typeof a !== "object" || a === null ||
      typeof b !== "object" || b === null
    ) {
      return false;
    }
  
    // array mismatch
    if (Array.isArray(a) !== Array.isArray(b)) {
      return false;
    }
  
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
  
    // different number of keys
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    // recursive comparison
    for (let key of keysA) {
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
  
    return true;
  }