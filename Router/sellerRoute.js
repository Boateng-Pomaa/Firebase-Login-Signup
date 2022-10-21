import express from 'express'
const router = express.Router()
import registerSeller from '../Controller/sellerController.js'



router
.post('/registerSeller',registerSeller)




export default router