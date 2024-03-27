const Category = require('../models/Category')
const HTTP_STATUS = require('../enums/httpStatus')

module.exports = {
    create:async(data)=>{
            const category = new Category(data); 
            const categoryResponse = await category.save(); 
            return {
                statusCode:HTTP_STATUS.CREATED,
                success:true,
                message:'Tạo danh mục thành công',
                data:categoryResponse
            }
       
    },

    update:async(data,id)=>{

            const category = await Category.findById({_id:id})
            if(!category){
                return {
                    statusCode:HTTP_STATUS.NOT_FOUND,
                    success:false,
                    message:'Danh mục không tồn tại',
                    data:null
                }
            }

            
            const categoryResponse = await Category.findByIdAndUpdate({id},data,{
                new:true
            }) 

            return {
                statusCode:HTTP_STATUS.SUCCESS,
                success:true,
                message:'Cập nhật danh mục thành công',
                data:categoryResponse
            }
      
    },
    delete:async(id)=>{
      
            const categoryExist = await Category.findById({id}); 
            if(!categoryExist){
                return {
                    statusCode:HTTP_STATUS.NOT_FOUND,
                    success:false,
                    message:'danh mục không tồn tại',
                    data:null
                }
            } 

            await Category.findByIdAndDelete({id});
            return {
                    statusCode:HTTP_STATUS.SUCCESS,
                    success:true,
                    message:'Xóa danh mục thành công',
                    data:1
            }

      
    },
    getOne:async(id)=>{
      
        const categoryExist = await Category.findById({id}); 
        if(!categoryExist){
            return {
                statusCode:HTTP_STATUS.NOT_FOUND,
                success:false,
                message:'danh mục không tồn tại',
                data:null
            }
        } 

        return {
            statusCode:HTTP_STATUS.SUCCESS,
            success:true,
            message:'Lấy danh mục thành công',
            data:categoryExist
    }
        
      
    },
    getAll:async()=>{
       
            const categorys = await Category.find(); 
            return {
                statusCode:HTTP_STATUS.SUCCESS,
                success:true,
                message:'Lấy danh mục thành công',
                data:categorys
            }
       
    }
}