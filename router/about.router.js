import express from 'express'
import { aboutPage, infoPage } from '../controller/about.controller.js'
const router=express.Router()

router.get("/",aboutPage)
router.get("/:username",infoPage)

export default router