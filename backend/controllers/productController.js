const authService  = require('../services/authService')

const productService = require('../services/productService')

module.exports = {
    create:async(req,res)=>{
        try {
            const data = await productService.create(req.body)
            res.status(data.statusCode).json(data)
        } catch (error) {
            console.log(error)
        }
    },

    update:async(req,res)=>{
        try {
            const data = await productService.update(req.body,req.params.id);
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    },
    delete:async(req,res)=>{
        try {
            const data = await productService.delete(req.params.id);
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    },
    getOne:async(req,res)=>{
        try {
            const data = await productService.getOne(req.params.id);
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    },
    getAll:async(req,res)=>{
        try {
            const data = await productService.getAll();
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    }
}