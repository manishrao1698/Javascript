Promise.myAny = function (promises) {
    return new Promise((resolve, reject) => {
      const errors = [];
      let rejectedCount = 0;
  
      if (promises.length === 0) {
        reject(new AggregateError([], "All promises rejected"));
        return;
      }
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then(resolve)
          .catch((err) => {
            errors[index] = err;
            rejectedCount++;
  
            if (rejectedCount === promises.length) {
              reject(new AggregateError(errors, "All promises rejected"));
            }
          });
      });
    });
  };