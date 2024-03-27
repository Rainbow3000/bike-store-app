const authService  = require('../services/authService')
module.exports = {
    login:async(req,res)=>{
        try {
            const data = await authService.login(req.body)
            res.status(data.statusCode).json(data)
        } catch (error) {
            console.log(error)
        }
    },

    register:async(req,res)=>{
        try {
            const data = await authService.register(req.body);
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    }
}