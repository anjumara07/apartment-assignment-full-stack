const express = require('express');
const connect = require('./configs/db')

const apartmentController = require('./controllers/apartment.controller');
const managerController = require('./controllers/manager.controller');
const residentContriller = require("./controllers/resident.controller");
const {login , register} = require('./controllers/auth.controller')

const app = express();
app.use(express.json());

app.use("/login",login);
app.use("/register",register);

app.use("/apartments",apartmentController)
app.use("/managers",managerController)
app.use("/residents",residentContriller)

app.listen(2345,async function () {
    try{
        await connect();
        console.log('Listening on port 2345')
    }catch(e){
        console.log(e)
    }
})