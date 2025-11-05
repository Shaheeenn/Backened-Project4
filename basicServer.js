// Import the built-in 'http' module
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Handle different routes
  if (req.url === '/') {
    res.end('Welcome to the Home Page!');
  } else if (req.url === '/about') {
    res.end('This is the About Page.');
  } else if (req.url === '/contact') {
    res.end('Contact us at support@example.com');
  } else {
    res.statusCode = 404;
    res.end('404 - Page Not Found');
  }
});

// Start the server and listen on the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
