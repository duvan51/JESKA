import {connect} from '../database'
import jws from "jsonwebtoken" 






export const connects = (req, res)=>{
    
    res.send("hello world")
}
export const pings = async(req, res)=>{
    const connection = await connect();
    const result = await connection.query("SELECT NOW()")
    res.json(result[0])
}




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
    const [results] = await connection.query('INSERT INTO products(title, description, price, category_id, ruta_imagen_princial) VALUES (?,?,?,?,?)', [
     
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.category_id,
        req.body.ruta_imagen_princial

    ]);
    
    res.json({
        id: results.insertId,
        ...req.body,
    });
}
///images////

export const uploadImage = async (req, res) => {
    
  const imagePath = "/images/" + req.file.filename;
  res.json({success: true, imagePath});



  /*
  try {
      console.log("This is the image:", req.file);
      console.log("This is the path:", req.file.path);
  
      const connection = await connect();
      const query = 'INSERT INTO images(product_id, path) VALUES (?, ?)';
      
      const [imageInsertResult] = await connection.query(query, [
        req.body.product_id, // Así asumimos que el product_id se envía en el cuerpo de la solicitud
        req.file.path,
      ]);
  
      res.json({
        id: imageInsertResult.insertId,
        path: req.file.path,
        product_id: req.body.product_id,
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }*/
};

export const createProductC =async(req, res)=>{
  try {
    // Hacer una solicitud a la ruta de carga de imagen
    const uploadResponse = await fetch('http://localhost:4000/products/upload-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: req.body, // Puedes necesitar ajustar cómo envías los datos dependiendo de tu configuración
    });

    // Verificar si la carga de la imagen fue exitosa
    if (!uploadResponse.ok) {
      throw new Error('Error al cargar la imagen');
    }

    // Extraer la respuesta de la carga de la imagen
    const uploadResult = await uploadResponse.json();

    // Hacer una solicitud a la ruta de creación de producto, incluyendo la información de la imagen
    const createProductResponse = await fetch('http://localhost:4000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imagePath: uploadResult.imagePath,


      }),
    });

    // Verificar si la creación del producto fue exitosa
    if (!createProductResponse.ok) {
      throw new Error('Error al crear el producto');
    }

    // Extraer la respuesta de la creación del producto
    const createProductResult = await createProductResponse.json();

    // Responder con la información del producto creado
    res.json(createProductResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error al procesar la solicitud.' });
  }
}






export const getImage =async(req, res) =>{
    const connection = await connect();
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
    const [rows] = await connection.query('SELECT * FROM category')
    res.json(rows)
}
export const getCategory = async(req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM category WHERE id= ?',[req.params.id, ]);
    res.json(rows[0]);

}
export const createCategory = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query('INSERT INTO category(title, descripcion) VALUES (?,?)', [

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
    const result = await connection.query("DELETE FROM category WHERE id=?", [req.params.id] )
    console.log(result)
    res.json({})
}
export const updateCategory = (req, res) => {
    res.send("hello world estamos en get Products")
}



///users

export const createUser = async (req, res)=>{
    const connection = await connect();
    const [results] = await connection.query('INSERT INTO user (name, cedula, telefono, marca, fabricante, activo, correo, contrasea) VALUES (?,?,?,?,?,?,?,?)', [

        req.body.name,
        req.body.cedula,
        req.body.telefono,
        req.body.marca,
        req.body.fabricante,
        req.body.activo,
        req.body.correo,
        req.contrasea,
    ]);
    res.json({
        id: results.insertId,
        ...req.body,
    });
    
}

// login

export const login = async (req, res )=>{
    const correo = req.body.correo;
    const clave = req.body.clave;

  if (!correo || !clave) {
    return res.status(400).json({ error: 'Correo y contraseña son obligatorios' });
  }

  try {
    // Realizar consulta a la base de datos para verificar las credenciales
    const connection = await connect();
    const query = 'SELECT * FROM user WHERE correo = ? AND contrasea = ?';
    const [results] = await connection.query(query, [correo, clave]);

    // Verificar si se encontró un usuario con las credenciales proporcionadas
    if (results.length > 0) {
      const foundUser = results[0];
      res.status(200).json({ message: 'Inicio de sesión exitoso', user: foundUser });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
    



// users

export const getUsers = async(req, res)=>{
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM user')
    res.json(rows)
} 