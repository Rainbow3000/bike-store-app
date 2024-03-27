
const orderService = require('../services/orderService')

module.exports = {
    create:async(req,res)=>{
        try {
            const data = await orderService.create(req.body)
            res.status(data.statusCode).json(data)
        } catch (error) {
            console.log(error)
        }
    },

    update:async(req,res)=>{
        try {
            const data = await orderService.update(req.body,req.params.id);
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    },
    delete:async(req,res)=>{
        try {
            const data = await orderService.delete(req.params.id);
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    },
    getOne:async(req,res)=>{
        try {
            const data = await orderService.getOne(req.params.id);
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    },
    getAll:async(req,res)=>{
        try {
            const data = await orderService.getAll();
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    }
}