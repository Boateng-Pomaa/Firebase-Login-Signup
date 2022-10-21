import db from '../config/db.js'


/// retrieving all new collections
export default async function get_new_collections(req,res){
    try {
        const productRef = db.collection("new_collections")
        const response = await productRef.get()
        let responseArr2 = []
        response.forEach(doc => {
            responseArr2.push(doc.data())
        })
        res.status(200).send(responseArr2)
    } catch (error) {
        res.status(404).send(error)
        console.log(error)
    }
    
        
    }


    ///Registering new collecection
export async function reg_new_collections(req,res){
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
        //dis_img:req.body.dis_img,
        //sec_imgs:req.body.sec_imgs[{}, {}, {}],
       }

       const collectionDB = db.collection("new_collections").doc(id).set({productDetails})
      if(collectionDB){
        res.status(200).send(collectionDB)
        
      }
       
    } catch (error) {
        res.status(404).send(error)
        console.log(error)
       
    }
}


