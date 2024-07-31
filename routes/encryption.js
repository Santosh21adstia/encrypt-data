const express = require("express");
const apiKeyAuth = require("../middleware/apiAuth");
const router = express.Router();
const EncriptedData=require("../model/encrypedData");
require('dotenv').config();

async function saveUser(req, res) {
    try { 
              const { name, email, phone } = req.body;
              const newUser = new EncriptedData({ name, email, phone });
              await newUser.save();
              res.status(201).send(newUser);
            } 
catch (error) {
        res.status(500).json({ message: error.message });
    }

}

async function getUser(req, res) {
    try {
        const user = await EncriptedData.findById(req.params.id);
        if (!user) {
          return res.status(404).send('User not found');
        }
        res.send(user);
      } catch (error) {
        res.status(400).send(error);
      }

}

router.post('/save-user', saveUser);
router.get('/get-user/:id', getUser);

module.exports = router;
