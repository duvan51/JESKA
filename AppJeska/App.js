import 'react-native-gesture-handler';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




import DrawelNavigation from './Navigation/DrawelNavigation';


const Stack = createStackNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
      <DrawelNavigation />
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
