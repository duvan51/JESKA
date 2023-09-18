import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, onChangeText } from 'react-native'
import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout'

const Createproduct = ({route, navigation}) => {
  
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
  })

  
  
  const handleChange = (name, value)=> setUser({...user, [name]:value});
  
  const handleSubmit = ()=>{
    setUser(user)
    navigation.navigate('users')
  }
 
 
  useEffect(()=>{
    if (route.params && route.params.id) {
      navigation.setOptions({headerTitle: `Editar usuario ${route.params.id}`
      
      // Aquí puedes agregar más opciones de navegación según tus necesidades
      });
      (async()=>{
        const user = await getTasks(route.params.id)});
        console.log(user)
        setUser({
          email: user.email,
          name: user.name,
          password: user.password
        })
      }
     

  },[]);


  return (
    <Layout>
      <TextInput 
      style={styles.input}
      placeholder='name'
      placeholderTextColor="gray"
      onChangeText={(text)=>handleChange("name",text)}
      value={user.name}
      />
      <TextInput
      style={styles.input} 
      placeholder='email'
      placeholderTextColor="gray"
      onChangeText={(text)=>handleChange("email",text)}
      value={user.email}
      />
      <TextInput 
      style={styles.input}
      placeholder='password'
      placeholderTextColor="gray"
      onChangeText={(text)=>handleChange("password",text)}
      value={user.password}
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