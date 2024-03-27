const Account = require('../models/Account')
const {encode,decode} = require('../utils/crypto')
const HTTP_STATUS = require('../enums/httpStatus')
const  {generateToken} = require('../utils/jwt')
module.exports = {
    login:async(data)=>{
        
            const accountExist = await Account.findOne({email:data.email})
            
            if(!accountExist){
                return {
                    statusCode:HTTP_STATUS.BAD_REQUEST,
                    success:false,
                    message:'Tài khoản không tồn tại',
                    data:null
                }
            }

            const decodePass = decode(accountExist.password); 
            
            if(decodePass !== data.password){
                return {
                    statusCode:HTTP_STATUS.BAD_REQUEST,
                    success:false,
                    message:'Mật khẩu không chính xác',
                    data:null
                }
            }
            const {password,_id,...dataResponse} = accountExist._doc; 
            const accessToken = generateToken({email:data.email,_id})

            dataResponse.accessToken = accessToken;

            return {
                statusCode:HTTP_STATUS.SUCCESS,
                success:true,
                message:'Đăng nhập thành công',
                data:dataResponse
            }
      
       
    },
    register:async(data)=>{
       
            const accountExist = await Account.findOne({email:data.email})
           
            if(accountExist){
                return {
                    statusCode:HTTP_STATUS.BAD_REQUEST,
                    success:false,
                    message:'Tài khoản đã tồn tại',
                    data:null
                }
            }

            const encodePass = encode(data.password); 
            data.password = encodePass; 
            const accountData = new Account(data); 
            const account = await accountData.save(); 
            const {_id,password,...dataResponse} = account._doc; 
            const accessToken = generateToken({email:data.email,_id})
            dataResponse.accessToken = accessToken; 

            return {
                statusCode:HTTP_STATUS.BAD_REQUEST,
                success:true,
                message:'Đăng ký tài khoản thành công',
                data:dataResponse
            }
       
    }
}