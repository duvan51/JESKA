import { createDrawerNavigator } from '@react-navigation/drawer'
import AdminTienda from '../screens/AdminTienda'
import HomeScreen from '../screens/HomeScreen'
import React from 'react'

const Drawer = createDrawerNavigator();


const DrawelNavigation=()=> {
  return (
    
    
    <Drawer.Navigator>

        
        <Drawer.Screen 
        name="HomeScreen"
        component={ HomeScreen }
        />
        
        <Drawer.Screen 
        name="AdminTienda"
        component={ AdminTienda }
        />
        

    </Drawer.Navigator>
 
 
    )
}
export default DrawelNavigation;

