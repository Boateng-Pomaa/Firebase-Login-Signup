import express from 'express'
const router = express.Router()

import registerProducts from '../Controller/products.js'
import getProducts from '../Controller/products.js'
import uploadFile from '../Controller/products.js'

router.
      post('/products', registerProducts)
router
      .get('/allproducts', getProducts)
router.
      post('/upload', uploadFile)





      export default router