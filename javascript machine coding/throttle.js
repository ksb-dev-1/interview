function throttle(fn, delay) {
  let lastCalled = 0;

  return function (...args) {
    const context = this;
    const now = Date.now();

    if (now - lastCalled >= delay) {
      lastCalled = now;
      fn.apply(context, args);
    }
  };
}

function sayHello(name) {
  console.log(`Hello, ${name}! at ${new Date().toLocaleTimeString()}`);
}

const throttledSayHello = throttle(sayHello, 5000);

// Simulate rapid calls
throttledSayHello("Alice"); // Executes
throttledSayHello("Bob"); // Ignored
throttledSayHello("Charlie"); // Ignored

setTimeout(() => throttledSayHello("David"), 5100);
