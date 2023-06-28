const express = require('express');
const app = express();
const PORT = 5000;

app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('home', { activePage: 'home' });
});

app.get('/about', (req, res) => {
  res.render('about', { activePage: 'about' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
