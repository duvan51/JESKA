import {Router} from "express"; 

import {
    createCategory,
    createProduct,
         deleteCategory,
         deleteProduct,
         getCategory,
         getCategorys,
         getProduct,
         getProducts,
         updateCategory,
         updateProduct,
         uploadImage
         


}from "../controllers/products.js"

const router = Router()
//image
//router.post('/images', uploadFile)

//products 

router.get('/products', getProducts)
router.post('/products', createProduct)
router.post('/products/upload', uploadImage)
router.get('/products/:id', getProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

// categorias
router.get('/category', getCategorys)
router.post('/category', createCategory)
router.get('/category/:id', createCategory)
router.delete('/category/:id', deleteCategory)
router.put('/category/:id', updateCategory)



export default router