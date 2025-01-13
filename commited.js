// committed.js

// Function to greet the user
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to Git exercises.`);
}

// Array of names
const names = ["Alice", "Bob", "Charlie"];

// Greet each user
names.forEach(greetUser);

// Export the greetUser function for future use
module.exports = greetUser;
