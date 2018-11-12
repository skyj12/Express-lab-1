const express = require('express');
const shop = require('./cart-items');
const app = express();
const port = 8888;

app.use(express.json());


app.use ('/', shop);

app.listen(port, () => console.log(`Server up and running on localhost: ${port}`));
