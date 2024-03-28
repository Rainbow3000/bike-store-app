const Comment = require('../models/Comment')
const Account = require('../models/Account')
const HTTP_STATUS = require('../enums/httpStatus')

module.exports = {
    create:async(data)=>{
            const {accountId} = data; 
            const accountExist = await Account.findById({_id:accountId})
            if(!accountExist){
                return {
                    statusCode:HTTP_STATUS.NOT_FOUND,
                    success:false,
                    message:'Bình luận không tồn tại',
                    data:null
                }
            }

            const comment = new Comment(data); 
            const commentCreated = await comment.save(); 
            return {
                statusCode:HTTP_STATUS.CREATED,
                success:true,
                message:'Tạo bình luận thành công',
                data:commentCreated
            }
       
    },

    update:async(data,id)=>{
     
            const comment = await Comment.findById({_id:id})
            if(!comment){
                return {
                    statusCode:HTTP_STATUS.NOT_FOUND,
                    success:false,
                    message:'Bình luận không tồn tại',
                    data:null
                }
            }

            
            const commentResponse = await Comment.findByIdAndUpdate({id},data,{
                new:true
            }) 

            return {
                statusCode:HTTP_STATUS.SUCCESS,
                success:true,
                message:'Cập nhật Bình luận thành công',
                data:commentResponse
            }
      
    },
    delete:async(id)=>{
      
            const commentExist = await Comment.findById({id}); 
            if(!commentExist){
                return {
                    statusCode:HTTP_STATUS.NOT_FOUND,
                    success:false,
                    message:'Bình luận không tồn tại',
                    data:null
                }
            } 

            await Comment.findByIdAndDelete({id});
            return {
                    statusCode:HTTP_STATUS.SUCCESS,
                    success:true,
                    message:'Xóa Bình luận thành công',
                    data:1
            }

      
    },
    getOne:async(id)=>{
      
        const commentExist = await Comment.findById({id}); 
        if(!commentExist){
            return {
                statusCode:HTTP_STATUS.NOT_FOUND,
                success:false,
                message:'Bình luận không tồn tại',
                data:null
            }
        } 

        return {
            statusCode:HTTP_STATUS.SUCCESS,
            success:true,
            message:'Lấy bình luận thành công',
            data:commentExist
    }
        
      
    },
    getAll:async()=>{
       
            const comments = await Comment.find(); 
            return {
                statusCode:HTTP_STATUS.SUCCESS,
                success:true,
                message:'Lấy bình luận thành công',
                data:comments
            }
       
    }
}