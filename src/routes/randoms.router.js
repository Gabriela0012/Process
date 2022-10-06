import { Router } from "express"
import {fork} from 'child_process'


const router = Router()


router.get('/',(req,res)=>{
	try {
		let cantidad = 100000000

		if(req.query.cant){
			cantidad = parseInt(req.query.cant)
		}
		const child = fork(`./operacionFork.js`)

		child.send(cantidad)
		child.on('message', val=>{
			res.send(val)
		})
	} catch (error) {
		res.status(500).send({status:'error', message:'Server error'})
	}
})



export default router