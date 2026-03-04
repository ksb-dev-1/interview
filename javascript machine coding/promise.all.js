export function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
      ]);
    }, 1000); // Simulating API call with a delay of 2 seconds
  });
}

export function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "First post" },
        { id: 2, title: "Second post" },
      ]);
    }, 1000); // Simulating API call with a delay of 2 seconds
  });
}

Promise.all([getUsers(), getPosts()])
  .then(([users, posts]) => {
    console.log(users);
    console.log(posts); // This will log an array containing the resolved data from both promises
  })
  .catch((err) => {
    console.error(err); // Log any errors that occur during promise resolution
  });
