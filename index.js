import express from 'express'
import cors from 'cors'
import products from   './Router/productsRoute.js'
import bodyParser from 'body-parser'

var app = express()



app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(products)

 app.use(cors())
 

 


const port = process.env.PORT || 3000












app.listen(port, ()=>{
    console.log(`Serving at port ${port}`)
})








