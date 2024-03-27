const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type:String,
    required:true
  }, 
  prodQuantity: {
    type:Number,
    default:0
  },
  status:{
    type:Number,
    default:1
  }
},{timestamps:true});

module.exports = mongoose.model('Category', categorySchema);