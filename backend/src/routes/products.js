import {Router} from "express";  
import multer, { diskStorage } from 'multer'; // Importa multer
import path from 'path'

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




// Configurando multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../Images'), 
    filename: (req, file, cb)=>{
        cb(null, Date.now() + "-" +file.originalname)
    }
})
const upload = multer({ storage: storage }).single('image');
//fin configurando multer


router.get('/products', getProducts)
router.post('/products', createProduct)
router.post('/products/upload',upload,uploadImage)
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