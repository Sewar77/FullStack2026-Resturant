import { createProducts, getAllProducts } from "../models/products.Model.js";
import { asyncHandler } from "../middleware/asyncHandler.Middleware.js"
export const createProductsController = asyncHandler(async (req, res) => {
    //recive data => name, price, quanityt
    const { name, price, quantity } = req.body;
    try {
        //validation
        if (!name || !price || !quantity) {
            return res.status(400).json({ message: "should fill all fields1" })
        }
        console.log(typeof price);
        console.log(typeof quantity);

        if (typeof price !== "number") {
            return res.status(400).json({ message: "price  should be number" })
        }
        if (typeof quantity !== "number") {
            return res.status(400).json({ message: "  quantity should be number" })

        }
        if (price <= 0 || quantity <= 0) {
            return res.status(400).json({ message: "price and quantity should be more than 0" })
        }
        const newProduct = await createProducts({ name, price, quantity })
        return res.status(201).json({ message: "created", products: newProduct })

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "internal server error in create products" })

    }
})




