import express from 'express'
const router = express.Router()

import registerProducts from '../Controller/products.js'
import getProducts from '../Controller/products.js'


router.
      post('/products', registerProducts)
router
      .get('/allproducts', getProducts)





      export default router