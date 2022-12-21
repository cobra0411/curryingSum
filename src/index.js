// function currying
let args_len = 5;

const helper = (args) => {
  return args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

const sum = (...args) => {
  if (args.length === args_len) {
    return helper(args);
  } else {
    return (...args2) => {
      return sum(...args, ...args2);
    };
  }
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3)(4, 5));
console.log(sum(1, 2)(3)(4, 5));
