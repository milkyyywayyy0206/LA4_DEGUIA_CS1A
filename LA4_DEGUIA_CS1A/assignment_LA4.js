// List of 5 customers
let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Show each customer's name and number
function costumerNumber() {
    for (let i = 0; i < queue.length; i++) {
        alert(queue[i] + " is customer number: " + (i + 1));
    }
}

// Keep running while there are customers in the queue
while (queue.length > 0) {
    costumerNumber(); // Show current customers and their numbers

    console.log("Current Queue: " + queue.join(", ")); // Show queue in console

    let number = prompt("Enter the customer number to service:"); // Ask who to serve
    let index = parseInt(number) - 1; // Convert to index

    // If number is valid, serve customer
    if (index >= 0 && index < queue.length) {
        alert("Now serving: " + queue[index]);
        queue.splice(index, 1); // Remove served customer
    } else {
        alert("Invalid number."); // Show error for wrong input
    }
}

alert("All customers have been served."); // End message
