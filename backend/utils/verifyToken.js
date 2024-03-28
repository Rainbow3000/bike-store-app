const jwt = require('jsonwebtoken'); 
const HTTP_STATUS = require('../enums/httpStatus')
const ROLE = require('../enums/role')
const Account = require('../models/Account')

const verifyToken = (req,res,next)=>{
    const authHeader  = req.headers.token; 
    if(authHeader){
        const token = authHeader.split(" ")[1]; 
        jwt.verify(token, process.env.JWT_SECRET,(err,user)=>{
            if(err){
                res.status(403).json({
                    statusCode:HTTP_STATUS.UN_AUTHOZIRATION,
                    success:false,
                    message:'Token không hợp lệ',
                    data:null
                }); 
                return;
            }
            req.user = user; 
            next(); 
        })
    }else{
        res.status(403).json({
            statusCode:HTTP_STATUS.UN_AUTHOZIRATION,
            success:false,
            message:'Token không tồn tại',
            data:null
        });
    }
}


 const verifyUserRole = (req,res,next)=>{
        verifyToken(req,res,()=>{
            const {role} = req.user;
            if((role === ROLE._ADMIN) || (role === ROLE._USER)){
                next(); 
                return; 
            }

            res.status(403).json({
                statusCode:HTTP_STATUS.UN_AUTHOZIRATION,
                success:false,
                message:'Tài khoản không có quyền',
                data:null
            });
        });  
    };



const verifyAdminRole = (req,res,next)=>{
    verifyToken(req,res,()=>{
        const {role} = req.user;
        if(role === ROLE._ADMIN){
            next(); 
            return; 
        }

        res.status(403).json({
            statusCode:HTTP_STATUS.UN_AUTHOZIRATION,
            success:false,
            message:'Tài khoản không có quyền',
            data:null
        });
    });  

}

module.exports ={verifyToken,verifyUserRole,verifyAdminRole}