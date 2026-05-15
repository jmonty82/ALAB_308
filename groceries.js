const groceries = [
  { name: "Milk", expires: "2026-05-10" },
  { name: "Eggs", expires: "2026-05-20" },
  { name: "Tofu", expires: "2026-05-01" },
  { name: "Spinach", expires: "2026-05-13" },
  { name: "Apples", expires: "2026-06-15" }
];

// Get the current date and time (use the Date object).
// Use a for loop or the .filter() method to create a new array called expiredItems with all the items whose expiration date has passed.
// Use the expires property to create a new Date object and compare it to the one from Step 1.
// Use console.table(expiredItems) to see your results clearly.
// Once you get the filtered list, use a for loop or the .forEach() method to log a custom message for each expired item, like:
// “The Milk expired 4 days ago!”

// Create a helper function for calculating the days that have passed since expiration

const date = new Date();
console.log(date.toISOString().split('T')[0])