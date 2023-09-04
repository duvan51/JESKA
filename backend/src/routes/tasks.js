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
         uploadFile
         


}from "../controllers/tasks.js"

const router = Router()
//image
router.post('/images', uploadFile)

//products 

router.get('/products', getProducts)
router.post('/products', createProduct)
router.get('/products/:id', getProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

// categorias
router.get('/category', getCategorys)
router.post('/category', createCategory)
router.get('/category/:id', createCategory)
router.get('/category/:id', deleteCategory)
router.get('/category/:id', updateCategory)



export default router