import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    // id:String,
    url:String,
    detailurl:String,
    title:Object,
    quantity:Number,
    description:String,
    disxount:String,
    tagline:String
});

const Product = mongoose.model('product',productSchema);

export default Product;