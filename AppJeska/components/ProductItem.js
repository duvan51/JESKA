import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/FontAwesome';



const ProductItem = ({product, handleDelete}) => {

  const navigation = useNavigation();

  const navigateToScreen = () => {
    
    navigation.navigate('TaskFormScreen', {id: product.id });
  };
  

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.text} onPress={navigateToScreen}>
        <Text style={styles.itemTitle}>{product.title}</Text> 
        <Icon name="star" size={30} color="gold" />

      </TouchableOpacity>
      <View style={styles.Btns}>
        <TouchableOpacity style={styles.btnT}
        onPress={()=> handleDelete(item.id)}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnT} onPress={() => navigation.navigate('TaskFormScreen')}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
      
  )
};

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:"white",
        padding:20,
        marginVertical: 8,
        borderRadius:5,
        flexDirection:"row",
        flex:1,
        justifyContent:"space-between"
       

    },
    itemTitle:{
        color:"black"
    },
    Btns:{
      width:105,
      display:"flex",
      justifyContent:"flex-end",
      gap:2,
      


    },
    btnT:{
      justifyContent: "flex-end",
      backgroundColor:"red",
      borderRadius:5
    }
})


export default ProductItem