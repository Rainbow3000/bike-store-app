const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  accountId: {
    type:mongoose.Types.ObjectId,
    required:true
  }, 
  productId: {
    type:[mongoose.Types.ObjectId],
    required:true
  },
  totalMoney:{
    type:Number,
    required:true
  },
  payMethod:{
    type:String,
    default:'normal'
  },
  status:{
    type:Number,
    default:1
  }
},{timestamps:true});

module.exports = mongoose.model('Order', orderSchema);