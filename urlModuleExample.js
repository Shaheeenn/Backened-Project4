// Import the built-in 'url' module
const url = require('url');

// Create a URL string
const myURL = 'https://www.example.com/products?category=books&price=low';

// Parse the URL using the url module
const parsedUrl = url.parse(myURL, true);

// Display the components of the URL
console.log("Protocol:", parsedUrl.protocol);
console.log("Host:", parsedUrl.host);
console.log("Pathname:", parsedUrl.pathname);
console.log("Search:", parsedUrl.search);
console.log("Query Parameters:", parsedUrl.query);

// You can also format a URL back from an object
const formattedUrl = url.format({
    protocol: 'https',
    host: 'www.github.com',
    pathname: '/770jh/backened',
    query: { ref: 'main' }
});

console.log("\nFormatted URL:", formattedUrl);
