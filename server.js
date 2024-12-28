const express = require('express');
const path = require('path')
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Home page route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'demo.html'));
});

// Listen for request on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://locallost:${PORT}`);
});