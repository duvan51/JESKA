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
         uploadImage,
         connects,       
         pings,
         login,
         getUsers,


         createProductC
         

         


}from "../controllers/products.js"


const router = Router()




// Configurando multer

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, "../images"));
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage: storage });
//fin configurando multer*/


router.post('/products/upload-image', upload.single('image'), uploadImage)

//crear producto con imagen
router.post('/products/upload-im', createProductC)







router.get('/', connects)
router.get('/ping', pings)


router.get('/products', getProducts)
router.post('/products', createProduct)



router.get('/products/:id', getProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

// categorias
router.get('/category', getCategorys)
router.post('/category', createCategory)
router.get('/category/:id', createCategory)
router.delete('/category/:id', deleteCategory)
router.put('/category/:id', updateCategory)


//user 
router.post ("/login", login)

//users
router.get('/users', getUsers)



//user -- products
router.get('/user/:id/products', getProduct)



export default router






