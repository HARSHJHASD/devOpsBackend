const express = require('express');
const app = express();
const port = 9000;

// Define a route for the GET request
app.get('/getmyname', (req, res) => {
  res.send('harsh jha');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
