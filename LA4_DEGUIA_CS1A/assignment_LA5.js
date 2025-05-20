// List of customers
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
const TABLE_SIZE = 5;

// Create an empty hash table with 5 slots
let hashTable = new Array(TABLE_SIZE).fill(null);

// Simple hash function to find position for a name
function hash(name) {
  let sum = 0;
  // Add up the character codes of each letter
  for (let char of name) {
    sum += char.charCodeAt(0);
  }
  // Return a number between 0 and 4
  return sum % TABLE_SIZE;
}

// Put each customer into the hash table
for (let name of customers) {
  let index = hash(name);
  // If slot is taken, go to next slot
  while (hashTable[index] !== null) {
    index = (index + 1) % TABLE_SIZE;
  }
  hashTable[index] = name;
}

// Show the hash table to the user
function showTable() {
  let result = "";
  for (let i = 0; i < TABLE_SIZE; i++) {
    // Show slot number and customer name or [empty]
    result += (i + 1) + ": " + (hashTable[i] || "[empty]") + "\n";
  }
  alert(result);
}

// Keep serving customers while there are any left
while (hashTable.some(c => c !== null)) {
  showTable();
  console.log("Current Hash Table: " + hashTable.map(x => x || "[empty]").join(", "));

  // Ask user which customer number to serve
  let input = prompt("Enter customer number to service (1 to 5):");
  let num = parseInt(input) - 1;

  // Check if number is valid and slot is not empty
  if (num >= 0 && num < TABLE_SIZE && hashTable[num] !== null) {
    alert("Now serving: " + hashTable[num]);
    hashTable[num] = null; // Remove served customer
  } else {
    alert("Invalid number or empty slot.");
  }
}

alert("All customers have been served.");
