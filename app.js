const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');


app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/', routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
