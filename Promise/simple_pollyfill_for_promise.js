function MyPromise(executor) {

    this.state = "pending"
    this.value = undefined
    this.callbacks = []
  
    const resolve = (value) => {
  
      if (this.state !== "pending") return
  
      this.state = "fulfilled"
      this.value = value
  
      this.callbacks.forEach(cb => cb(value))
    }
  
    const reject = (reason) => {
      this.state = "rejected"
      this.value = reason
    }
  
    executor(resolve, reject)
  }
  
  MyPromise.prototype.then = function(callback) {
  
    if (this.state === "pending") {
      this.callbacks.push(callback)
    }
  
    if (this.state === "fulfilled") {
      callback(this.value)
    }
  
    return this
  }