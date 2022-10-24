import express from 'express'
const router = express.Router()

import { getProducts, registerProducts, uploadFile} from '../Controller/products.js'


router.get('/allproducts', getProducts)

router.post('/products', registerProducts)

router.post('/upload', uploadFile)





  export default router