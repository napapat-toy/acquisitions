import express from 'express';

const app = express();

app.get('/', (reg, res) => {
  res.status(200).send('Hello from Acquisitions!');
});

export default app;
