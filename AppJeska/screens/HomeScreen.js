import { StyleSheet, Text } from 'react-native'
import React from 'react'
import TaskList from '../components/TaskList';
import Layout from '../components/Layout';

const HomeScreen=()=> {

  
  return (
     
    <>
    <Text>
      home
    </Text>
    <Layout>
       <TaskList  />
    </Layout>
    </>
  )
}
export default HomeScreen;
const styles = StyleSheet.create({})