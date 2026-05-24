class MyPromise {
    constructor(executor) {
      this.state = "pending";
      this.value = undefined;
      this.handlers = [];
  
      const resolve = (value) => {
        if (this.state !== "pending") return;
  
        this.state = "fulfilled";
        this.value = value;
  
        this.handlers.forEach(this.handle);
      };
  
      const reject = (reason) => {
        if (this.state !== "pending") return;
  
        this.state = "rejected";
        this.value = reason;
  
        this.handlers.forEach(this.handle);
      };
  
      try {
        executor(resolve, reject);
      } catch (err) {
        reject(err);
      }
    }
  
    handle = (handler) => {
      if (this.state === "pending") {
        this.handlers.push(handler);
        return;
      }
  
      if (this.state === "fulfilled") {
        handler.onFulfilled(this.value);
      }
  
      if (this.state === "rejected") {
        handler.onRejected(this.value);
      }
    };
  
    then(onFulfilled, onRejected) {
      return new MyPromise((resolve, reject) => {
        this.handle({
          onFulfilled: (value) => {
            if (!onFulfilled) {
              resolve(value);
            } else {
              try {
                resolve(onFulfilled(value));
              } catch (err) {
                reject(err);
              }
            }
          },
  
          onRejected: (reason) => {
            if (!onRejected) {
              reject(reason);
            } else {
              try {
                resolve(onRejected(reason));
              } catch (err) {
                reject(err);
              }
            }
          }
        });
      });
    }
  
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  }