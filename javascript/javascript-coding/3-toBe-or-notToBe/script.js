var expect = function (a) {
  return {
    toBe: function (b) {
      if (a !== b) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: function (b) {
      if (a === b) {
        throw new Error("Equal");
      }
      return true;
    },
  };
};

//const func = () => expect(5).toBe(5);
const func = () => expect(5).toBe(null);
//const func = () => expect(5).notToBe(null);
console.log(func());
