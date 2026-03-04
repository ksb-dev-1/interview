function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    const context = this;

    clearTimeout(timeoutId); // cancel any previously scheduled call

    timeoutId = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

// Example function to be debounced
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

// Create a debounced version of sayHello with a 5000ms delay
const debouncedSayHello = debounce(sayHello, 5000);

// Call the debounced function multiple times
console.log(debouncedSayHello("Alice"));
console.log(debouncedSayHello("Bob"));
console.log(debouncedSayHello("Charlie"));

// Only the last call will execute after 5000ms, logging: "Hello, Charlie!"
