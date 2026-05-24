Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
      const results = [];
      let completed = 0;
  
      if (promises.length === 0) {
        resolve([]);
        return;
      }
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = value;
            completed++;
  
            if (completed === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      });
    });
  };

  Promise.myAll([
    Promise.resolve(1),
    Promise.resolve(2),
    3
  ]).then(console.log);