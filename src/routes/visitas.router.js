import { Router } from "express"



const router = Router()
let visitas = 0


router.get('/', async(req,res)=>{
  res.send(`Visitado ${++visitas} veces`)

})


export default router