const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(100);
    }, 100);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(200);
    }, 200);
});
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(300);
    }, 300);
});
const getTotalPrice = async () => {
    let sum = 0;
    const promisesResult = await Promise.all([promise1, promise2, promise3]);
    promisesResult.forEach(res => {
        sum = sum + res;
        console.log(res);
    });
    return sum;
}
const getFirstPrice = async () => {
    const firstPrice = await Promise.race([promise1, promise2, promise3]);
    return firstPrice;
}
console.log("First Price -->", getFirstPrice());