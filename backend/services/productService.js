const Product = require('../models/Product')
const Category = require('../models/Category')
const HTTP_STATUS = require('../enums/httpStatus')

module.exports = {
    create:async(data)=>{
        
            const {categoryId} = data; 
            const category = await Category.findById({_id:categoryId})
            if(!category){
                return {
                    statusCode:HTTP_STATUS.NOT_FOUND,
                    success:false,
                    message:'Danh mục không tồn tại',
                    data:null
                }
            }

            const product = new Product(data); 
            const productResponse = await product.save(); 
            return {
                statusCode:HTTP_STATUS.CREATED,
                success:true,
                message:'Tạo sản phẩm thành công',
                data:productResponse
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

            
            const productResponse = await Product.findByIdAndUpdate({id},data,{
                new:true
            }) 

            return {
                statusCode:HTTP_STATUS.SUCCESS,
                success:true,
                message:'Cập nhật sản phẩm thành công',
                data:productResponse
            }
      
    },
    delete:async(id)=>{
      
            const productExist = await Product.findById({id}); 
            if(!productExist){
                return {
                    statusCode:HTTP_STATUS.NOT_FOUND,
                    success:false,
                    message:'Sản phẩm không tồn tại',
                    data:null
                }
            } 

            await Product.findByIdAndDelete({id});
            return {
                    statusCode:HTTP_STATUS.SUCCESS,
                    success:true,
                    message:'Xóa sản phẩm thành công',
                    data:1
            }

      
    },
    getOne:async(id)=>{
      
        const productExist = await Product.findById({id}); 
        if(!productExist){
            return {
                statusCode:HTTP_STATUS.NOT_FOUND,
                success:false,
                message:'Sản phẩm không tồn tại',
                data:null
            }
        } 

        return {
            statusCode:HTTP_STATUS.SUCCESS,
            success:true,
            message:'Lấy sản phẩm thành công',
            data:productExist
    }
        
      
    },
    getAll:async()=>{
       
            const products = await Product.find(); 
            return {
                statusCode:HTTP_STATUS.SUCCESS,
                success:true,
                message:'Lấy sản phẩm thành công',
                data:products
            }
       
    }
}