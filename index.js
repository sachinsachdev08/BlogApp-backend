const express = require('express');
const cors = require('cors');
const blogRoute = require('./modules/blogs');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/v1',blogRoute);
app.listen(port,()=> console.log('Server started'));

