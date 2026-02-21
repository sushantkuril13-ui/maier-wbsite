const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Ensure .jsx module files are served with JavaScript MIME type so browsers
// accept them as module scripts (avoids "Expected a JavaScript-or-Wasm module" errors)
app.use((req, res, next) => {
  if (req.path && req.path.endsWith('.jsx')) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  }
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
