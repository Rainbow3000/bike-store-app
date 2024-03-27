const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  accountId: {
    type:mongoose.Types.ObjectId,
    required:true
  }, 
  productId: {
    type:mongoose.Types.ObjectId,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  status:{
    type:Number,
    default:1
  }
},{timestamps:true});

module.exports = mongoose.model('Comment', commentSchema);