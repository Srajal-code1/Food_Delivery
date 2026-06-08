import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { ctreateEditShop } from "../controllers/shop.controllers.js"

const shopRouter = express.Router()


shopRouter.get("/create-edit", isAuth, ctreateEditShop)


export default shopRouter