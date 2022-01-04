function createMultiplier(x) {
    return function(y) {
      return x*y;
    };
  }

let multiplyby5 = createMultiplier(5);

console.log(multiplyby5(10));
console.log(multiplyby5(12));
console.log(multiplyby5(7));