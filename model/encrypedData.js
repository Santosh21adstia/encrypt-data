const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const encrypt = require('mongoose-encryption');

const encrypteddataSchema = new Schema({
   name:{type:String},
   email:{type:String},
   phone:{type:Number}
}, { timestamps: true });

encrypteddataSchema.plugin(encrypt, {
    secret:process.env.Secret,
    encryptedFields: ['phone'],
  });

const EncriptedData = mongoose.model('encrypteddata', encrypteddataSchema);

module.exports = EncriptedData;
