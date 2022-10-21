import db from '../config/db.js'
import {getStorage} from "firebase-admin/storage"
const bucket = process.env.BUCKET_URI
import multer from "multer"
import {ref, uploadString      , listAll,deleteObject} from  "firebase-admin/storage"
const memoStorage = multer.memoryStorage();
const upload = multer({ memoStorage });




/// retrieving all products
export default async function getProducts(req,res){
    try {
        const productsRef = db.collection("products")
        const response = await productsRef.get()
        let responseArr = []
        response.forEach(doc => {
            responseArr.push(doc.data())
        })
        res.status(200).send(responseArr)
    } catch (error) {
        res.status(404).send(error)
        console.log(error)
    } 
    }


    //registerin new products
export async function registerProducts(req,res){
    try {
        const id = req.body.id
       const productDetails = {gender:req.body.gender,
        category:req.body.category,
        price:req.body.price,
        name_of_product:req.body.name_of_product,
        owner:req.body.owner,
        main_color:req.body.main_color,
        sec_color:req.body.sec_color,
        currency:req.body.currency,
        material:req.body.material,
        dis_img:req.body.dis_img,
        //sec_imgs:req.body.sec_imgs[{}, {}, {}],
       }

       const collectionDB = db.collection("products").doc(id).set({productDetails})
      if(collectionDB){
        res.status(200).send(collectionDB)
        
      }
       
    } catch (error) {
        res.status(404).send(error)
        console.log(error)
       
    }
}


// uploading an Image

export async function imageUpload(req,res){
    try {
        const file = req.file;
  const imageRef = ref(storage, file.originalname);
  const metatype = { contentType: file.mimetype, name: file.originalname };
  await uploadBytes(imageRef, file.buffer, metatype)
    .then((snapshot) => {
      res.send("uploaded!");
    })
    } catch (error) {
        
    }
}
