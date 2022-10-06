import { Router } from "express"





const router = Router()


router.get('/', async(req,res)=>{

  let info={
    argumentosEntrada:process.argv,
    plataforma: process.platform,
    versionNode: process.version,
    memoriaReservada: process.memoryUsage ,
    pathEjecucion: process.title,
    pid: process.pid,
    carpetaProyecto: process.cwd()
  }
  res.send(info)

})



export default router