function outer() {
    let count = 0;
  
    return function inner() {
      count++;
      console.log(count);
    };
  }
  
  const fn1 = outer();
  const fn2 = outer();
  
  fn1();
  fn1();
  fn2();
  fn1();

  //output:-1,2,1,3

  for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }

  //output:4,4,4

  for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  //output:1,2,3


  function createFunctions() {
    let arr = [];
  
    for (var i = 0; i < 3; i++) {
      arr.push(function () {
        console.log(i);
      });
    }
  
    return arr;
  }
  
  const funcs = createFunctions();
  
  funcs[0]();
  funcs[1]();
  funcs[2]();

  //output:-3,3,3

  function createFunctions1() {
    let arr = [];
  
    for (var i = 0; i < 3; i++) {
      arr.push(
        (function (j) {
          return function () {
            console.log(j);
          };
        })(i)
      );
    }
  
    return arr;
  }
  
  const funcs2 = createFunctions1();
  
  funcs2[0]();
  funcs2[1]();
  funcs2[2]();

  //output:0,1,2

  function outer() {
    let x = 10;
  
    return function inner() {
      console.log(x);
    };
  }
  
  let x = 20;
  
  const fn = outer();
  fn();

  // output:10

  function outer() {
    let x = 10;
  
    return function inner() {
      x++;
      console.log(x);
    };
  }
  
  const a = outer();
  const b = outer();
  
  a();
  a();
  b();
  a();
  b();
  //output:- 11, 12, 11, 13, 12


  function multiplier(x) {
    return function (y) {
      return x * y;
    };
  }
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  console.log(double(5));
  console.log(triple(5));

  //output: 10,15

  function test() {
    let count = 0;
  
    return function () {
      count++;
  
      setTimeout(() => {
        console.log(count);
      }, 1000);
    };
  }
  
  const fn3 = test();
  
  fn3();
  fn3();
  fn3();

  //output: 3,3,3  (Reference to same count in closure)

  function test() {
    let count = 0;
  
    return function () {
      count++;
  
      let current = count;
  
      setTimeout(() => {
        console.log(current);
      }, 1000);
    };
  }
  
  const fn4 = test();
  
  fn4();
  fn4();
  fn4();

  //output: 1,2,3 (sending diff copy each time so reference is to current which is getting initialise in each call)

  //Important:-Closure remembers variable reference, not snapshot value.