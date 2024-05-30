const module = {
  x: 42,
  getX: function (y) {
    return `${this.x} and ${y}`;
  },
};

const object = {
  x: 43,
};

Function.prototype.customBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "Not callable");
  }

  context.fn = this;

  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };

  //   return function () {
  //     return context.fn(...args);
  //   };
};

const unboundGetX = module.getX;

const boundGetX = unboundGetX.customBind(module);
// Output should be 42.
console.log(boundGetX());
console.log(module.getX.customBind(object, 10)());
console.log(module.getX.customBind(object)(10));
