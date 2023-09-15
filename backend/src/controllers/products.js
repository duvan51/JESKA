import {connect} from '../database'


export const getProducts =async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM products')
    res.json(rows)
}

// producto individual

export const getProduct = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM products WHERE id= ?',[req.params.id, ]);
    res.json(rows[0]); 
}
export const createProduct = async(req, res) => {
    const connection = await connect();
    const [results] = await connection.query('INSERT INTO products(title, descripcion, price, category_id) VALUES (?,?,?,?)', [
     
        req.body.title,
        req.body.descripcion,
        req.body.price,
        req.body.category_id,
    ]);
    
    res.json({
        id: results.insertId,
        ...req.body,
    });
}
export const uploadImage =async(req, res) =>{
    
    console.log(req.file)
    res.send("subido")
}







export const deleteProduct =async (req, res) => {
    const connection = await connect();
    const result = await connection.query("DELETE FROM products WHERE id=?", [req.params.id] )
    console.log(result)
    res.json({})
}

export const updateProduct = (req, res) => {
    res.send("hello world estamos en get Products")
}

//categorias de la tienda

export const getCategorys = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM categories')
    res.json(rows)
}
export const getCategory = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM categories WHERE id= ?',[req.params.id, ]);
    res.json(rows[0]);

}
export const createCategory = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query('INSERT INTO categories(title, descripcion) VALUES (?,?)', [

        req.body.title,
        req.body.descripcion
    ]);
    
    res.json({
        id: results.insertId,
        ...req.body,
    });
}
export const deleteCategory = async(req, res) => {
    const connection = await connect();
    const result = await connection.query("DELETE FROM categories WHERE id=?", [req.params.id] )
    console.log(result)
    res.json({})
}
export const updateCategory = (req, res) => {
    res.send("hello world estamos en get Products")
}

