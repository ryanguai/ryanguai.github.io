const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Handle form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Process the form data (e.g., store in database, send email, etc.)

  // Send a response
  res.send('Form submitted successfully');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
