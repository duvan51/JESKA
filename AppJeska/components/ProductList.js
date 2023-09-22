import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import ProductItem from './ProductItem';
import { getProducts } from '../services/ApiProducts'

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [refreshing, setRefresing] = useState(false)


    const loadProduct = async()=>{ 
      const data = await getProducts()
      setProducts(data)
    
    }    

    useEffect(()=>{
        loadProduct()
    },[])

    

    

    const handleDelete = async (id)=>{
        await deleteTask(id)
        await loadProduct()
    }

    const renderItem=({ item }) => {
        return (<ProductItem product={item} handleDelete={handleDelete} />)
    }


    const onRefresh = React.useCallback(async ()=>{
        setRefresing(true);
        await loadProduct()
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

export default ProductList;
