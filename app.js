const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set up a static folder to serve CSS (and other static assets)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
