import express  from 'express'
const router = express.Router()

import get_new_collections from '../Controller/newCollections.js'
import  reg_new_collections  from '../Controller/newCollections.js'


router.post('/newCollections',reg_new_collections)
router.get('/allnewCollections',get_new_collections)









export default router