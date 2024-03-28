const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
  email: {
    type:String,
    required:true
  }, 
  password: {
    type:String,
    required:true
  },
  phoneNumber:{
    type:String
  },
  address:{
    type:String
  },
  role: {
    type:String,
    default:'USER_ROLE'
  },
  status:{
    type:Number,
    default:1
  }
},{timestamps:true});

module.exports = mongoose.model('Account', accountSchema);