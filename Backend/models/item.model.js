import mongoose from "mongoose";

const itemSchems = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    shop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
    },
    category: {
      type: String,
      enum: [
        "Snacks",
        "Main Course",
        "Desserts",
        "Pizza",
        "Burger",
        "Sandwiches",
        "South Indian",
        "North Indian",
        "Chinese",
        "Fast Food",
        "Others",
      ],
      required : true,
    },
    price : {
        type : Number,
        min : 0,
        required : true
    },
    FoodType : {
        type : String,
        enum : ["veg, non veg"],
        required : true
    }
  },
  { timestamps: true },
);


const Item = mongoose.model("Item", itemSchema)
export default Item
