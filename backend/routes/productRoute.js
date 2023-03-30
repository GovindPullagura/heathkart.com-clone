const express=require("express")
const { AddProduct, GetProduct, DeleteProduct, GetSingleProduct } = require("../Controller/ProductController")
const { productModel } = require("../models/productModel")
const productRoute=express.Router()

productRoute.post("/",AddProduct)

productRoute.get("/",GetProduct)
productRoute.get("/:id",GetSingleProduct)
productRoute.delete("/:id",DeleteProduct)


module.exports={
    productRoute
}