import { createDrawerNavigator } from '@react-navigation/drawer'
import AdminTienda from '../screens/AdminTienda'
import HomeScreen from '../screens/HomeScreen'
import ProductFormScreen from '../screens/ProductFormScreen'

import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();


const myIcon = <Icon name="rocket" size={30} color="#900" />;


const DrawelNavigation=()=> {
  return (
    
    
    <Drawer.Navigator>

        <>
        
        <Drawer.Screen 
        name="HomeScreen"
        component={ HomeScreen }
        />
        </>
        
        <Drawer.Screen 
        name="AdminTienda"
        component={ AdminTienda }
        />
        <Drawer.Screen 
        name="ProductFormScreen"
        component={ ProductFormScreen }
        />
        

    </Drawer.Navigator>
 
 
    )
}
export default DrawelNavigation;

