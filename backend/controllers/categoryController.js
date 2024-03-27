
const categoryService = require('../services/categoryService')

module.exports = {
    create:async(req,res)=>{
        try {
            const data = await categoryService.create(req.body)
            res.status(data.statusCode).json(data)
        } catch (error) {
            console.log(error)
        }
    },

    update:async(req,res)=>{
        try {
            const data = await categoryService.update(req.body,req.params.id);
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    },
    delete:async(req,res)=>{
        try {
            const data = await categoryService.delete(req.params.id);
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    },
    getOne:async(req,res)=>{
        try {
            const data = await categoryService.getOne(req.params.id);
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    },
    getAll:async(req,res)=>{
        try {
            const data = await categoryService.getAll();
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    }
}