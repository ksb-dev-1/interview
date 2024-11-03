function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Example function to be debounced
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

// Create a debounced version of sayHello with a 1000ms delay
const debouncedSayHello = debounce(sayHello, 5000);

// Call the debounced function multiple times
debouncedSayHello("Alice");
debouncedSayHello("Bob");
debouncedSayHello("Charlie");

// Only the last call will execute after 1000ms, logging: "Hello, Charlie!"
