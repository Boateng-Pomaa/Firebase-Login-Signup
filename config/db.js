import { json } from "express"
import admin from "firebase-admin"
import credentials from './nodecrude-firebase-adminsdk-n0oy9-983bcd641e.json' assert{type:"json"}




admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

const db = admin.firestore()



export default db