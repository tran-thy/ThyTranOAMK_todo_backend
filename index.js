require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { todoRouter } = require('./routes/todo.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', todoRouter);

// const port = process.env.PORT;
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});