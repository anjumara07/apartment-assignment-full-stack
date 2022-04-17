const express = require('express');
const Apartment = require('../models/apartment.model');

const router = express.Router();

router.post("/",async(req,res) => {
    try {
        const apartment = await Apartment.create(req.body);
        return res.status(201).send(apartment);
    }catch(err) {
        return res.status(500).send(err.message);
    }
});

router.get("/",async(req, res)=>{
    try {
        const apartments = await Apartment.find().lean().exec();
        return res.status(200).send(apartments);
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

module.exports = router;
