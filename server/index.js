const express = require("express");
const massive = require('massive');
const app = express();
require('dotenv').config();

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database Connected :)');
})

app.use(express.json());

app.post('/api/selfie', (req, res) =>{
    const {name, image, price} = req.body;
    const db = req.app.get('db');
    db.addProduct(name, image, price).then(response => {
        res.status(200).json(response);
    
    })
 
 })


app.listen(process.env.SERVER_PORT, () => console.log (`Listening on Port ${process.env.SERVER_PORT}`));