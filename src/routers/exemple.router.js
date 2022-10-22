import { Router } from "express"
import { getExempleController } from "../controllers/exemple.controller.js"
 


const router = Router()

router.get('/exemple', getExempleController)


export default router