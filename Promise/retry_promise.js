
async function retry(fn, retries) {
    let lastError;
  
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error;
  
        // If no retries left, reject
        if (attempt === retries) {
          throw lastError;
        }
      }
    }
  }


  let count = 0;

async function fetchData() {
  count++;

  console.log(`Attempt ${count}`);

  if (count < 3) {
    throw new Error("Failed");
  }

  return "Success!";
}

retry(fetchData, 5)
  .then(console.log)
  .catch(console.error);


  //Version with Delay Between Retries
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function retry(fn, retries, delay = 0) {
    let lastError;
  
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error;
  
        if (attempt === retries) {
          throw lastError;
        }
  
        if (delay > 0) {
          await wait(delay);
        }
      }
    }
  }
