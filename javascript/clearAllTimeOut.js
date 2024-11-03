/*
 * cancel all timer from window.setTimeout
 */

// Array to store timeout IDs
let timeoutIds = [];

// Wrapper around the original setTimeout function
const originalSetTimeout = window.setTimeout;
//console.log(originalSetTimeout);

window.setTimeout = function (callback, delay) {
  const timeoutId = originalSetTimeout(callback, delay);
  //console.log(timeoutId);
  timeoutIds.push(timeoutId);
  return timeoutId;
};

// clearAllTimeouts function
function clearAllTimeout() {
  // Iterate over all stored timeout IDs and clear each one
  for (let id of timeoutIds) {
    clearTimeout(id);
  }
  // Clear the array of timeout IDs
  timeoutIds = [];
}

setTimeout(function () {
  console.log("timeout-1");
}, 1000);
setTimeout(function () {
  console.log("timeout-2");
}, 5000);
setTimeout(function () {
  console.log("timeout-3");
}, 10000);

clearAllTimeout();
