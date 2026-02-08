const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Handle /portfolio routes
app.use('/portfolio', express.static(path.join(__dirname)));

// Redirect root to /portfolio/
app.get('/', (req, res) => {
  res.redirect('/portfolio/');
});

// Handle all other routes - serve index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n   ┌─────────────────────────────────────────────┐`);
  console.log(`   │                                             │`);
  console.log(`   │   Portfolio Server Running!                 │`);
  console.log(`   │                                             │`);
  console.log(`   │   - Local:    http://localhost:${PORT}         │`);
  console.log(`   │   - Portfolio: http://localhost:${PORT}/portfolio/ │`);
  console.log(`   │                                             │`);
  console.log(`   └─────────────────────────────────────────────┘\n`);
});
