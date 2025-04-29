import {View, Text} from 'react-native'
import React, {useEffect} from 'react'
import {Redirect, useLocalSearchParams, useNavigation} from "expo-router";
import {products} from "@/store/products.store";

const ProductById = () => {

    const {id} = useLocalSearchParams()
    const product = products.find((p) => p.id === id)
    const navigation = useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            title: product?.title ?? "Product"
        })
    })

    if(!product){
        return <Redirect href="/"/>
    }

    return (
        <View className="px-5 mt-10">
            <Text className="font-work-black text-2xl">{product.title}</Text>
            <Text className="">{product.description}</Text>
            <Text className="font-work-light ">{product.price}</Text>
        </View>
    )
}
    export default ProductById
