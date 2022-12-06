import firebase from '../config/db.js'
import {ref, getStorage,uploadString} from  "firebase/storage"
import { Product } from '../models/product.js'
import { FieldValue,serverTimestamp } from "firebase/firestore"
const db = firebase.firestore()

db.settings({
    timestampsInSnapshots: true
  })



//retrieving all products
export  async function getProducts(req,res){
    try {
        const productsRef =  db.collection("products")
        const products = await productsRef.get()
        let responseArr = []


        if (products.empty) {
            res.status(200).json({ message: "No records found" })
          } 
        else {
            let total = 0;
            products.forEach((item) => {
              const product = new Product(
                item.id,
                item.data().gender,
                item.data().category,
                item.data().price,
                item.data().name,
                item.data().seller,
                item.data().seller_number,
                item.data().metals,
                item.data().metal_purity,
                item.data().product_weight,
                item.data().product_unit,
                item.data().metal_certification,
                item.data().main_color,
                item.data().sec_color,
                item.data().currency,
                item.data().createdAt,
                //item.data().updatedAt
                //item.data().dis_img,
                //item.data().sec_imgs
                 )
              responseArr.push(product);
              total = total + 1;
            });
            res.status(200).json({
              listing: responseArr,
              count: total
            });


    } 
}
    catch (error) {
        res.status(404).send(error)
        console.log(error)
    } 
}  


    //registerin new products
export async function registerProducts(req,res){
    try {
        const id = req.body.id
       const productDetails = {
        gender: req.body.gender,
      category: req.body.category,
      price: req.body.price,
      name: req.body.name,
      seller: req.body.seller,
      seller_number: req.body.seller_number,
      metals: req.body.metals,
      metal_purity: req.body.metal_purity,
      product_weight: req.body.product_weight,
      product_unit: req.body.product_unit,
      metal_certification: req.body.metal_certification,
      main_color: req.body.main_color,
      sec_color: req.body.sec_color,
      currency: req.body.currency,
      createdAt:new Date().toISOString(),
      dis_img: uploadFile(),
      //sec_imgs: req.body.sec_imgs
       }

       const collectionDB = db.collection("products").doc(id).create(productDetails)

      if(collectionDB){
        console.log(new Date().toISOString())
        res.status(200).send(collectionDB)
        
        
      }
       
    } catch (error) {
        res.status(404).send(error)
        console.log(error)
       
    }
}


// uploading an Image

// export async function imageUpload(req,res){
//     try {
//         const file = req.file;
//   const imageRef = ref(storage, file.originalname);
//   const metatype = { contentType: file.mimetype, name: file.originalname };
//   await uploadBytes(imageRef, file.buffer, metatype)
//     .then((snapshot) => {
//       res.send("uploaded!");
//     })
//     } catch (error) {
        
//     }
// }

//// uploading
 async function uploadFile(req,res){
try {
    const storage = getStorage()
    const {filename} = req.file.path
    const metadata = {contentType: filename.mimetype, name: filename.originalname }
    /// getting reference to the file
    const imageRef = ref(storage, filename.originalname)
    // Uploads file to the bucket
    await uploadString(imageRef,filename.buffer,metadata)
        .then((snapshot) => {
              res.status(200).send("File uploaded!")
            })
  console.log(`${filename} uploaded.`)
} catch (error) {
    res.status(404).send(error)
    console.log(error)
}
  
  }
  
  
