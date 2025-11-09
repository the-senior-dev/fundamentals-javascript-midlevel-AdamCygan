// TODO: Implement the Curry Function
// This function should take another function `fn` as its argument
// and return a new function that allows arguments to be passed one at a time.
// Example:
// function add(a, b) {
//     return a + b;
// }
// const curriedAdd = curry(add);
// curriedAdd(1)(2); // 3

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return (arg) => curried.apply(this, [...args, arg]);
  };
}

module.exports = curry;
