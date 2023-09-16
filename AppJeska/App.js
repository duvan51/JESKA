import { FlatList, SafeAreaView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';


const Stack = createStackNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen 
          name="users" 
          component={HomeScreen}
          options={({navigation})=>({
            headerRight:()=> 
              (
                <TouchableOpacity onPress={()=>navigation.navigate('TaskFormScreen')}>
                    <Text> ADD </Text>
                </TouchableOpacity>
              
              )
          })} 
        />
        <Stack.Screen 
          name="TaskFormScreen" 
          component={TaskFormScreen} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
