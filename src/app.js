const express = require("express");
const app = express();

const routes = require('./routes');
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(routes);

app.use((error, req, res, next) => {
  console.log(error);
  const { message, data } = error;
  return res.status(500).json({msg: message, data});
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});