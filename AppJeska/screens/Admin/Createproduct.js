import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, onChangeText } from 'react-native'
import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout'

const Createproduct = ({route, navigation}) => {
  
  const [product, setProduct] = useState({
    title:"",
    description:"",
    price:"",
    category_id:"1"
  })

  
  
  const handleChange = (name, value)=> setProduct({...product, [name]:value});
  
  const handleSubmit = ()=>{
    setProduct(product)
  }
 
 
  useEffect(()=>{
    if (route.params && route.params.id) {
      navigation.setOptions({headerTitle: `Editar usuario ${route.params.id}`
      
      // Aquí puedes agregar más opciones de navegación según tus necesidades
      });
      (async()=>{
        const product = await getTasks(route.params.id)});
        console.log(product)
        setProduct({
          title: product.title,
          description: product.description,
          price: product.price
        })
      }
     

  },[]);


  return (
    <Layout>
      <TextInput 
      style={styles.input}
      placeholder='nombre de producto'
      placeholderTextColor="gray"
      onChangeText={(text)=>handleChange("nombre de producto",text)}
      value={product.title}
      />
      <TextInput
      style={styles.input} 
      placeholder='description'
      placeholderTextColor="gray"
      onChangeText={(text)=>handleChange("descripcion",text)}
      value={product.description}
      />
      <TextInput 
      style={styles.input}
      placeholder='password'
      placeholderTextColor="gray"
      onChangeText={(text)=>handleChange("password",text)}
      value={product.price}
      />
      <TouchableOpacity
      style={styles.ButtonSave}
      onPress={handleSubmit}
      >
        <Text
        style={styles.Button_text}
        > GUARDAR </Text>
      </TouchableOpacity>
    </Layout>
  )
}

const styles = StyleSheet.create({
  input:{
    width:"90%",
    height:40,
    padding:10,
    backgroundColor:"white",
    marginTop:10,
    borderColor:"black",
    borderWidth:1,
    borderRadius:3,
    fontSize:16
  },
  ButtonSave:{
    paddingTop:10,
    paddingBottom:10,
    borderRadius: 5,
    marginTop:10,
    backgroundColor:"white",
    borderColor:"black",
    width:"90%"
  },
  Button_text:{
    color:"grey",
    textAlign:"center"

  }
})

export default Createproduct