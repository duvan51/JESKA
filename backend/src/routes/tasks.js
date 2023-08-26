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
         updateProduct


}from "../controllers/tasks.js"

const router = Router()


//products 

router.get('/products', getProducts)
router.post('/products/:id', createProduct)
router.get('/products/:id', getProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)


router.get('/category', getCategorys)
router.get('/category/:id', getCategory)
router.get('/category/:id', createCategory)
router.get('/category/:id', deleteCategory)
router.get('/category/:id', updateCategory)



export default router