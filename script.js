//your JS code here. If required.
const output = document.getElementById('output');

// Step 1: Create a Promise that resolves after 3 seconds with the initial array
const initialPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4]);
  }, 3000);
});

// Step 2: Chain the promises for transformations
initialPromise
  // First transformation: Filter out odd numbers after 1 second
  .then((arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = arr.filter(num => num % 2 === 0);
        output.textContent = evenNumbers.join(','); // Update the output div
        resolve(evenNumbers);
      }, 1000);
    });
  })
  // Second transformation: Multiply even numbers by 2 after 2 seconds
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const multiplied = evenNumbers.map(num => num * 2);
        output.textContent = multiplied.join(','); // Update the output div
        resolve(multiplied);
      }, 2000);
    });
  })
  .catch((err) => {
    console.error('Error:', err);
  });
