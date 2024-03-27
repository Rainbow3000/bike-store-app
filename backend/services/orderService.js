const Order = require('../models/Order')
const Account = require(('../models/Account')) 

const HTTP_STATUS = require('../enums/httpStatus')

module.exports = {
    create:async(data)=>{
        
            const {accountId} = data; 
            const accountExist = await Account.findById({_id:accountId})
            if(!accountExist){
                return {
                    statusCode:HTTP_STATUS.NOT_FOUND,
                    success:false,
                    message:'Người dùng không tồn tại',
                    data:null
                }
            }

            const order = new Order(data); 
            const OrderResponse = await order.save(); 
            return {
                statusCode:HTTP_STATUS.CREATED,
                success:true,
                message:'Tạo đơn hàng thành công',
                data:OrderResponse
            }
       
    },

    update:async(data,id)=>{
        
            const order = await Order.findById({_id:id})
            if(!order){
                return {
                    statusCode:HTTP_STATUS.NOT_FOUND,
                    success:false,
                    message:'Đơn hàng không tồn tại',
                    data:null
                }
            }

            
            const OrderResponse = await Order.findByIdAndUpdate({id},data,{
                new:true
            }) 

            return {
                statusCode:HTTP_STATUS.SUCCESS,
                success:true,
                message:'Cập nhật đơn hàng thành công',
                data:OrderResponse
            }
      
    },
    delete:async(id)=>{
      
            const OrderExist = await Order.findById({id}); 
            if(!OrderExist){
                return {
                    statusCode:HTTP_STATUS.NOT_FOUND,
                    success:false,
                    message:'đơn hàng không tồn tại',
                    data:null
                }
            } 

            await Order.findByIdAndDelete({id});
            return {
                    statusCode:HTTP_STATUS.SUCCESS,
                    success:true,
                    message:'Xóa đơn hàng thành công',
                    data:1
            }

      
    },
    getOne:async(id)=>{
      
        const OrderExist = await Order.findById({id}); 
        if(!OrderExist){
            return {
                statusCode:HTTP_STATUS.NOT_FOUND,
                success:false,
                message:'đơn hàng không tồn tại',
                data:null
            }
        } 

        return {
            statusCode:HTTP_STATUS.SUCCESS,
            success:true,
            message:'Lấy đơn hàng thành công',
            data:OrderExist
    }
        
      
    },
    getAll:async()=>{
       
            const Orders = await Order.find(); 
            return {
                statusCode:HTTP_STATUS.SUCCESS,
                success:true,
                message:'Lấy đơn hàng thành công',
                data:Orders
            }
       
    }
}