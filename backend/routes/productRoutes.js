const express = require("express");
const Product = require("../models/Product");
const protect = require("../middleware/authMiddleware");

const router = express.Router();


// ===============================
// Add Product
// ===============================
router.post("/", protect, async (req, res) => {

  try {

    const product = await Product.create(req.body);

    res.status(201).json({
      message: "Product Added Successfully",
      product
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});



// ===============================
// Get All Products
// ===============================
router.get("/", protect, async (req, res) => {

  try {

    const products = await Product.find();

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});



// ===============================
// Low Stock Alert ⭐ NEW
// ===============================
router.get("/alerts/low-stock", protect, async (req,res)=>{

  try {


    const products = await Product.find({

      $expr:{
        $lte:[
          "$quantity",
          "$threshold"
        ]
      }

    });


    res.status(200).json({

      count: products.length,

      message:"Low Stock Products",

      products

    });



  } catch(error){

    res.status(500).json({

      message:error.message

    });

  }

});



// ===============================
// Get Single Product
// ===============================
router.get("/:id", protect, async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);


    if (!product) {

      return res.status(404).json({
        message:"Product Not Found"
      });

    }


    res.status(200).json(product);


  } catch(error){

    res.status(500).json({
      message:error.message
    });

  }

});



// ===============================
// Update Product
// ===============================
router.put("/:id", protect, async(req,res)=>{

  try{

    const product =
      await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new:true
        }
      );


    if(!product){

      return res.status(404).json({
        message:"Product Not Found"
      });

    }


    res.status(200).json({

      message:"Product Updated Successfully",
      product

    });



  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }


});



// ===============================
// Delete Product
// ===============================
router.delete("/:id", protect, async(req,res)=>{


  try{


    const product =
      await Product.findByIdAndDelete(
        req.params.id
      );



    if(!product){

      return res.status(404).json({
        message:"Product Not Found"
      });

    }



    res.status(200).json({

      message:"Product Deleted Successfully"

    });



  }catch(error){


    res.status(500).json({

      message:error.message

    });


  }


});
// ===============================
// Dashboard Stats
// ===============================
router.get("/dashboard/stats", protect, async(req,res)=>{

  try{

    const totalProducts = await Product.countDocuments();

    const products = await Product.find();


    let totalStock = 0;

    products.forEach(product=>{
      totalStock += product.quantity;
    });


    const lowStock = await Product.countDocuments({

      $expr:{
        $lte:[
          "$quantity",
          "$threshold"
        ]
      }

    });


    const categories = await Product.distinct("category");


    res.json({

      totalProducts,
      totalStock,
      lowStock,
      totalCategories: categories.length

    });


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

});

module.exports = router;