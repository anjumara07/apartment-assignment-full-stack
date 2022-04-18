const express = require('express');
const Resident = require('../models/resident.model');

const router = express.Router();

router.post("/",async(req,res) => {
    try {
        const resident = await Resident.create(req.body);
        return res.status(201).send(resident);
    }catch(err) {
        return res.status(500).send(err.message);
    }
});

router.get("/",async(req, res)=>{
    try {
        const residents = await Resident.find().populate('apartmentId').lean().exec();
        return res.status(200).send(residents);
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

router.get("/:id", async (req, res) => {
  try {
      
    const residents = await Resident.findById(req.params.id).populate("apartmentId").lean().exec();
    res.status(200).send(residents);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
