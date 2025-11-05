// Import the Express.js module
const express = require('express');

// Create an Express application
const app = express();

// Define a port number
const PORT = 3000;

// Define a basic GET endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js REST API!');
});

// Define another GET endpoint that returns JSON data
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Shaheen', email: 'shaheen@example.com' },
    { id: 2, name: 'Aarav', email: 'aarav@example.com' },
    { id: 3, name: 'Priya', email: 'priya@example.com' }
  ];

  res.json(users); // Sends JSON response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
