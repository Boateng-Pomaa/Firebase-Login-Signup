import admin from 'firebase-admin'

 export default async function registerSeller(req,res){
    const seller = {
        email: req.body.email,
        password: req.body.password
    }

    const sellerRes = await admin.auth().createUser({
        email: seller.email,
        password:seller.password,
        emailVerified:false,
        disabled: false
    })
    if (seller){
        res.status(200).json({
            message:"Regisration Successful",
            sellerRes
        })
    }
    else {
        res.status(404).json({
            message:"Registration failed",
           
        })
        console.log(console.error())
    }
}



// Logging in user

