//Oject destrcturing 
const { MongoClient, ObjectID } = require('mongodb');

//var obj = new ObjectID;   //

// console.log(obj);



//const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {

        return console.log('unable to connect');

    }
    console.log('Connected to mongo server');

    const db = client.db('TodoApp');

    //************************Fid all****************************************

    // db.collection('Todos').find().toArray().then((result) => {

    //     console.log('Todos');
    //     console.log(JSON.stringify(result, undefined, 2));




    // }, (err) => {

    //     console.log('Unable to fetch Todos');

    // })

    // ********************find one using property***************************

    // db.collection('Todos').find({ complete: true }).toArray().then((result) => {

    //     console.log('Todos');
    //     console.log(JSON.stringify(result, undefined, 2));




    // }, (err) => {

    //     console.log('Unable to fetch Todos');

    // })


    // ********************find one id property***************************

    // db.collection('Todos').find({
    //     _id: new ObjectID('5aa1b9121fa38003c0c77cf4')
    // }).toArray().then((result) => {

    //     console.log('Todos');
    //     console.log(JSON.stringify(result, undefined, 2));




    // }, (err) => {

    //     console.log('Unable to fetch Todos');

    // })



    //To find number of document
    // db.collection('Todos').find().count().then((count) => {

    //     console.log(`Todos count : ${count}`);




    // }, (err) => {

    //     console.log('Unable to fetch Todos');

    // })





    db.collection('User').find({ name: 'Ram' }).toArray().then((result) => {

        console.log(`User detail  : ${JSON.stringify(result,undefined,2)}`);


    }, (err) => {

        console.log('Unable to fetch Todos');

    })








    client.close();
})