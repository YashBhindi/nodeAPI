const express = require('express');
const router = express.Router();

const pool = require('../query');


let get_product_handler = (req, res, next) => {
    
    pool.query('SELECT * FROM product', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
    })
}

let post_product_handler = (req, res, next) => {
    pool.query('INSERT INTO product (name , price ) VALUES ( $1, $2 )',[req.body.name, req.body.price], (error, results) => {
        if (error) {
          throw error
        }
        res.status(201).send(`User added with ID: ${results.oid}`)    
    })
     
}



let get_product = (req , res ,next) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM product WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
    })
}

let updateProduct = (req, res) => {
    const id = parseInt(req.params.id)
   
    pool.query(
      'UPDATE product SET name = $1, price = $2 WHERE id = $3',
      [req.body.name, req.body.price, id],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`Product modified with ID: ${id}`)
      }
    )
  }


  const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id)
  
    pool.query('DELETE FROM product WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`Product deleted with ID: ${id}`)
    })
  }


router.get('/', get_product_handler);
router.post('/', post_product_handler);
router.get('/:id', get_product);

router.delete('/:id', deleteProduct);


router.put('/:id' , updateProduct);


module.exports = router;