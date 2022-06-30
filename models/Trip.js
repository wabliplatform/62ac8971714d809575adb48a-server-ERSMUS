
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
Underscoreid:String , 


TripTitle:String 



})

module.exports = {
  Trip : mongoose.model('trip', tripSchema),
}

