/*
 * @Author: Chandan Kumar 
 * @Date: 2018-03-21 11:07:43 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-03-21 13:17:31
 */
var { mongoose } = require('./db/mongoose');

var { User } = require('./models/user');

var { Todo } = require('./models/todo');

var express = require('express');

var bodyParser = require('body-parser');




var app = express();


//middleware
app.use(bodyParser.json());

//get post
app.post('/todos', (req, res) => {

    console.log(req.body);

    var todo = new Todo({

        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {

        res.status(400).send(e);
    })


});


//get

app.listen(3000, () => {

    console.log('Server start at 3000');

});


//Inserting document in collection using Mongoose

// var newTodo = new Todo({
//     text: 'Cooked dinner'

// });

// newTodo.save().then((doc) => {
//     console.log('Saved doc' + doc);

// }, (e) => {

//     console.log('Unable to save document');

// });

// var d = new Date();
// var newTodo1 = new Todo({
//     text: 'Chandan',
//     completed: true,
//     completeAt: d.getDate()

// });


// var d = new Date();
// var newTodo1 = new Todo({

// });

// newTodo1.save().then((doc) => {
//     console.log('Saved document' + doc);

// }, (e) => {

//     console.log('Unable to save');

// });






// userNew.save().then((doc) => {
//     console.log('Document saved successfully' + doc);

// }, (e) => {

//     console.log('Error in saving document');

// });