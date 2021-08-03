import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log(`listening on http://localhost:3000`);
});
