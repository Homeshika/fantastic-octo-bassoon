const express = require('express');
const app = express();

// POST request to handle story submission
app.post('/submit', (req, res) => {
    const storyTitle = req.body.storyTitle;
    const storyContent = req.body.storyContent;

    // Save the story data to the database (using a database library or framework)
    
    // You can also perform data validation and security checks here

    res.send('Story submitted successfully!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});