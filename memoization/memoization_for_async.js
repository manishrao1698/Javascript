function memoizePromiseWithExpiry(fn, expiryTime) {
    const cache = new Map();
  
    return function (...args) {
      const key = JSON.stringify(args);
      const now = Date.now();
  
      if (cache.has(key)) {
        const cached = cache.get(key);
  
        if (now < cached.expiry) {
          return cached.value;
        }
  
        cache.delete(key);
      }
  
      const promise = fn.apply(this, args);
  
      cache.set(key, {
        value: promise,
        expiry: now + expiryTime,
      });
  
      promise.catch(() => {
        cache.delete(key);
      });
  
      return promise;
    };
  }