const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/practice_mern');

// register a user to database
app.post('/register', (req, res)=>{
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})

// check if user is registered and can successfully login
app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found 
        else{
            res.json("No records found! ");
        }
    })
})

// fetch all the registered users
app.get('/users/all', async (req, res) => {
    await FormDataModel.find({})
    .then(users => {
        if(users.length > 0){
            res.json({
                message: "All registered users fetched successfully",
                body: users
            })
        }else{
            res.json({
                message: 'No registered user found!'
            })
        }
    })
})

app.listen(3001, () => {
    console.log("Server listining on port 3001!");
});