
const arr = ["a", "b", "a", "c", "b", "a"];

//logically correct but intent is not as map returns new unused array, better to use foreach
function countFreq(arr){
    let obj={}
    arr.map((val)=> obj[val]? obj[val]++:obj[val]=1);
    return obj
}

function countFreq1(arr){
    return arr.reduce((acc, curr)=>{
        if(acc.curr){
            acc.curr++;
        }
        else {
            acc[curr]=1;
        }
    }, {})
}

//using map

let freqMap = new Map();

arr.forEach((val)=>{
    freqMap.set(val, (freqMap.get(val)||0)+1)
})


//reduce
function countFreq(arr) {
    return arr.reduce((obj, val) => {
        obj[val] = (obj[val] || 0) + 1;
        return obj;
    }, {});
}

//foreach
function countFreq(arr) {
    let obj = {};
    arr.forEach(val => {
        obj[val] = (obj[val] || 0) + 1;
    });
    return obj;
}