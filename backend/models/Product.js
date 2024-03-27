const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type:String,
    required:true
  }, 
  price: {
    type:Number,
    required:true
  },
  desc: {
    type:String
  },
  image:{
    type:String
  },
  color:[String],

  weight:{
    type:Number
  },
  height:{
    type:String
  },
  stock:{
    type:Number
  },
  categoryId:{
    type: mongoose.Types.ObjectId
  },
  status:{
    type:Number,
    default:1
  }
},{timestamps:true});

module.exports = mongoose.model('Product', productSchema);