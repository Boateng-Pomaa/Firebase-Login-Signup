
import admin  from "firebase-admin"
import  ServiceAccount  from "./ecommercehive-firebase-adminsdk-ar2z2-f6d3fe418a.json" assert{type:"json"}

// const firebaseConfig = {
//     apiKey: "AIzaSyC6oDfP78ROGPkfGOFYgjGZ_gvt83Tnjwg",
//     authDomain: "ecommercehive.firebaseapp.com",
//     projectId: "ecommercehive",
//     storageBucket: "ecommercehive.appspot.com",
//     messagingSenderId: "419922672437",
//     appId: "1:419922672437:web:0f23491d7dc83a6b48ea7c",
   
//   };

const firebase = admin.initializeApp({
    credential: admin.credential.cert(ServiceAccount)
 
})




export default firebase