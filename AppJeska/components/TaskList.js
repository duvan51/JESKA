import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import TaskItem from './TaskItem';
import { getProducts } from '../services/ApiProducts'

const TaskList = () => {

    const [products, setProducts] = useState([])
    const [refreshing, setRefresing] = useState(false)


    const loadTask = async()=>{
      const data = await getProducts()
      setProducts(data) 
    }    

    useEffect(()=>{
      loadTask()
    },[])

    console.log(products)
    

    

    const handleDelete = async (id)=>{
        await deleteTask(id)
        await loadTask()
    }

    const renderItem=({ item }) => {
        return (<TaskItem task={item} handleDelete={handleDelete} />)
    }


    const onRefresh = React.useCallback(async ()=>{
        setRefresing(true);
        await loadTask()
        setRefresing(false);
    })

    return (
        <>
            <FlatList 
                style={{ width:'100%' }}
                data={products}
                keyExtractor={(item) => item.id + " "}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing}
                        colors={["black"]}
                        onRefresh={onRefresh}
                    
                    />
                }
            />
        </>
    );
};

export default TaskList;
