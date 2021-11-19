const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const todolistRouter = require('./routes/todolistRoute.js');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//Routes
app.use('/todolist', todolistRouter);

//Start listening for requests on specific port
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});
