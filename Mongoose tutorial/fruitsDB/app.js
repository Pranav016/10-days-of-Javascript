const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});


// const fruitSchema = new mongoose.Schema({ //schema for our new collection in the DB
//     name: String,
//     rating: Number,
//     review: String,
// })

//validated schema
const fruitSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Mention a fruit"],
    },
    rating: {
        type: Number,
        min:1,
        max:10,
    },
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema); //forming a new collection inside our DB using the schema we made above
// while creating the colection, we always give a singular name to our collection coz mongoose makes it plural for us

const fruit = new Fruit({
    name: "Dragon Fruit",
    rating: 8,
    review: "Yummy",
});

fruit.save().then(function (err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Values added sucessfully")
    }
});

// const apple = new Fruit({
//     name: "Apple",
//     rating: 9,
//     review: "Pretty Solid",
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 9,
//     review: "Really good!"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 7,
//     review: "Real nice",
// });

// Fruit.insertMany([banana, orange, apple], function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully inserted!");
//     }
// });

// Fruit.find(function(err, fruits){
//     if(err){
//         console.log(err);
//     }
//     else{
//         mongoose.connection.close();
//         fruits.forEach(function(fruit){
//             console.log(fruit.name);
//         });
//     }
// });


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Person = mongoose.model("Person", personSchema); //name of the collection and schema are passed as arg.

const person = new Person({
    name: "Pranav",
    age: "20",
});

// person.save().then(function (){
//     console.log("Person successfully added!");
// });

