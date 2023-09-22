import { View, Text, TextInput, StyleSheet, TouchableOpacity, onChangeText } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'; // Importa react-native-modal-dropdown
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import { getCategorys } from '../services/ApiCategories'
import CaptureImage from './Admin/CaptureImage'
import SelectImages from './Admin/SelectImages'



const ProductFormScreen = ({route, navigation}) => {

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category_id:0
  });
 
  const [categorys, setCategorys] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null); // Estado para almacenar la categoría seleccionada
 
  useEffect(() => {
    // Llama a la función de servicio para obtener categorias
    getCategorys()
      .then(data => {
        // Maneja los datos obtenidos
        setCategorys(data);
        console.log(data)
      })
      .catch(error => {
        // Maneja los errores
        console.error(error);
      });
},[])







  // Cambiado de 'user' a 'product' en handleChange
  const handleChange = (name, value) => setProduct({ ...product, [name]: value });

  // Cambiado de 'user' a 'product' en handleSubmit
  const handleSubmit = () => {
    // Aquí puedes agregar lógica para guardar el producto en tu base de datos
    console.log(product); // Muestra el producto en la consola
  }

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({
        headerTitle: `Editar producto ${route.params.id}`
        // Aquí puedes agregar más opciones de navegación según tus necesidades
      });

      // Agregado un bloque async/await correctamente
      (async () => {
        const product = await getTasks(route.params.id); // Supongo que 'getTasks' es una función que obtiene el producto desde alguna fuente
        console.log(product);
        setProduct({
          title: product.title,
          description: product.description,
          price: product.price,
          category_id: selectedCategory

        });
      })();
    }
  }, []);

  


  
  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder='Nombre de producto'
        placeholderTextColor="gray"
        onChangeText={(text) => handleChange("title", text)}
        value={product.title}
      />
      <TextInput
        style={styles.input}
        placeholder='Descripción'
        placeholderTextColor="gray"
        onChangeText={(text) => handleChange("description", text)}
        value={product.description}
      />
      <TextInput
        style={styles.input}
        placeholder='Precio'
        placeholderTextColor="gray"
        onChangeText={(text) => handleChange("price", text)}
        value={product.price}
      />
      <ModalDropdown
        style={styles.dropdownContainer}
        options={categorys.map((category) => category.title)}
        defaultValue="⬇ Selecciona una categoría ⬇"
        onSelect={(index, value) => {
          const categoryId = categorys[index].id;
          setSelectedCategory(categoryId); // Actualiza el estado selectedCategory
          setProduct({ ...product, category_id: categoryId }); // Actualiza el estado product con el nuevo category_id
        }}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdown}
      />
      <SelectImages />
      <CaptureImage/>
      <TouchableOpacity
        style={styles.ButtonSave}
        onPress={handleSubmit}
      >
        <Text style={styles.Button_text}>GUARDAR</Text>
      </TouchableOpacity>
    </Layout>
  );
}


const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 40,
    padding: 10,
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 16
  },
  ButtonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: "white",
    borderColor: "black",
    width: "90%"
  },
  Button_text: {
    color: "grey",
    textAlign: "center"
  },
  dropdownContainer: {
    width: "90%",
    height: 40,
    padding: 10,
    backgroundColor: "white",
    marginTop: 10,
    color: "black",
    borderColor: "black",// Ancho del contenedor de opciones
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5
  },
  dropdownList: {
    // Estilos adicionales para la lista de opciones desplegables si es necesario
  }
});

export default ProductFormScreen;