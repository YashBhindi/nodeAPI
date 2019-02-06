const express = require('express');
const router = express.Router();
const pool = require('../query');


let get_order_handler = (req , res ,next) => {
    res.status(200).json({
        message : "get_order_handler"
    })
}

let post_order_handler = (req , res ,next) => {
    res.status(200).json({
        message : "post_order_handler"
    })
}

let delete_order_handler = (req , res ,next) => {
    res.status(200).json({
        message : "delte_order_handler",
        id : req.params.id
    })
}
let pathch_order_handler = (req , res ,next) => {
    let id=req.params.id
    res.status(200).json({
        message : "patch_order_handler",
        id : id
    })
}




router.get('/' , get_order_handler);
router.post('/' , post_order_handler);
router.delete('/:id' , delete_order_handler);

module.exports = router;