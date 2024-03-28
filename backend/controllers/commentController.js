
const commentService = require('../services/commentService')

module.exports = {
    create:async(req,res)=>{
        try {
            const data = await commentService.create(req.body)
            res.status(data.statusCode).json(data)
        } catch (error) {
            console.log(error)
        }
    },

    update:async(req,res)=>{
        try {
            const data = await commentService.update(req.body,req.params.id);
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    },
    delete:async(req,res)=>{
        try {
            const data = await commentService.delete(req.params.id);
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    },
    getOne:async(req,res)=>{
        try {
            const data = await commentService.getOne(req.params.id);
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    },
    getAll:async(req,res)=>{
        try {
            const data = await commentService.getAll();
            res.status(data.statusCode).json(data); 
        } catch (error) {
            console.log(error); 
        }
    }
}